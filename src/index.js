import "./styles/global.css";

import { renderHomePage } from "./homePage.js";
import { renderMenuPage } from "./menuPage.js";
import { renderAboutPage } from "./aboutPage.js";

renderHomePage(); // load default page

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", renderHomePage);

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", renderMenuPage);

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", renderAboutPage);
