import type {
  ComponentGeneralArticle,
  Maybe,
  UploadFileEntityResponse,
} from "@/models/types";
import type { CardBase } from "@/components/Card.astro";

const imageRespToUrl = (resp?: Maybe<UploadFileEntityResponse>) => {
  if (resp) return import.meta.env.STRAPI_URL + resp.data?.attributes?.url;
  else return "/no-image.jpg";
};

const articleToCard = (article: ComponentGeneralArticle, link: string) => {
  return {
    title: article.title,
    description: article.description,
    imageUrl: imageRespToUrl(article.cover),
    link: link,
    publishDate: article.publishDate,
  } as CardBase;
};

export { imageRespToUrl, articleToCard };