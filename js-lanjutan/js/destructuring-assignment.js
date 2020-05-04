// Destructuring Assignment / Variable

// 1. Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'Sandhika Galih'];

// 1a. capture all items
// const [salam, satu, dua, nama] = perkenalan;
// console.log(salam);

// 1b. skip items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// 1c. swap items
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// 1d. function return value
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

// 1e. Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// 2. Destructuring Object
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33
// }

// const {
//     nama,
//     umur
// } = mhs;
// console.log(nama);

// 2a. Non-declaration destructuring
// ({
//     nama,
//     umur
// } = {
//     nama: 'Sandhika Galih',
//     umur: 33
// });
// console.log(nama);

// 2b. Assigned to new variable
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33
// }

// const {
//     nama: n,
//     umur: u
// } = mhs;
// console.log(n);

// 2c. Set default value
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33
// }

// const {
//     nama,
//     umur,
//     email = 'email @default.com'
// } = mhs;
// console.log(email);

// 2d. Some combination 
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'sandhika@email.com'
// }

// const {
//     nama: n,
//     umur: u,
//     email: e = 'email@default.com'
// } = mhs;
// console.log(e);

// 2e. Rest Parameter
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'sandhika@email.com'
// }

// const {
//     nama,
//     ...value
// } = mhs;
// console.log(value);

// 2f. Get specific field from Object
const mhs = {
    id: 123,
    nama: 'Sandhika Galih',
    umur: 33,
    email: 'sandhika@email.com'
}

function getIdMhs({
    id
}) {
    return id;
}

console.log(getIdMhs(mhs));