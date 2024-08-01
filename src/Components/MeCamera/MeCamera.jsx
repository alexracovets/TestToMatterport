import { CameraControls, PerspectiveCamera } from '@react-three/drei';
import { useEffect, useRef } from 'react';

import useLoading from '../../store/useLoading';
import usePanorams from '../../store/usePanorams';

export default function MeCamera() {
    const isLoaded = useLoading((state) => state.isLoaded);
    const panorams = usePanorams((state) => state.panorams);
    const current = usePanorams((state) => state.current);

    const orbitRef = useRef();
    const cameraRef = useRef();

    useEffect(() => {
        const newPosition = panorams[current];
        orbitRef.current.moveTo(...newPosition.position, true);
    }, [isLoaded, current, panorams])

    return (
        <>
            <PerspectiveCamera ref={cameraRef} fov={58.716} position={[0, 0, 0.01]} makeDefault />
            <CameraControls
                ref={orbitRef}
                fov={58.716}
                camera={cameraRef.current}
                enablePan={false}
                enableZoom={false}
                // maxDistance={0.01}
                // minDistance={0.01}
                azimuthRotateSpeed={-0.5}
                polarRotateSpeed={-0.5}
                maxPolarAngle={Math.PI / 1.4}
                minPolarAngle={Math.PI / 3.5} 
                truck={[0, 0, 0.01]}
                
            />
        </>
    )
}
