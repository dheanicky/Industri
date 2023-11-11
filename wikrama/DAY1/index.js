let bilanganBulat = 4
let bilanganPecahan = 3.14

let teks1 = "Hello World!"
let teks2 = "contoh string"

let benar = true
let salah = false

let tidakAdaNilai = null
let VariabelBelumDiisi

const simbolUnik = Symbol("deskripsi simbol")

console.log(simbolUnik)

let angka = [1, 2, 3, 4, 5]

function tambah(a, b) {
    return a + b
}

console.log(tambah(3, 4))

let siswa = {
    nama: "Dhea",
    kelas: "XI",
    jurusan: "PPLG"
}

let hasilPertambahan = 5 + 3

let hasilPerkurangan = 10 - 5

let hasilPerkalian = 20 * 3

let hasilPembagian = 20 / 4
let hasilSisaBagi = 9 % 4

let hasilBandingBesar = 8 > 5
let hasilBandingKecil = 3 < 7
let hasilTrueAndFalse = true && false

let hasil = 3 + 5 == 7 && 4 + 5 == 9 || true

let angka2 = 5
angka2 += 5

let objek = null
let nilai3 = objek?.properti

console.log(nilai3)

let umur = 18
let status = (umur >= 18) ? "dewasa" : "anak-anak"

console.log(status)

if (umur >= 18) {
    status = "Dewasa"
} else if (umur >= 12 && umur < 18) {
    status = "Remaja"
} else {
    status = "anak-anak"
}

console.log(status)

let warna = "merah"
let warnaApa
switch (warna) {
    case "kuning":
        warnaApa = "Warna Kuning"
        break;
    case "merah":
        warnaApa = "Warna kuning"
    case "hijau":
        warnaApa = "hijau"
    default:
        warnaApa = "tidak Terdefinisi"
        break;
}

console.log(warnaApa)

function sapa(nama) {
    console.log(`halo ${nama}`)
}

sapa('Ivan')

function calculateGST(productPrice){
    return productPrice * 2
}

console.log(calculateGST(15))

let sum = (a, b) => {
    return a + b
}

alert(sum(1, 99))

const greet = function(nama, kelas){
    console.log(`hello ${nama}, kelas ${kelas}`)
}

const sayHello = greet
sayHello('Ivan', 'XI')

function sapa1(nama = "Pengunjung"){
    console.log(`Hallo ${nama}`)
}

sapa1() //argument kosong
sapa1('Dhea') //argument terisi

// let jumlah2 = 10 
// let total = jumlah2 + (hargaSatuan || 0)

// let harga2 = hargaSatuan1 !== undefined ?
// hargaSatuan1 : 0

// console.log(harga2)

// let harga3 = hargaSatuan3 ?? 0

// console.log(harga3)

const numbers = [1, 2, 3, 4, 5]

const doubles = numbers.map((numbers) => numbers * 2)
console.log(doubles)

const numbers1 = [1, 2, 3, 4, 5]

const evenNumbers = numbers1.filter((number) => number % 2 === 0)

const _numberReduce = [1, 2, 3, 4, 5]
const _sumReduce = _numberReduce.reduce((accumulator,currentValue) => accumulator + currentValue,0)
    console.log(_sumReduce)

const fruits = ["Apple", "Banana", "Cherry"]
fruits.forEach((fruits) => console.log(fruits))

const fruits1 = ['banana', 'apple', 'cherry']
fruits1.sort()
console.log(fruits1)

const numbers4 = [1, 2, 3, 4, 5]
const result = numbers4.find((number) => number > 3)

console.log(result)

//Tugas Kelompok
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const even = number.filter((number) => number %2 == 1) 
console.log(even);

let nilaiKosong = "" //untuk mevalidasi
let nilai = null //kosong tapi masih ada data