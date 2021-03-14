import TemplateLiteral from "./belajarTemplateLiteral.js";

console.log("hallo dunia");

//belajar var
function belajarVar() {
  var pekerjaan = "developer";
  var materiBelajar = "belajar reaksi kimia";

  if (pekerjaan == "developer") {
    var materiBelajar = "belajar javascript";
    console.log(materiBelajar); //hasil: belajar javascript
  }

  console.log(materiBelajar); //hasil: belajar javascript
}

function belajarLet() {
  var pekerjaan = "developer";
  var materiBelajar = "belajar reaksi kimia";

  if (pekerjaan == "developer") {
    let materiBelajar = "belajar javascript";
    console.log(materiBelajar); // hasil: belajar javascript
  }

  console.log(materiBelajar); // hasil: belajar reaksi kimia
}

console.log("==========");
belajarVar();
console.log("==========");
belajarLet();
