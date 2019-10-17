// DOM Selection

// document.getElementById() -> single element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Sandhika Galih";

// document.getElementsByTagName() -> HTMLCollections
const p = document.getElementsByTagName("p");
for ( let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = "lightblue";
}

// document.getElementsByClassName() -> HTMLCollections
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ini diubah dari JavaScript";

// document.querySelector() -> single element
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "30px";

// document.querySelectorAll() -> NodeList
const s = document.querySelectorAll("section#b ul li");
for ( let i = 0; i < s.length; i++ ) {
    s[i].style.backgroundColor = "yellow";
}

// mengubah NodeRoot
const sectionB = document.getElementById("b");
const p5 = sectionB.querySelector("p");
p5.innerHTML = "Ini diubah dari JavaScript";
