// create object

// using Literal
var mhs = {
    nama : "Jason",
    nrp : '0970123460',
    email : 'jason123@yahoo.com',
    jurusan : 'Teknik Informatika'
}

// using Function Declarations
function createObjectMhs (nama,nrp,email,jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs2 = createObjectMhs('Steven','097023242','steven123@yahoo.com','Sistem Informasi');

// using Constructor
function Mahasiswa(nama,nrp,email,jurusan){
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs3 = new Mahasiswa('Michael','097234509','michael123@yahoo.com','Teknik Komputer');
