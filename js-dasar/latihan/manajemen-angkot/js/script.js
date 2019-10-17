
// create array for passenger
var penumpang = [];

// add new passenger
var tambahPenumpang = function(namaPenumpang, penumpang) {

    // if no passenger
    if (penumpang.length == 0) {

        // add passenger to list
        penumpang.push(namaPenumpang);

        console.log (penumpang);
        return penumpang;

    // if already has passenger
    } else {

        // iterate through the list
        for (var i = 0; i < penumpang.length; i++) {
            
            // if passenger name exist
            if (penumpang[i] == namaPenumpang) {

                // do nothing

                console.log (namaPenumpang + ' sudah terdaftar');
                return penumpang;

            } 

            // if there is empty seat
            else if (penumpang[i] == undefined) {
                
                // assign passenger to empty seat
                penumpang[i] = namaPenumpang;

                console.log (penumpang);
                return penumpang;
            
            }

            // if passenger name not found            
            else if (i == penumpang.length-1) {

                // assign passenger to last seat
                penumpang.push(namaPenumpang);

                console.log (penumpang);
                return penumpang;
            }

        }

    }

}

var hapusPenumpang = function(namaPenumpang, penumpang) {

    // if no passenger
    if (penumpang.length == 0) {

        // do nothing

        console.log ('Belum ada penumpang');
        return penumpang;
    
    // if already has passenger
    } else {

        // iterate through the list
        for (var i = 0; i < penumpang.length; i++) {
            
            // if passenger name exist
            if (penumpang[i] == namaPenumpang) {

                // remove passenger from seat
                penumpang[i] = undefined;

                console.log (penumpang);
                return penumpang;

            } 

            // if passenger name not found
            else if (i == penumpang.length-1) {

                // do nothing

                console.log (namaPenumpang + ' tidak terdaftar');
                return penumpang;
            }

        }


    }
}

var retry = true;

// loop for repeat
while (retry) {

    // ask user for action
    var action = prompt('1 : Tambah Penumpang\n2 : Hapus Penumpang');

    // ask user for passenger name
    var namaPenumpang = prompt('Masukkan nama penumpang');

    // execute function based on user input
    if (action == 1) {        
        tambahPenumpang(namaPenumpang,penumpang);
    } 

    else if (action == 2) {
        hapusPenumpang(namaPenumpang,penumpang);
    }

    else  {
        console.log ('Pilihan ' + action + ' tidak valid');
    }

    // ask user for retry
    retry = confirm('Mau ulangi ?');

}

