// create objet Bus (using Constructor)
function Angkot(sopir,rute,penumpang,kas){
    this.sopir = sopir;
    this.rute = rute;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang,bayar){
        if(this.penumpang.length == 0){
            alert('Angkot masih kosong');
            return false
        }

        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }

        }

    }
}

var angkot1 = new Angkot('Tomi','Pondok Indah',[],0);

var retry = true;

// loop for repeat
while (retry) {

    // ask user for action
    var action = prompt('1 : Penumpang Naik\n2 : Penumpang Turun');

    // ask user for passenger name
    var namaPenumpang = prompt('Masukkan nama penumpang');

    // execute function based on user input
    if (action == 1) {        
        angkot1.penumpangNaik(namaPenumpang);
    } 

    else if (action == 2) {
        angkot1.penumpangTurun(namaPenumpang,1000);
    }

    else  {
        console.log ('Pilihan ' + action + ' tidak valid');
    }

    console.log(angkot1);

    // ask user for retry
    retry = confirm('Mau ulangi ?');

}