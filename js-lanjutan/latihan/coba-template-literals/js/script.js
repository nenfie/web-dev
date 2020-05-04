// 1. HTML Fragments
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     nrp: '0420342034',
//     email: 'sandhika@email.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
//     </div>`;

// 2. Looping
// const mhs = [{
//         nama: 'Sandhika',
//         email: 'sandhika@email.com'
//     },
//     {
//         nama: 'Doddy',
//         email: 'doddy@email.com'
//     },
//     {
//         nama: 'Erik',
//         email: 'erik@email.com'
//     }
// ]

// const el = `<div class="mhs">
//     ${mhs.map(m => 
//     `<ul>
//         <li>${m.nama}</li>
//         <li>${m.emai}</li>
//     </ul>`).join('')}
// </div>`;

// 3. Conditionals
// using ternary
// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Sarasvati',
//     // feat: "Rayi Putra"
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''} </li>
//     </ul>
// </div>`;

// 4. Nested
const mhs = {
    nama: 'Sandhika Galih',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah:</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;