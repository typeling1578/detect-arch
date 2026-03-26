import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default {
    input: "src/index.mjs",
    output: [
        {
            name: "detectArch",
            file: "dist/detect-arch.mjs",
            format: "es",
            compact: true
        },
        {
            name: "detectArch",
            file: "dist/detect-arch.cjs",
            format: "cjs",
            exports: "named",
            compact: true
        },
        {
            name: "detectArch",
            file: "dist/detect-arch.iife.js",
            format: "iife",
            exports: "named",
            compact: true
        },
        {
            name: "detectArch",
            file: "dist/detect-arch.min.mjs",
            format: "es",
            compact: true,
            plugins: [
                terser(),
            ],
        },
        {
            name: "detectArch",
            file: "dist/detect-arch.min.cjs",
            format: "cjs",
            exports: "named",
            compact: true,
            plugins: [
                terser(),
            ],
        },
        {
            name: "detectArch",
            file: "dist/detect-arch.iife.min.js",
            format: "iife",
            exports: "named",
            compact: true,
            plugins: [
                terser(),
            ],
        }
    ],
    plugins: [
        nodeResolve(),
        commonjs()
    ]
};
