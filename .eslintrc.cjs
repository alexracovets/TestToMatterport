module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/no-unknown-property": ["error", { "ignore": ["contrast", "brightness", "prevMode", "args", "vertexColors", "alphaTest", "blending", "array", "itemSize", "count", "intensity", "castShadow", "power", "roughness", "receiveShadow", "geometry", "material", "quaternion", "position", "rotation", "dispose", "material-roughness", "emissive", "emissiveIntensity", "matcap", "side", "transparent", "depthWrite", "visible", "map", "attach", "far", "near", "morphTargetDictionary", "morphTargetInfluences", "depthTexture", "colorTexture", "object"] }]
  },
}
