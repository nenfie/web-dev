// 1. For..of => only applicable for iterable

// const mhs = ['Sandhika', 'Doddy', 'Erik'];

// 1a. using For
// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// 1b. using Foreach
// mhs.forEach(function (m) {
//     console.log(m);
// })

// 1c. using For..of
// for (const m of mhs) {
//     console.log(m);
// }

// 1d. using For..of on string
// const nama = 'Sandhika';
// for (const n of nama) {
//     console.log(n);
// }

// 1e. using For..of on NodeList
// const liNama = document.querySelectorAll('.nama');
// for (n of liNama) {
//     console.log(n.innerHTML);
// }

// 1f. using For..of on arguments
// function jumlahkanAngka() {
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// 2. For..in => only applicable for enumerable
const mhs = {
    nama: 'Sandhika',
    umur: 33,
    email: 'sandhika@email.com'
}

for (m in mhs) {
    console.log(mhs[m]);
}