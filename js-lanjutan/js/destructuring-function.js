// Destructuring Function

// 1a. Normal expression
// function kalkulasi(a, b) {
//     return [a + b, a * b];
// }

// const tambah = kalkulasi(2, 3)[0];
// const kali = kalkulasi(2, 3)[1];

// 1b. using function destructuring
// function kalkulasi(a, b) {
//     return [a + b, a * b];
// }

// const [tambah, kali] = kalkulasi(2, 3);

// 1c. Returning Array
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);

// 1d. Returning Object
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {
//     bagi,
//     tambah,
//     kali,
//     kurang
// } = kalkulasi(2, 3);

// console.log(tambah);
// console.log(kali);

// 1e. Returning Arguments
const mhs1 = {
    nama: 'Sandhika Galih',
    umur: 33,
    email: 'sandhika@email.com'
}

// using standard method
// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }

function cetakMhs({
    nama,
    umur
}) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
}

console.log(cetakMhs(mhs1));