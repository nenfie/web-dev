const tUbahWarna = document.getElementById("tUbahWarna");
const body = document.getElementsByTagName("body")[0];//

tUbahWarna.onclick = function() {
    // document.body.backgroundColor = "lightblue";
    //body.style.backgroundColor = "lightblue";
    //body.setAttribute("class", "biru-muda");
    body.classList.toggle("biru-muda");
}


const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");

tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function() {
    const r = Math.round((Math.random() * 255 + 1));
    const g = Math.round((Math.random() * 255 + 1));
    const b = Math.round((Math.random() * 255 + 1));
    
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});



const sRed = document.querySelector("input[name=sRed]");
const sGreen = document.querySelector("input[name=sGreen]");
const sBlue = document.querySelector("input[name=sBlue]");

sRed.addEventListener("input", function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sGreen.addEventListener("input", function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sBlue.addEventListener("input", function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});


document.body.addEventListener("mousemove", function(event) {
    //posisi mouse
    const x = event.clientX;
    const y = event.clientY;

    //ukuran browser
    const sWidth = window.innerWidth;
    const sHeight = window.innerHeight;

    const xPos =Math.round((x / sWidth) * 255);
    const yPos =Math.round((y / sHeight) * 255);

    document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});


