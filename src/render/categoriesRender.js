import { initialState } from "../initialState";
import { getNewsByCat } from "../getNewsByCategory"

export const renderCats = () => {
  const rightBar = document.querySelector('.right_bar')

  const categoriesList = document.createElement("ul");
  categoriesList.className = "categories_list";

  initialState.cat.forEach((cats) => {
    const categoriesItem = document.createElement("li");
    categoriesItem.className = "categories_item";
    categoriesItem.textContent = cats.categoriesName;

    categoriesItem.addEventListener("click", () => getNewsByCat(cats._id));

    categoriesList.append(categoriesItem);
  });

  rightBar.append(categoriesList);

};

