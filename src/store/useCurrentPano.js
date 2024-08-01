import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useCurrentPano = create(immer((set) => ({
    image: '/panoramas/0.jpg',
    position: [0, 0, 0],
    spherePosition: [-0.30, 1.61, 0.44],
    sphereRotation: [0.02, 0.96, -0.01],
    setLoadFile: (value) => set((state) => {
        state.loadFile = value;
    }),
    setIsLoaded: (value) => set((state) => {
        state.isLoaded = value;
    })
})));

export default useCurrentPano; 
