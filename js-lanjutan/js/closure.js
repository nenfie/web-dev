// 1. Lexical Scope
// function init() {
//     let nama = 'Sandhika'; // local variable

//     function tampilNama() { // inner function (closure*)
//         console.log(nama); // access to parent variable
//     }
//     return tampilNama;
// }

// let panggilNama = init();
// panggilNama();

// 2. Function factories
// function init() {
//     return function tampilNama(nama) {
//         console.log(nama);
//     }
// }

// let panggilNama = init();
// panggilNama('Sandhika');
// panggilNama('Galih');

// 3. Another sample
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Sandhika');
// selamatMalam('Galih');

// 4. Private variable
let add = (function () {
    let counter = 0; // private variable
    return function () {
        return ++counter;
    }
})();

counter = 100; // this will not interfere private variable

console.log(add());
console.log(add());
console.log(add());