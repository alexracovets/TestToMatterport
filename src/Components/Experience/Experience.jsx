import { Canvas } from "@react-three/fiber";
import { useState } from "react";

import InteractiveMesh from "../InteractiveMesh/InteractiveMesh";
import MeTeleport from "../MeTeleport/MeTeleport";
import MeCamera from "../MeCamera/MeCamera";
import Model from "../Model/Model";

import s from './Experience.module.scss';
export default function Experience() {
    const [modelRef, setModelRef] = useState(null);
    return (
        <Canvas
            className={s.canvas}
            dpr={1}
            gl={{ preserveDrawingBuffer: true }}
        >
            <ambientLight intensity={10} />
            <MeCamera />
            <Model setModelRef={setModelRef} />
            <MeTeleport />
            <InteractiveMesh intersect={modelRef?.children} />
        </Canvas>
    )
}