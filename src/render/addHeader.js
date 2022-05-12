import "../blocks/header.css";
import dailyBugleImg from "../../assets/Daily_Bugle.png";

export const addHeader = () => {
    const root = document.querySelector("#root");
    
    const headerWrap = document.createElement("div");
    headerWrap.classList.add("header");

    const headerLogoWrap = document.createElement("div");
    headerLogoWrap.classList.add("header_logo_wrap");

    const headerLogo = document.createElement("img");
    headerLogo.src = dailyBugleImg;
    headerLogo.alt = "Daily Bugle Logo";

    const headerInfo = document.createElement("div");
    headerInfo.classList.add("header_info");
    headerInfo.textContent = "\"У нас самые правдивые новости.\""

    root.append(headerWrap);
    headerWrap.append(headerLogoWrap, headerInfo);
    headerLogoWrap.append(headerLogo);
}