import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import usePanorams from '../../store/usePanorams';
import useLoading from '../../store/useLoading';
import ModelGeometry from './ModelGeometry/ModelGeometry';

export default function Model({ setModelRef }) {
    const panorams = usePanorams((state) => state.panorams);
    const setIsLoaded = useLoading((state) => state.setIsLoaded);
    const setLoadFile = useLoading((state) => state.setLoadFile);

    const { nodes } = useGLTF('model/montana.gltf')
    const modelRef = useRef();
    const [loadedTextures, setLoadedTextures] = useState(null);

    useEffect(() => {
        if (modelRef.current) {
            setModelRef(modelRef.current);
        }
    }, [setModelRef]);

    useEffect(() => {
        const manager = new THREE.LoadingManager();
        const loader = new THREE.TextureLoader(manager);
        const textures = {};
        Object.values(nodes).forEach((item) => {
            if (item.name !== 'Scene') {
                textures[item.name] = {};
                panorams.map((_, idx) => {
                    const texture = loader.load(
                        `./model/textures/${item.name}/${item.name}_${idx}.jpg`
                    );
                    texture.flipY = false;
                    textures[item.name][idx] = texture;
                })
            }
        });


        manager.onLoad = () => {
            setLoadedTextures(textures);
            setIsLoaded(true);
        };

        manager.onProgress = (url, itemsLoaded, itemsTotal) => {
            const loadingText = `loading: ${itemsLoaded + 1}/${itemsTotal}`;
            setLoadFile(loadingText);
        };

        manager.onError = (url) => {
            console.error('There was an error loading ' + url);
        };
    }, [nodes, panorams, setIsLoaded, setLoadFile]);

    return (
        <group ref={modelRef}>
            {loadedTextures != null && (
                <>
                    <ModelGeometry geometry={nodes.ROOM.geometry} texture={loadedTextures['ROOM']} />
                    <ModelGeometry geometry={nodes.CORRIDOR.geometry} texture={loadedTextures['CORRIDOR']} />
                    <ModelGeometry geometry={nodes.ROOM_CHILDREN.geometry} texture={loadedTextures['ROOM_CHILDREN']} position={[3.612, 0, -1.355]} />
                    <ModelGeometry geometry={nodes.ROOM_BATH.geometry} texture={loadedTextures['ROOM_BATH']} position={[5.436, 0, -1.368]} />
                    <ModelGeometry geometry={nodes.ROOM_ENGINEERING.geometry} texture={loadedTextures['ROOM_ENGINEERING']} position={[7.874, 0, -0.427]} />
                    <ModelGeometry geometry={nodes.ROOM_LIVING.geometry} texture={loadedTextures['ROOM_LIVING']} position={[6.299, 0, 3.197]} />
                    <ModelGeometry geometry={nodes.ROOM_BED.geometry} texture={loadedTextures['ROOM_BED']} position={[6.31, 0, 10.76]} />
                    <ModelGeometry geometry={nodes.ROOM_STORAGE.geometry} texture={loadedTextures['ROOM_STORAGE']} position={[8.516, 0, 10.858]} />
                    <ModelGeometry geometry={nodes.ROOM_BATH2.geometry} texture={loadedTextures['ROOM_BATH2']} position={[8.487, 0, 12.698]} />
                    <ModelGeometry geometry={nodes.POOL.geometry} texture={loadedTextures['POOL']} />
                    <ModelGeometry geometry={nodes.GARDEN.geometry} texture={loadedTextures['GARDEN']} position={[-3.829, -0.061, 11.814]} />
                    <ModelGeometry geometry={nodes.PARKING.geometry} texture={loadedTextures['PARKING']} position={[9.073, -0.058, -4.855]} />
                    <ModelGeometry geometry={nodes.POOL_HOME.geometry} texture={loadedTextures['POOL_HOME']} />
                    <ModelGeometry geometry={nodes.BACKGROUND.geometry} texture={loadedTextures['BACKGROUND']} position={[-11.66, -0.058, -5.636]} />
                </>
            )}
        </group>
    );
}

useGLTF.preload('./model/montana.gltf');
