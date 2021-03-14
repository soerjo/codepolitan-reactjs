var angkaX = [1, 2, 3, 4, 5];
var angkaY = [...angkaX];

angkaY[0] = 7;

console.log(angkaX);
console.log(angkaY);

console.log("Spread Syntax");

var mobilAndi = {
  tipe: "Anvanza",
  merk: "Toyota",
  warna: "Hitam",
};

var mobilbudi = { ...mobilAndi };

console.log(mobilAndi);
console.log(mobilbudi);

//destructuring
var huruf = ["a", "b", "c", "d", "e", "f", "g"];
var [theFirst] = huruf;
console.log(theFirst);

//object literal enhancement
var nama = "Alia";
var usia = "24";
var jenisKelamin = "perempuan";

//penulisan object normal
var mahasiswi1 = {
  nama: nama,
  usia: usia,
  jenisKelamin: jenisKelamin,
  hobby: "nonton",
};
console.log(mahasiswi1);

//dipersingkat
var mahasiswi2 = {
  nama,
  usia,
  jenisKelamin,
  hobby: "nonton Anime",
};
console.log(mahasiswi2);
