// get all video element
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// select only "JAVASCRIPT LANJUTAN"
const jsLanjut = videos.filter(function (video) {
    return video.textContent.includes('JAVASCRIPT LANJUTAN');
})

// get duration from each video
const vidDuration = jsLanjut.map(function (item) {
    return item.dataset.duration;
})

// convert duration into float, also change minutes to seconds
const waktu = vidDuration.map(function (waktu) {
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})

// sum all seconds
const jumlahWaktu = waktu.reduce(function (total, detik) {
    return total + detik;
})

// change seconds into 'hour + minutes + seconds' format
const jam = Math.floor(jumlahWaktu / 3600);
const menit = Math.floor((jumlahWaktu - (jam * 3600)) / 60);
const detik = Math.floor((jumlahWaktu - (jam * 3600)) - (menit * 60));

// save in DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jmlVideo = jsLanjut.length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video`;