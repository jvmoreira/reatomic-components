import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'reatomic',
    sourcemap: true,
    globals: {
      'react': 'React',
      'styled-components': 'styled',
    },
  },
  external: ['react', 'react-dom', 'styled-components'],
  plugins: [typescript({
    outputToFilesystem: false,
    exclude: ['**/*.test.*', '**/*.stories.*'],
  })],
};
