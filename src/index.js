import "./style.css";
import {addHeader} from './render/addHeader'
import {addCenter} from './render/addCenter'

import { getNews } from "./getNews";
import { getNewsById } from "./getNewsById";
import { getCategories } from "./getCategories";
import { getNewsByCat } from "./getNewsByCategory";

import {addFooter} from './render/addFooter'
import { render } from "./render/getNewsRender";


addHeader()
addCenter()
getNews();
getNewsById();
getCategories();
getNewsByCat();
addFooter()
