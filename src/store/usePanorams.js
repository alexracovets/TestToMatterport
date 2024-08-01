import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const usePanorams = create(immer((set) => ({
    current: 0,
    transition: 0,
    panorams: [
        {
            position: [0.471, 1.32, 0.22]
        },
        {
            position: [3.549, 1.32, 0.506]
        },
        {
            position: [3.049, 1.32, -1.699]
        },
        {
            position: [2.879, 1.314, 0.853]
        },
        {
            position: [5.61, 1.341, 0.58]
        },
        {
            position: [5.086, 1.37, -1.326]
        },
        {
            position: [6.356, 1.32, 1.442]
        },
        {
            position: [7.184, 1.348, 1.323]
        },
        {
            position: [7.022, 1.299, -0.977]
        },
        {
            position: [9.394, 1.345, 1.552]
        },
        {
            position: [8.747, 1.308, 0.759]
        },
        {
            position: [5.924, 1.328, 4.036]
        },
        {
            position: [9.495, 1.351, 5.638]
        },
        {
            position: [9.332, 1.358, 8.399]
        },
        {
            position: [7.831, 1.353, 8.548]
        },
        {
            position: [6.29, 1.359, 5.61]
        },
        {
            position: [5.611, 1.375, 10.268]
        },
        {
            position: [4.953, 1.38, 13.209]
        },
        {
            position: [8.888, 1.355, 10.129]
        },
        {
            position: [8.468, 1.356, 12.634]
        },
        {
            position: [9.295, 1.444, 13.491]
        },
        {
            position: [10.015, 1.231, 11.589]
        },
        {
            position: [3.805, 1.227, 6.118]
        },
        {
            position: [-1.016, 1.207, 4.764]
        },
        {
            position: [3.858, 1.224, 2.364]
        },
        {
            position: [1.267, 1.179, 5.445]
        },
        {
            position: [-3.248, 1.098, 12.142]
        },
        {
            position: [1.582, 1.166, 14.934]
        },
        {
            position: [-3.347, 1.155, 1.584]
        },
        {
            position: [4.183, 1.229, -5.202]
        },
        {
            position: [9.042, 1.201, -4.292]
        },
        {
            position: [13.419, 1.153, -0.31]
        },
        {
            position: [13.446, 0.983, 15.189]
        },
        {
            position: [-2.114, 1.32, -5.22]
        },
    ],
    setNewPanoram: (change) => {
        set((state) => {
            state.transition = change;
        });
        requestAnimationFrame(() => {
            setTimeout(() => {
                set((state) => {
                    state.current = change;
                });
            }, 300);
        });
    }
})));

export default usePanorams;
