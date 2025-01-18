const body = document.body;
function createElement(tag, options = {}) {
  const element = document.createElement(tag);
  if (options.className) element.classList.add(...options.className.split(" "));
  if (options.textContent) element.textContent = options.textContent;
  if (options.src) element.src = options.src;
  if (options.href) element.href = options.href;
  return element;
}
const card = createElement("div", { className: "card" });
const image = createElement("img", {
  className: "card__picture",
  src: "./img/profile-pic.png",
});
const innerDiv = createElement("div", { className: "card__title" });
const nameHeading = createElement("h1", {
  className: "card__name",
  textContent: "Jessica Randall",
});
const cardLocation = createElement("h1", {
  className: "card__location",
  textContent: "London, United Kingdom",
});
const cardBio = createElement("p", {
  className: "card__bio",
  textContent: `"Front-end developer and avid reader."`,
});
const cardList = createElement("div", { className: "card__list" });
const gitHub = createElement("a", {
  className: "card__list-item",
  textContent: "GitHub",
  href: "#",
});
const frontendmentor = createElement("a", {
  className: "card__list-item",
  textContent: "Frontend Mentor",
  href: "#",
});
const linkedIn = createElement("a", {
  className: "card__list-item",
  textContent: "LinkedIn",
  href: "#",
});
const twitter = createElement("a", {
  className: "card__list-item",
  textContent: "Twitter",
  href: "#",
});
const instagram = createElement("a", {
  className: "card__list-item",
  textContent: "Instagram",
  href: "#",
});
const h4 = createElement("h4", { className: "h4", textContent: "$149.99" });
body.appendChild(card);
card.append(image, innerDiv, cardBio, cardList);
innerDiv.append(nameHeading, cardLocation);
cardList.append(gitHub, frontendmentor, linkedIn, twitter, instagram);
