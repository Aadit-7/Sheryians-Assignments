// let btn = document.querySelector("button");

// let box = document.querySelector("#box");

// btn.addEventListener("click", function () {
//   let c1 = Math.floor(Math.random() * 256);
//   let c2 = Math.floor(Math.random() * 256);
//   let c3 = Math.floor(Math.random() * 256);
//   box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
// });

/* ASSIGNMENT */

let teams = [
  {
    name: "CSK",
    captain: "Ruturaj Gaikwad",
    primaryColor: "Yellow",
    scendroryColor: "Blue",
    trophies: 5,
  },
  {
    name: "MI",
    captain: "Hardik Pandya",
    primaryColor: "Blue",
    scendroryColor: "Gold",
    trophies: 5,
  },
  {
    name: "RCB",
    captain: "Rajat Patidar",
    primaryColor: "Red",
    scendroryColor: "yellow",
    trophies: 1,
  },
  {
    name: "KKR",
    captain: "Ajinkya Rahane",
    primaryColor: "Purple",
    scendroryColor: "Silver",
    trophies: 5,
  },
  {
    name: "SRH",
    captain: "Pat Cummins",
    primaryColor: "Orange",
    scendroryColor: "Gold",
    trophies: 1,
  },
  {
    name: "PBKS",
    captain: "Sheryas Ayer",
    primaryColor: "Red",
    scendroryColor: "Gold",
    trophies: 0,
  },
  {
    name: "DC",
    captain: "Rushab Pant",
    primaryColor: "Blue",
    scendroryColor: "White",
    trophies: 0,
  },
  {
    name: "GT",
    captain: "Shubman Gill",
    primaryColor: "Gray",
    scendroryColor: "Gold",
    trophies: 2,
  },
  {
    name: "LSG",
    captain: "K L Rahul",
    primaryColor: "Aqua",
    scendroryColor: "Silver",
    trophies: 0,
  },
  {
    name: "RR",
    captain: "Ravindra Jadeja",
    primaryColor: "Pink",
    scendroryColor: "Blue",
    trophies: 0,
  },
];

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let body = document.querySelector("body");

btn.addEventListener("click", function () {
  let num = Math.floor(Math.random() * teams.length);
  h1.innerHTML = `Name :${teams[num].name}`;
  h2.innerHTML = `Captain :${teams[num].captain}`;
  h3.innerHTML = `Trophies :${teams[num].trophies}`;
  h1.style.backgroundColor = teams[num].scendroryColor;
  body.style.backgroundColor = teams[num].primaryColor;
});
