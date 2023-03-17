import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import { presetUno } from "unocss";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      presets: [
        presetUno(),
      ],
    }),
  ],
});
