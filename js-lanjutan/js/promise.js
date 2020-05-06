// Promise

// 1. using vanilla Javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=f36811c7&s=avengers');
// xhr.send();

// 2. using jQuery
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=f36811c7&s=avengers',
//     success: movies => console.log(movies)
// });

// 3. using Fetch => return as promise
// const movies = fetch('http://www.omdbapi.com/?apikey=f36811c7&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));

// 4. Promise 
// 4a. sample 1
// let ditepati = false;

// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati');
//     } else {
//         reject('Ingkar janji..');
//     }
// });

// janji1
//     .then(response => console.log('ok : ' + response))
//     .catch(response => console.log('not ok : ' + response));

// 4b. sample 2
// let ditepati = true;

// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu');
//         }, 2000);
//     }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('selesai menunggu'))
//     .then(response => console.log('ok : ' + response))
//     .catch(response => console.log('not ok : ' + response));
// console.log('selesai');

// 5. Promise.all()

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Sandhika Galih',
            pemeran: 'Doddy, Erik'
        }]);
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandung',
            temp: 26,
            kondisi: 'Cerah Berawan'
        }]);
    }, 500);
})

// 5a. using normal promise
// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// 5b. using promise.all
Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });