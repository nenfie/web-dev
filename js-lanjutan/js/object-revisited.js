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
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat main`);
    }
}

let sandhika = new Mahasiswa('Sandhika', 10);
let doddy = new Mahasiswa('Doddy', 20);