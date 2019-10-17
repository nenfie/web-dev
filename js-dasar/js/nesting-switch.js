var makanan = prompt('masukan nama makanan\nnasi/susu/daging/hamburger/gorengan');

switch(makanan) {
    case 'nasi' :
        alert(makanan + ' adalah makanan Sehat');
        break;
    case 'susu' :
        alert(makanan + ' adalah makanan Sehat');
        break;
    case 'daging':
        alert(makanan + ' adalah makanan Sehat');
        break;
    case 'hamburger':
        alert(makanan + ' adalah makanan Tidak Sehat');
        break;
    case 'gorengan':
        alert(makanan + ' adalah makanan Tidak Sehat');
        break;
    default:
        alert(makanan + ' tidak terdaftar');
        break;
}