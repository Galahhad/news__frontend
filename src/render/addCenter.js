import jamesonPng from "../../assets/Jameson_Img.png";

export const addCenter = () => {
    const headerWrap = document.querySelector(".header")

    const centerWrap = document.createElement("div");
    centerWrap.classList.add("center_wrap");

    const leftBar = document.createElement("div");
    leftBar.classList.add("left_bar");

    const leftImgWrap = document.createElement("div");
    leftImgWrap.classList.add("left_img_wrap");

    const jamesonImg = document.createElement("img");
    jamesonImg.classList.add("jameson_img");
    jamesonImg.src = jamesonPng;
    jamesonImg.alt = "JJJameson";

    const jamesonQuote = document.createElement("p");
    jamesonQuote.classList.add("jameson_quote");
    jamesonQuote.textContent = "\"Какой аванс? За присутствие? Уволен!\"";

    const jamesonAuthor = document.createElement("p");
    jamesonAuthor.classList.add("jameson_author");
    jamesonAuthor.textContent = "© JJ Jameson";

    const newsContainer = document.createElement("div");
    newsContainer.classList.add("news_container");

    const newsTitle = document.createElement("h1");
    newsTitle.classList.add("news_title");
    newsTitle.textContent = "Новости";

    const newsSave = document.createElement('div')
    newsSave.classList.add('news__save')

    const rightBar = document.createElement("div");
    rightBar.classList.add("right_bar");

    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = "Категории";
    categoryTitle.classList.add("category_title");

    const allNewsButton = document.createElement("div");
    allNewsButton.classList.add("all_news_button");
    allNewsButton.textContent = "Все новости";
    
    headerWrap.after(centerWrap);
    centerWrap.append(leftBar, newsContainer, rightBar);
    newsContainer.append(newsTitle, newsSave);
    rightBar.append(categoryTitle, allNewsButton);
    leftBar.append(leftImgWrap);
    leftImgWrap.append(jamesonImg, jamesonQuote);
    jamesonQuote.append(jamesonAuthor);
}