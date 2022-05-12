import { initialState } from "./initialState";
import { render } from "./render/getNewsRender";

export const getNewsById = (id) => {
  fetch(`http://localhost:3000/news/${id}`)
    .then((res) => res.json())
    .then((news) => {
      initialState.news = news;

      render();
    });
};
