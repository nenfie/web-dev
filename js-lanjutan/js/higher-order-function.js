const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// 1. Filter

// 1a. using loop
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);

// 1b. using filter
// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });

// console.log(newAngka);

// 2. Map
// const newAngka = angka.map(function (a) {
//     return a * 2;
// })

// console.log(newAngka);

// 3. Reduce
// const newAngka = angka.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// })

// console.log(newAngka);

// 4. Method Chaining
const hasil = angka.filter(a => a >= 5) // [8, 9, 9]
    .map(a => a * 3) // [24, 27, 27]
    .reduce((acc, cur) => acc + cur); // 78

console.log(hasil);