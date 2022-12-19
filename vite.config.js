import { sveltekit } from "@sveltejs/kit/vite";
import viteTs from "vite-plugin-ts"

/** @type {import("vite").UserConfig} */
const config = {
    plugins: [
        viteTs(),
        sveltekit()
    ]
};

export default config;
