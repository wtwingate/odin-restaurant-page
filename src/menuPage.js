import breakfast from "./assets/images/breakfast.webp";
import hamburger from "./assets/images/hamburger.webp";
import chicken from "./assets/images/chicken.webp";
import cherryPie from "./assets/images/cherry-pie.webp";

export function renderMenuPage() {
  const main = document.querySelector("main");
  main.replaceChildren();

  const heading1 = document.createElement("h1");
  heading1.textContent = "Our Menu";
  main.appendChild(heading1);

  const menuItems = document.createElement("div");
  menuItems.classList.add("card-grid");
  main.appendChild(menuItems);

  /* Breakfast */
  const breakfastCard = document.createElement("div");
  breakfastCard.classList.add("card");
  menuItems.appendChild(breakfastCard);

  const breakfastImage = document.createElement("img");
  breakfastImage.src = breakfast;
  breakfastCard.appendChild(breakfastImage);

  const breakfastHeading = document.createElement("h2");
  breakfastHeading.textContent = "Breakfast";
  breakfastCard.appendChild(breakfastHeading);

  const breakfastParagraph = document.createElement("p");
  breakfastParagraph.textContent =
    "Start your day off right with one of our hearty breakfast options! From fluffy pancakes to crispy bacon, we've got everything you need to fuel up for the day ahead.";
  breakfastCard.appendChild(breakfastParagraph);

  /* Lunch */
  const lunchCard = document.createElement("div");
  lunchCard.classList.add("card");
  menuItems.appendChild(lunchCard);

  const lunchImage = document.createElement("img");
  lunchImage.src = hamburger;
  lunchCard.appendChild(lunchImage);

  const lunchHeading = document.createElement("h2");
  lunchHeading.textContent = "Lunch";
  lunchCard.appendChild(lunchHeading);

  const lunchParagraph = document.createElement("p");
  lunchParagraph.textContent =
    "Our lunch menu is sure to satisfy your midday cravings. Choose from a variety of sandwiches, salads, and sides to create the perfect meal.";
  lunchCard.appendChild(lunchParagraph);

  /* Dinner */
  const dinnerCard = document.createElement("div");
  dinnerCard.classList.add("card");
  menuItems.appendChild(dinnerCard);

  const dinnerImage = document.createElement("img");
  dinnerImage.src = chicken;
  dinnerCard.appendChild(dinnerImage);

  const dinnerHeading = document.createElement("h2");
  dinnerHeading.textContent = "Dinner";
  dinnerCard.appendChild(dinnerHeading);

  const dinnerParagraph = document.createElement("p");
  dinnerParagraph.textContent =
    "Enjoy a delicious dinner with us! Our dinner menu features a wide selection of entrees, sides, and desserts that are sure to please.";
  dinnerCard.appendChild(dinnerParagraph);

  /* Dessert */
  const dessertCard = document.createElement("div");
  dessertCard.classList.add("card");
  menuItems.appendChild(dessertCard);

  const dessertImage = document.createElement("img");
  dessertImage.src = cherryPie;
  dessertCard.appendChild(dessertImage);

  const dessertHeading = document.createElement("h2");
  dessertHeading.textContent = "Dessert";
  dessertCard.appendChild(dessertHeading);

  const dessertParagraph = document.createElement("p");
  dessertParagraph.textContent =
    "Don't forget to save room for dessert! Indulge in one of our delicious pies, cakes, or cookies to satisfy your sweet tooth.";
  dessertCard.appendChild(dessertParagraph);
}
