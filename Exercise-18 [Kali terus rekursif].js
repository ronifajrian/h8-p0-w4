function kaliTerusRekursif(angka) {
  // you can only write your code here!

  if (angka == 0) {
    return 1
  }else {
    while (angka.toString().length > 1) {
      angka = angka % 10 * kaliTerusRekursif(Math.floor(angka/10))
    }
    return angka
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
