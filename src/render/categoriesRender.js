import { initialState } from "../initialState";
import { getNewsByCat } from "../getCategories"

export const renderCats = () => {
  const root = document.getElementById("root");

  const rightSidebar = document.createElement("div");
  rightSidebar.className = "categories__sidebar";

  const categoriesList = document.createElement("ul");
  categoriesList.className = "categories_list";

  initialState.cat.forEach((cats) => {
    const categoriesItem = document.createElement("li");
    categoriesItem.className = "categories_item";
    categoriesItem.textContent = cats.categoriesName;

    categoriesItem.addEventListener("click", () => getNewsByCat(cats._id));

    categoriesList.append(li);
  });

  rightSidebar.append(categoriesList);

  root.append(rightSidebar);
};

