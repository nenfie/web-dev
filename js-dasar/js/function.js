
// create function
function penjumlahanDuaBilangan(a,b) {
    var total;
    total = a + b;
    return total;
}


var retry = true

while(retry) {

    // catch user input
    var a = parseInt(prompt('Masukan bilangan pertama :'));

    var b = parseInt(prompt('Masukan bilangan kedua :'));

    // execute function
    var result = penjumlahanDuaBilangan(a,b);

    // show result
    alert('Hasil penjumlahan : ' + result);
    
    // ask for retry
    retry = confirm('Coba lagi?');

}

