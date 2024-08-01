import { Box, Ring } from '@react-three/drei';
import PropTypes from 'prop-types';
import * as THREE from 'three';

import usePanorams from '../../store/usePanorams';

export default function MeTeleport() {
    const panorams = usePanorams((state) => state.panorams);
    const setNewPanoram = usePanorams((state) => state.setNewPanoram);

    return (
        <>
            {panorams.map((panoram, idx) => {
                return (
                    <group key={idx} >
                        <mesh position={[panoram.position[0], 0+0.1, panoram.position[2]]} rotation={[Math.PI / 2, 0, 0]} onClick={() => setNewPanoram(idx)} >
                            <Ring args={[0.1, 0.15, 50, 1]}>
                                <meshBasicMaterial color="white" side={THREE.DoubleSide} />
                            </Ring>
                            <Ring args={[0.22, 0.28, 50, 1]}>
                                <meshBasicMaterial color="white" side={THREE.DoubleSide} />
                            </Ring>
                        </mesh>
                    </group>
                )
            })}
        </>
    )
}

MeTeleport.propTypes = {
    textures: PropTypes.array
}; 
