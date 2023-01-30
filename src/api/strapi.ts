import Strapi from "strapi-sdk-js";

const strapi = new Strapi({
  url: import.meta.env.STRAPI_URL,
  prefix: "/api",
});

strapi.axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.STRAPI_TOKEN
}`;

export default strapi;
