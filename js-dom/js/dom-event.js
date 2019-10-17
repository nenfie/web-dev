// DOM Event

// eventHandler
const p3 = document.querySelector(".p3");
p3.onclick = function() {
    p3.style.backgroundColor = "lightblue";
}

// addEventListener
const p4 = document.querySelector("section#b p");
p4.addEventListener("dblclick", function() {
    const ul = document.querySelector("section#b ul");
    const liBaru = document.createElement("li");
    const liBaruText = document.createTextNode("item baru");
    liBaru.appendChild(liBaruText);
    ul.appendChild(liBaru);
});
