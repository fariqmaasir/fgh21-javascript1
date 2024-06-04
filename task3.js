const printSegitiga = 5
  if (typeof printSegitiga !== 'number' || printSegitiga < 1) {
    console.log("printSegitiga harus berupa bilangan positif")
    return
  } else {
    let string = "";
    for (let i = printSegitiga; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        string += j;
      }
      string += "\n";
    }
    console.log(string)
}