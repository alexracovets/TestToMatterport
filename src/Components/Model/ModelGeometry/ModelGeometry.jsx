import { extend, useThree } from '@react-three/fiber';

import { TransitionMaterial } from '../../../shader/TransitionMaterial';
import usePanorams from '../../../store/usePanorams';
import { useEffect, useRef } from 'react';

extend({ TransitionMaterial });
export default function ModelGeometry({ geometry, texture, position }) {
    const currentPanoram = usePanorams((state) => state.current);
    const { gl, scene, camera } = useThree();
    const meshRef = useRef();
    const materialRef = useRef();

    useEffect(() => {
        if (meshRef.current && materialRef.current) {
            gl.compile(scene, camera);
        }
    }, [gl, scene, camera, meshRef, materialRef])

    return (
        <mesh
            ref={meshRef}
            geometry={geometry}
            position={position ? position : [0, 0, 0]}
        >
            <transitionMaterial
                ref={materialRef}
                iTexture={texture[currentPanoram]}
                brightness={0.1}
                contrast={0.1}
            />
        </mesh>
    );
}
