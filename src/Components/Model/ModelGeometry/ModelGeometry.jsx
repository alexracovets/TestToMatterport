import ModelMaterial from './ModelMaterial';

export default function ModelGeometry({ geometry, texture, position }) {

    return (
        <mesh geometry={geometry} position={position ? position : [0, 0, 0]}>
            <ModelMaterial texture={texture} />
        </mesh>
    );
}
