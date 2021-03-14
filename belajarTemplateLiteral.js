function TamplateLiteral() {
  var nama = "codepolitan";
  var alamat = "jl. Cipedes Tengah 1 No. 30A";

  //penggabungan string versi lama
  console.log("kantor " + nama + " berada di " + alamat);

  //penggabungan string dengan tamplate literal
  console.log(`kantor ${nama} berada di ${alamat}`);
}
