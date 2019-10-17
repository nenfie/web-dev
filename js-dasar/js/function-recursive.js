// create function
function hitungFaktorial(n){

    // set base case to stop recursive
    if (n === 0) {
        return 1;
    }

    // recursive call
    return n * hitungFaktorial(n-1);
}

// catch user input
var n = prompt('masukan sebuah angka')

// execute function
var result = hitungFaktorial(n);

// display result

alert ('Faktorial dari ' + n + ' adalah ' + result);
