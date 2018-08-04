let nama = {
    nama : 'Mustafidatun Nashihah',
    nama_depan : 'Mustafidatun',
    nama_belakang : 'Nashihah',
    umur : 30,
    jenis_kelamin : 'perempuan',
    alamat : 'Kediri',
    status : 'Mahasiswa'
}
const hari = new Date();

console.log(nama);
console.log(hari)
console.log(Number(hari));
console.log('tipe dari nama adalah '+typeof(nama)+' dan tipe dari hari yang telah dikonversi adalah '+typeof(Number(hari)));