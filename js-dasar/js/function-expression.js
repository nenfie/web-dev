// create function expression
var jumlahAngka = function(a,b) {
    return a + b;
}

// catch user input
var a = parseInt(prompt('Masukan angka pertama : '));
var b = parseInt(prompt('Masukan angka kedua : '));

// execute function
var result = jumlahAngka(a,b);

// display result
alert('Hasil Penjumlahan : ' + result);

