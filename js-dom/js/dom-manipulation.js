// DOM Manipulation

const judul = document.getElementById("judul");
judul.innerHTML = "<em>Tjoeng Nenfie</em>";
judul.style.color = "#ccc";
judul.style.backgroundColor = "red";

const sectionA = document.querySelector("section#a");
sectionA.innerHTML = "<div><p>Hello World</p></div>";

const p4 = document.querySelector("section#b p");
p4.setAttribute("class", "label");

const newLi = document.createElement("li");
const newLiText = document.createTextNode("new inserted item");
newLi.appendChild(newLiText);
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(newLi, li2);