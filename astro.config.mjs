import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    astroImageTools,
    prefetch(),
  ],
});
