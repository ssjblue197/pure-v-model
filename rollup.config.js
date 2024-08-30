import resolve from 'rollup-plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/vue-p-model.js',
    output: [
        { file: 'dist/index.js', format: 'cjs' },
        { file: 'dist/index.min.js', format: 'cjs', plugins: [terser()] },
        { file: 'dist/index.esm.js', format: 'esm' }
    ],
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env']
        })
    ]
};
