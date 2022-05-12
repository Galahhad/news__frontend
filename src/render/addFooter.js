import "../blocks/footer.css";
export const addFooter = () => {
    const centerWrap = document.querySelector(".center_wrap");

    const footer = document.createElement("div");
    footer.classList.add("footer");

    const infoWrap = document.createElement("ul");
    infoWrap.classList.add("info_wrap");

    const mainText = document.createElement("li");
    mainText.textContent = "О нас";

    const infoText = document.createElement("li");
    infoText.textContent = "Свяжитесь с нами";

    const assets = document.createElement("li");
    assets.textContent = "Контактная информация: +7 (800) - 333 - 43 - 34";
    assets.classList.add("assets");

    centerWrap.after(footer);
    footer.append(infoWrap);
    infoWrap.append(mainText, infoText, assets);
}