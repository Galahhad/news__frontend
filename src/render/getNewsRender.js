import img from "../../assets/spider-man-1.jpg";
import { initialState } from "../initialState";
import { getNewsById } from "../getNewsById";

export const render = () => {
  // main.textContent = "";
  const newsSave = document.querySelector(".news__save");

  const allNewsContainer = document.createElement("div");
  allNewsContainer.classList.add("all-news__container");

  if (Array.isArray(initialState.news)) {
    newsSave.textContent = "";

    initialState.news.forEach((news) => {
      const newsItem = document.createElement("div");
      newsItem.classList.add("news__item");
      newsItem.textContent = news.title;

      newsItem.addEventListener("click", () => {
        getNewsById(news._id);
      });

      allNewsContainer.append(newsItem);
      newsSave.append(allNewsContainer);
    });
  } else {
    newsSave.textContent = "";

    const oneNewsContainer = document.createElement("div");
    oneNewsContainer.classList.add("one-news__container");

    const newsImage = document.createElement("img");
    newsImage.classList.add("news__image");
    newsImage.src = img;

    const newsContent = document.createElement("div");
    newsContent.classList.add("news__content");

    oneNewsContainer.append(newsImage, newsContent);

    const newsSubtitle = document.createElement("h1");
    newsSubtitle.classList.add("news__subtitle");
    newsSubtitle.textContent = initialState.news.title;

    const newsCategory = document.createElement("div");
    newsCategory.classList.add("news__category");
    newsCategory.textContent = initialState.news.category.categoriesName;

    const newsText = document.createElement("div");
    newsText.classList.add("news__text");
    newsText.textContent = initialState.news.text;

    newsContent.append(newsSubtitle, newsCategory, newsText);

    const commentsContainer = document.createElement("div");
    commentsContainer.classList.add("comments__container");

    const commentsList = document.createElement("ul");
    commentsList.classList.add("comments__list");

    newsSave.append(oneNewsContainer);
  }
};
