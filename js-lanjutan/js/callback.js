// Callback

// function halo(nama) {
//   alert(`Halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan Nama : ");
//   callback(nama);
// }

// tampilkanPesan(function (nama) {
//   return alert(`Halo ${nama}`);
// });

// 1. Synchronous Callback
// const mhs = [{
//     "nama": "Sandhika Galih",
//     "nrp": "04323423",
//     "email": "sandhika@email.com",
//     "jurusan": "Teknik Informatika",
//     "idDosenWali": 1
//   },
//   {
//     "nama": "Doddy Ferdiansyah",
//     "nrp": "13304343",
//     "email": "doddy@email.com",
//     "jurusan": "Teknik Informatika",
//     "idDosenWali": 2
//   },
//   {
//     "nama": "Erik",
//     "nrp": "10433623",
//     "email": "erik@email.com",
//     "jurusan": "Teknik Industri",
//     "idDosenWali": 2
//   }
// ];

// console.log('mulai');
// mhs.forEach(m => {
//   // to simulate long process
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama)
// });
// console.log('selesai');

// 2. Asynchronous Callback
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  }

  xhr.open('get', url);
  xhr.send();
}

function success(results) {
  const mhs = JSON.parse(results);
  mhs.forEach(m => console.log(m.nama));
}

function error(e) {
  return console.log(e.responseText);
}

console.log('mulai');
getDataMahasiswa('data/mahasiswa.json', success, error);
console.log('selesai');