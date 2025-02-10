export function renderAboutPage() {
  const main = document.querySelector("main");
  main.replaceChildren();

  const heading1 = document.createElement("h1");
  heading1.textContent = "About Us";
  main.appendChild(heading1);
}
