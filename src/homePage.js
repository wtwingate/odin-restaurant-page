import duckDiner from "./assets/images/duck-diner.webp";

export function renderHomePage() {
  const main = document.querySelector("main");

  /* heading */
  const heading1 = document.createElement("h1");
  heading1.textContent = "Welcome to Duck Diner 🦆";
  main.appendChild(heading1);

  const image = document.createElement("img");
  image.src = duckDiner;
  main.appendChild(image);

  const heading2 = document.createElement("h2");
  heading2.textContent = "Get. That. Bread.";
  main.appendChild(heading2);

  const paragraph = document.createElement("p");
  paragraph.innerHTML =
    "Welcome to <strong>Duck Diner</strong>, where comfort food meets classic diner charm! Whether you're craving a hearty breakfast, a juicy burger, or a slice of homemade pie, we've got something to satisfy every appetite. Our friendly staff and cozy booths make every meal feel like home. So grab a seat, pour yourself a cup of coffee, and enjoy the simple, delicious flavors of <strong>Duck Diner</strong>—where good food and great company always go hand in hand.";
  main.appendChild(paragraph);
}
