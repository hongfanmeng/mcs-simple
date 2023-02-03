import type {
  ComponentGeneralArticle,
  Maybe,
  UploadFileEntityResponse,
} from "@/models/types";
import type { CardBase } from "@/components/base/Card.astro";

const imageRespToUrl = (resp?: Maybe<UploadFileEntityResponse>) => {
  if (resp) return resp.data?.attributes?.url!;
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

const titleClasses = ["font-bold mx-auto w-fit", "text-3xl lg:text-4xl"];

export { imageRespToUrl, articleToCard, titleClasses };
