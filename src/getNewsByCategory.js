import { initialState } from "./initialState";
import { render } from "./render/getNewsRender";

export const getNewsByCat = (id) => {
    
console.log(initialState.news);
    fetch(`http://localhost:3000/news/categories/${id}`)
    .then((res) => res.json())
    .then((news) => {
        initialState.news = news
        render()
    })
}
