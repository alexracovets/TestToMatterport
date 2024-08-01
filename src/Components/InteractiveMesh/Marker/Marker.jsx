import { useEffect, useMemo, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { Ring } from '@react-three/drei';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import gsap from 'gsap';

Marker.propTypes = {
    position: PropTypes.array,
    normal: PropTypes.array
}

export default function Marker({ position, normal }) {
    const { camera } = useThree(); 
    const [animParameter] = useState({
        opacityInner: 1,
        opacityOuter: 1
    });

    const finalPosition = useMemo(() => {
        const markerPosition = new THREE.Vector3(...position);
        const cameraPosition = new THREE.Vector3().setFromMatrixPosition(camera.matrixWorld);
        const directionToCamera = markerPosition.clone().sub(cameraPosition).normalize();
        return markerPosition.add(directionToCamera.multiplyScalar(-0.1)).toArray();
    }, [position, camera]);

    const quaternion = useMemo(() => new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        new THREE.Vector3().fromArray(normal)
    ), [normal]);

    useEffect(() => {
        gsap.to(animParameter, { 
            ease: "power2.inOut",
            duration: 0.3,
        })
    }, [ animParameter])
    
    return (
        <mesh position={finalPosition} quaternion={quaternion}>
            <Ring args={[0.2, 0.15, 50, 1]}>
                <meshBasicMaterial color="white" side={THREE.DoubleSide} opacity={animParameter.opacityInner} transparent visible={animParameter.opacityInner < 0.1 ? false : true} />
            </Ring>
            <Ring args={[0.26, 0.28, 50, 1]}>
                <meshBasicMaterial color="white" side={THREE.DoubleSide} opacity={animParameter.opacityOuter} transparent visible={animParameter.opacityInner < 0.1 ? false : true} />
            </Ring>
        </mesh>
    );
}

