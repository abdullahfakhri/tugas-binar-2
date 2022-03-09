let genderAku = "pria"
let genderKamu = "wanita" //kalo pria hasilnya bakal, "kita tidak berjodoh"
let umurSusi = 30
let umurAmir = 40

let pakBudi = 10
let pakDayat = 20
let pakAmin = 30

let adi = 32
let rahmat = 40

let banyakBuah = 20
let indexDouble = 0



//inject elemet baru
let elementBaru = document.createElement("h1")

elementBaru.textContent = "aku adalah supreme"

document.body.append(elementBaru)



//cara ubah html atau css tampa di ubah di html atau css nya
// let Header1 = document.getElementsByClassName("hello")
// console.log(Header1)

// // Header1.innertext = "nama kamu siapa?"
// setInterval(() => {
//     Header1[1].innertext ="aku jomblo"
//     // Header1[1].style.backgroundColor="red"
// }, 3000);

//DOM
// document.write("hello world");






//do while
// do{
//     indexDouble++
//     console.log("banyak buah ", indexDouble)
// }while (indexDouble)

// while
// while (indexDouble <= 10) {
//     console.log("banyak buah ", indexDouble)
//     indexDouble++
// }



// for
// for (let index = 0; index < banyakBuah; index++) {
//     console.log("tes "+ index)
// }






//switch case
// switch (adi) {
//     case 32:
//         console.log("sepatu di temukan nomor 32");
//         break;
//     case 45:
//         console.log("sepatu di temukan nomor 23");
//         break;
//     case 50:
//         console.log("sepatu di temukan nomor 80");
//         break;
//     case 43:
//         console.log("sepatu di temukan nomor 54");
//         break;
//     case 76:
//         console.log("sepatu di temukan nomor 33");
//         break;
//     case 69:
//         console.log("sepatu di temukan nomor 43");
//         break;
//     case 71:
//         console.log("sepatu di temukan nomor 65");
//         break;
    
//     default:
//         console.log("sepatu tidak ada")
// }


// if (pakBudi >= pakDayat){
//     console.log("pak budi rich")
// }else if(pakBudi <= pakAmin) {
//     console.log("sapi pak dayat lebih besar")
// }else{
//     console.log("sapi pak budi lebih kecil")
// }
// // === :artinya 
// if (genderAku === genderKamu) {
//     console.log("kita tidak berjodoh")
// }else{
//     console.log("yaudah nikah yuk")
// }

// if (umurSusi > umurAmir) {
//     console.log("susi masih muda")
// }else{
//     console.log("susi ibu-ibu")
// }

// switch (umurAmir) {
//     case 1:
//         console.log("ukuran sepatu 3");
//         break;
//     case 2:
//         console.log("ukuran sepatu 30");
//         break;
//     case 3:
//          console.log("ukuran sepatu 40");
//         break;
    
//     default:
//         console.log("ukuran sepatu tidak ada");
//         break;
// }