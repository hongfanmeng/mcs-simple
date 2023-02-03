/// <reference types="astro/client" />
/// <reference types="astro-imagetools" />

declare module "astro-imagetools/components";

interface ImportMetaEnv {
  readonly STRAPI_URL: string;
  readonly STRAPI_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
