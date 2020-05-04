// 1. Tagged Templates
// const nama = 'Sandhika Galih';
// const umur = 33;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// 2. Real world example
const nama = 'Sandhika Galih';
const umur = 33;
const email = 'sandhika@email.com'

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight `Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah ${email}.`;

document.body.innerHTML = str;