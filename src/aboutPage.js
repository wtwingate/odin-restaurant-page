import mallard from "./assets/images/mallard.webp";

export function renderAboutPage() {
  const main = document.querySelector("main");
  main.replaceChildren();

  const heading1 = document.createElement("h1");
  heading1.textContent = "About Us";
  main.appendChild(heading1);

  const aboutItems = document.createElement("div");
  aboutItems.classList.add("card-flex");
  main.appendChild(aboutItems);

  const storyCard = document.createElement("div");
  storyCard.classList.add("card");
  aboutItems.appendChild(storyCard);

  const storyImage = document.createElement("img");
  storyImage.src = mallard;
  storyCard.appendChild(storyImage);

  const storyHeading = document.createElement("h2");
  storyHeading.textContent = "Our Story";
  storyCard.appendChild(storyHeading);

  const storyParagraph = document.createElement("p");
  storyParagraph.textContent =
    "Founded in 2021, Mallard is a family-owned restaurant that has been serving up delicious meals for over 50 years. Our menu features a variety of classic dishes made with fresh, locally-sourced ingredients. Whether you're in the mood for a hearty breakfast, a satisfying lunch, or a delicious dinner, we've got you covered. Stop by and see us today!";
  storyCard.appendChild(storyParagraph);

  const hoursCard = document.createElement("div");
  hoursCard.classList.add("card");
  aboutItems.appendChild(hoursCard);

  const hoursTable = document.createElement("table");
  hoursCard.appendChild(hoursTable);

  const hoursCaption = document.createElement("caption");
  hoursCaption.textContent = "Hours of Operation";
  hoursTable.appendChild(hoursCaption);

  const hoursSunday = document.createElement("tr");
  hoursSunday.innerHTML = "<th>Sunday</th><td>Closed</td>";
  hoursTable.appendChild(hoursSunday);

  const hoursMonday = document.createElement("tr");
  hoursMonday.innerHTML = "<th>Monday</th><td>8:00am - 10:00pm</td>";
  hoursTable.appendChild(hoursMonday);

  const hoursTuesday = document.createElement("tr");
  hoursTuesday.innerHTML = "<th>Tuesday</th><td>8:00am - 10:00pm</td>";
  hoursTable.appendChild(hoursTuesday);

  const hoursWednesday = document.createElement("tr");
  hoursWednesday.innerHTML = "<th>Wednesday</th><td>8:00am - 10:00pm</td>";
  hoursTable.appendChild(hoursWednesday);

  const hoursThursday = document.createElement("tr");
  hoursThursday.innerHTML = "<th>Thursday</th><td>8:00am - 10:00pm</td>";
  hoursTable.appendChild(hoursThursday);

  const hoursFriday = document.createElement("tr");
  hoursFriday.innerHTML = "<th>Friday</th><td>8:00am - 10:00pm</td>";
  hoursTable.appendChild(hoursFriday);

  const hoursSaturday = document.createElement("tr");
  hoursSaturday.innerHTML = "<th>Saturday</th><td>8:00am - 10:00pm</td>";
  hoursTable.appendChild(hoursSaturday);
}
