import img from "../../assets/spider-man-1.jpg";
import { initialState } from "../initialState";
import { getNewsById } from "../getNewsById";

const root = document.getElementById("root");

const main = document.createElement("div");
main.classList.add("main");

export const render = () => {
  main.textContent = "";

  if (Array.isArray(initialState.news)) {
    main.textContent = "";

    initialState.news.forEach((news) => {
      const newsContainer = document.createElement("div");
      newsContainer.classList.add("news_content");
      newsContainer.textContent = news.title;

      newsContainer.addEventListener("click", () => {
        getNewsById(news._id);
      });

      main.append(newsContainer);
      root.append(main);
    });
  } else {
    main.textContent = "";

    const newsContainer = document.createElement("div");
    newsContainer.classList.add("news__container");

    const newsImage = document.createElement("img");
    newsImage.classList.add("news__image");
    newsImage.src = img;

    const newsContent = document.createElement("div");
    newsContent.classList.add("news__content");

    newsContainer.append(newsImage, newsContent);

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

    initialState.comments.forEach((comments) => {
      const commentsItem = document.createElement("li");
      commentsItem.classList.add("comments__item");

      const commentsAuthor = document.createElement("span");
      commentsAuthor.classList.add("comments__author");
      commentsAuthor.textContent = comments.author.name;

      const commentsText = document.createElement("span");
      commentsText.classList.add("comments__text");
      commentsText.textContent = comments.text;

      commentsList.append(commentsItem);
    });

    commentsContainer.append(commentsList);
    main.append(newsContainer, commentsContainer);
    root.append(main);
  }
};
