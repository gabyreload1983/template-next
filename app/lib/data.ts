import { heroImageUrl, gallery } from "./dataBase";

export const getHeroImageUrl = () => {
  return heroImageUrl;
};

export const getGallery = async () => {
  return gallery;
};
