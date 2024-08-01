import { extend } from '@react-three/fiber';
import { TransitionMaterial } from '../../../shader/TransitionMaterial';

extend({ TransitionMaterial });

import usePanorams from '../../../store/usePanorams';

export default function ModelMaterial({ texture }) {
    const currentPanoram = usePanorams((state) => state.current);

    return (
        <transitionMaterial
            iTexture={texture[currentPanoram]}
            brightness={0.1}
            contrast={0.1}
        />
    );
}
