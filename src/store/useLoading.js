import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useLoading = create(immer((set) => ({
    isLoaded: false,
    loadFile: '_ _ _',
    setLoadFile: (value) => set((state) => {
        state.loadFile = value;
    }),
    setIsLoaded: (value) => set((state) => {
        state.isLoaded = value;
    })
})));

export default useLoading;