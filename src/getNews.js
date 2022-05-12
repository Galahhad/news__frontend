import { initialState } from "./initialState";
import { render } from "./render/getNewsRender";

export const getNews = () => {
  fetch("http://localhost:3000/news")
    .then((res) => res.json())
    .then((news) => {
      initialState.news = news;
      render();
    });
};
