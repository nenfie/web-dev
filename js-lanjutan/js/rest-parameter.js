// Rest Parameter

// 1. using on normal function
// function myFunc(a, b, ...myArgs) {
//     // return myArgs;
//     // return [...arguments];
//     return `a = ${a}, b=${b}, myArgs = ${myArgs}`;
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// 2. another sample function
// function jumlahkan(...angka) {
//     // let total = 0;
//     // for (const a of angka) {
//     //     total += a;
//     // }
//     // return total;

//     return angka.reduce(function (a, b) {
//         return a + b;
//     })
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// 3. using on array destructuring
// const kelompok1 = ['Sandhika', 'Doddy', 'Erik', 'Fajar', 'Hendra'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);
// console.log(anggota);

// 4. using on object destructuring
// const team = {
//     pm: 'Sandhika',
//     frontEnd1: 'Doddy',
//     frontEnd2: 'Erik',
//     backEnd: 'Fajar',
//     ux: 'Hendra',
//     dvOps: 'Ferry'
// }

// const {
//     pm,
//     ...myTeam
// } = team;
// console.log(pm);
// console.log(myTeam);

// 5. using for filtering
function filterBy(type, ...values) {
    return values.filter(function (v) {
        return typeof v === type;
    })
}

console.log(filterBy('string', 1, 2, 'Sandhika', false, 10, true, 'Doddy'));