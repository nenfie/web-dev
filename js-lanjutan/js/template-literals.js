// 1. Template Literals / Template String
// const nama = "Sandhika";
// const umur = 33;
// console.log(`Halo, nama saya ${nama}, dan umur saya ${umur} tahun`);

// 2. Embedded Expressions
// console.log(`${1 + 1}`);

// console.log(`${alert('halo!')}`);

// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`); // with ternary expression

// 3. HTML Fragments
const mhs = {
    nama: 'Sandhika Galih',
    umur: 33,
    nrp: '043040023',
    email: 'sandhika@email.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);