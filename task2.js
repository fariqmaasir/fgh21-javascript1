//Data Nilai
const mtk = 80;
const bahasaIndonesia = 80;
const bahasaInggris = 70;
const ipa = 100;

const total = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

//Menentukan Grade
if (total >= 90) {
    console.log("Rata-rata = " + total)
    console.log("Grade = " + "A")
} else if (total >= 80) {
    console.log("Rata-rata = " + total)
    console.log("Grade = " + "B")
} else if (total >= 70) {
    console.log("Rata-rata = " + total)
    console.log("Grade = " + "C")
} else if (total >= 60) {
    console.log("Rata-rata = " + total)
    console.log("Grade = " + "D")
} else {
    console.log("Rata-rata = " + total)
    console.log("Grade = " + "E")
}