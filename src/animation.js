const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const picture = document.querySelector(".picture img");
const description = document.querySelector(".info p");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(150px)";
  picture.style.transform = "translateZ(100px) rotateY(20deg) translateX(-50px)";
  description.style.transform = "translateZ(125px)";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0px)";
  picture.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
});