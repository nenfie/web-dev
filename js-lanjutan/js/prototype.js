// Cara untuk membuat Object pada Javascript

// 1. Object Literal
// let mahasiswa1 = {
//     nama: "Sandhika Galih",
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         // console.log('Halo ' + this.nama + ', selamat makan');
//         console.log(`Halo ${this.nama}, selamat makan`) //using template literal way
//     }
// }

// let mahasiswa2 = {
//     nama: "Doddy Ferdiansyah",
//     energi: 20,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan`)
//     }
// }

// 2. Function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat main`);
//     }

//     return mahasiswa;
// }

// let sandhika = Mahasiswa('Sandhika', 10);
// let doddy = Mahasiswa('Doddy', 20);

// 3. Constructor Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat main`);
//     }
// }

// let sandhika = new Mahasiswa('Sandhika', 10);
// let doddy = new Mahasiswa('Doddy', 20);

// 4. Object.create
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat main`);
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let sandhika = Mahasiswa('Sandhika', 10);
// let doddy = Mahasiswa('Doddy', 20);

// 5. Prototype
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
}

Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat main`);
}

Mahasiswa.prototype.tidur = function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur`);
}

let sandhika = new Mahasiswa('Sandhika', 10);
let doddy = new Mahasiswa('Doddy', 20);

// 6. Class
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }

//     main(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat main`);
//     }

//     tidur(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur`);
//     }
// }

// let sandhika = new Mahasiswa('Sandhika', 10);
// let doddy = new Mahasiswa('Doddy', 20);