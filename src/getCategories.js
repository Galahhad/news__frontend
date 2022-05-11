import { initialState } from "./initialState";
import { renderCats } from "./render/categoriesRender";

export const getCategories = () => {
    fetch("http://localhost:3000/categories")
    .then((res) => res.json())
    .then((cats) => {
        initialState.cat = cats
        renderCats()
    })
}


