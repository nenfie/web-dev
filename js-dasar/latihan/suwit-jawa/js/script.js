var retry = true;

while (retry) {

    // catch user input
    var player = prompt('Pilihan Anda : gajah / orang / semut');


    // generate cpu input, use random number
    var cpu = Math.random();

    if (cpu < 0.34) {
        cpu = 'gajah';
    } else if (cpu >= 0.34 && cpu <= 0.67 ) {
        cpu = 'orang';
    } else {
        cpu = 'semut';
    }


    // define game rule
    var result = '';

    if (player == cpu) {
        result = 'SERI';

    } else if (player == 'gajah') {
        //if (cpu == 'orang') {
        //    result = 'MENANG';
        //} else {
        //    result = 'KALAH';
        //};

        //using shorthand
        result = (cpu == 'orang') ? 'MENANG' : 'KALAH';

    } else if (player == 'orang') {
        result = (cpu == 'semut') ? 'MENANG' : 'KALAH';

    } else if (player == 'semut') {
        result = (cpu == 'gajah') ? 'MENANG' : 'KALAH';

    } else {
        result = 'INVALID';
    }


    // display result
    var message = ''

    if (result == 'SERI') {
        message = 'SERI!';
    } else if (result == 'MENANG') {
        message = 'Anda MENANG!';
    } else if (result == 'KALAH') {
        message = 'Anda KALAH!';
    } else {
        message = 'Pilihan Anda tidak valid!';
    }

    alert('Anda memilih ' + player + '\nKomputer memilih ' + cpu + '\n' + message);

    // retry game
    retry = confirm('Main lagi?');
}

alert('Terima kasih');