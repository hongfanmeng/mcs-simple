/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly STRAPI_URL: string;
  readonly STRAPI_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
