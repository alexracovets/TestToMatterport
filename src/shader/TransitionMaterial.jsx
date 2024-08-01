import { shaderMaterial } from "@react-three/drei";

export const TransitionMaterial = shaderMaterial(
    {
        iTexture: null,
        brightness: 0.0,
        contrast: 0.0,
    },
    /* glsl */ `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
    /* glsl */ `
    uniform sampler2D iTexture;  
    uniform float brightness;
    uniform float contrast;
    varying vec2 vUv;

    vec4 applyBrightnessContrast(vec4 color, float brightness, float contrast) {
        color.rgb += brightness; // Adjust brightness
        color.rgb = (color.rgb - 0.5) / (1.0 - contrast) + 0.5; 
        return color;
    }

    void main() {  
        vec2 uv = vUv; 
        vec4 _texture = texture2D(iTexture, uv);
        gl_FragColor = _texture; 
    }`
);
