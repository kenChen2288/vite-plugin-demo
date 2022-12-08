import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import img2bmpPlguin from "vite-plugin-img2bmp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), img2bmpPlguin()],
});
