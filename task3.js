function printSegitiga(a) {
  if (typeof a !== 'number' || a < 1) {
    console.log("printSegitiga harus berupa bilangan positif")
    return
  } else {
    let string = "";
    for (let i = a; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        string += j;
      }
      string += "\n";
    }
    return string;
  }
}
let hasil = printSegitiga(5);
console.log(hasil);
