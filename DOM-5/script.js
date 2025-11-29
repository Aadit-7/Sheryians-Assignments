const users = [
  {
    image: "./CC-Carousel-750x424.png",
    title: "Clash Of Clans",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: "./DBZ Black Goku.jpg",
    title: "Dragon Ball Z",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: "./Naruto Kakashi.jpg",
    title: "Naruto",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: "./Spidy (2).jpg",
    title: "Spider-man",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
let main = document.querySelector("main");
let card = "";
users.forEach((elem) => {
  card += `<div class="card">
            <img src="${elem.image}" alt="" />
            <h3>${elem.title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>`;

});

main.innerHTML = card;