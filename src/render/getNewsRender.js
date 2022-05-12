import img from "../../assets/spider-man-1.jpg";
import { initialState } from "../initialState";
import { getNewsById } from "../getNewsById";

const newsWrapper = document.querySelector(".news_container");

export const render = () => {
  // main.textContent = "";

  if (Array.isArray(initialState.news)) {
    // main.textContent = "";

    initialState.news.forEach((news) => {
      const newsContent = document.createElement("div");
      newsContent.classList.add("news_content");
      newsContent.textContent = news.title;

      newsContent.addEventListener("click", () => {
        getNewsById(news._id);
      });

      newsWrapper.append(newsContent);
    });
  } else {
    newsWrapper.textContent = "";

    const oneNewsContainer = document.createElement("div");
    oneNewsContainer.classList.add("one-news__container");

    const newsImage = document.createElement("img");
    newsImage.classList.add("news__image");
    newsImage.src = img;

    const newsContent = document.createElement("div");
    newsContent.classList.add("news__content");

    oneNewsContainer.append(newsImage, newsContent);

    const newsTitle = document.createElement("h1");
    newsTitle.classList.add("news__title");
    newsTitle.textContent = initialState.news.title;

    const newsCategory = document.createElement("div");
    newsCategory.classList.add("news__category");
    newsCategory.textContent = initialState.news.category.categoriesName;

    const newsText = document.createElement("div");
    newsText.classList.add("news__text");
    newsText.textContent = initialState.news.text;

    newsContent.append(newsTitle, newsCategory, newsText);

    const commentsContainer = document.createElement("div");
    commentsContainer.classList.add("comments__container");

    const commentsList = document.createElement("ul");
    commentsList.classList.add("comments__list");

    newsWrapper.append(oneNewsContainer);
  }
};
