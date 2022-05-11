import { initialState } from "./initialState";
import { render } from "./render/getNewsRender";

export const getCommentsByNews = (id) => {

    fetch(`http://localhost:3000/comments/news/${id}`)
    .then((res) => res.json())
    .then((comments) => {
        initialState.comments = comments
        render()
    })
}