var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var daftarAngka = angka;
// // console.log(daftarAngka);
// // daftarAngka[1] = 5;

// //membuat array baru dengan angka element sama persis
// daftarAngka = angka.filter(element => true);
// console.log(daftarAngka);

// angka[0] = 7;
// daftarAngka[1] = 5;
// console.log(angka);
// console.log(daftarAngka);

// membuat array baru dengan element angka-angka diatas 4
var angkaDiatasEmpat = angka.filter(element => element > 4);
console.log(angkaDiatasEmpat);

var daftarSiswa = [
  { id: 1, nama: "Aura" },
  { id: 2, nama: "Soerjo" },
  { id: 3, nama: "Bujank" },
  { id: 4, nama: "Hastomo" },
  { id: 5, nama: "Tomo" },
];

var indexSoerjo = daftarSiswa.findIndex(element => element.nama == "Soerjo");
console.log(indexSoerjo);

var indexTomo = daftarSiswa.findIndex(element => element.nama == "Tomo");
console.log(indexTomo);
