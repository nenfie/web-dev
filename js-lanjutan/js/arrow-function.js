// 1. Function expression
// const tampilNama = function (nama, waktu) {
//     return `Halo ${nama}, selamat ${waktu}`;
// }
// console.log(tampilNama('Sandhika', 'Pagi'));

// 2. Arrow Function
// const tampilNama = (nama, waktu) => {
//     return `Halo ${nama}, selamat ${waktu}`;
// }
// console.log(tampilNama('Doddy', 'Malam'));

// 3. Implicit Return (single parameter)
// const tampilNama = nama => `Halo ${nama}`;
// console.log(tampilNama('Doddy'));

// 4. Without parameter
// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

// 5. Another example

// 5a. using function expression
// let mahasiswa = ['Sandhika', 'Doddy', 'Erik'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// 5b. using arrow function
// let mahasiswa = ['Sandhika', 'Doddy', 'Erik'];

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// 6. Arrow function return as object
// let mahasiswa = ['Sandhika', 'Doddy', 'Erik'];

// let jumlahHuruf = mahasiswa.map(nama => ({
//     nama: nama,
//     jmlHuruf: nama.length
// }));
// console.log(jumlahHuruf);

// 7. This in Arrow function

// 7a. with Constructor function
// const Mahasiswa = function () {
//     this.nama = 'Sandhika';
//     this.umur = 33;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, umur ${this.umur} tahun`);
//     }
// }

// const sandhika = new Mahasiswa();

// 7b. with Arror function
const Mahasiswa = function () {
    this.nama = 'Sandhika';
    this.umur = 35;
    this.sayHello = () => {
        console.log(`Halo, nama saya ${this.nama}, umur ${this.umur} tahun`);
    }
}

const sandhika = new Mahasiswa();