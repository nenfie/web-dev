// Spread Operator

// const mhs = ["Sandhika", "Doddy", "Erik"];
// console.log(...mhs);

// 1. Combine Arraya
// const mhs = ["Sandhika", "Doddy", "Erik"];
// const dosen = ["Ade", "Hendra", "Wanda"];
// // const orang = mhs.concat(dosen);
// const orang = [...mhs, "Aji", ...dosen];
// console.log(orang);

// 2. Copy Array
// const mhs = ["Sandhika", "Doddy", "Erik"];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = "Fajar";
// console.log(mhs);

// 3. NodeList operation
// const liMhs = document.querySelectorAll("li");

// 3a. using for loop
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// 3b. using spread operator
// const mhs = [...liMhs].map(function (m) {
//     return m.textContent;
// });
// console.log(mhs);

// 3c. real world example
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
console.log(huruf);
nama.innerHTML = huruf;