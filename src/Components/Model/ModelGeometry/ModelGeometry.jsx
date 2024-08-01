import { extend } from '@react-three/fiber';
import { TransitionMaterial } from '../../../shader/TransitionMaterial';

extend({ TransitionMaterial });

import usePanorams from '../../../store/usePanorams';

export default function ModelGeometry({ geometry, texture, position }) {
    const currentPanoram = usePanorams((state) => state.current);
    
    return (
        <mesh geometry={geometry} position={position ? position : [0, 0, 0]}>
            <transitionMaterial
                iTexture={texture[currentPanoram]}
                brightness={0.1}
                contrast={0.1}
            />
        </mesh>
    );
}
