function sorting(arrNumber) {
  // code di sini
  arrNumber.sort(function(a,b){return a-b})
  return arrNumber
}

function getTotal(arrNumber) {
  // code di sini

  if (arrNumber.length == 0) {
    return "\'\'"
  } else {

    var a = arrNumber[0]
    for (var i = 0; i < arrNumber.length; i++) {
      var b = arrNumber[i+1]

      if (a < b) {
        a = b
      }

    }
    var n = 0
    for (var i = 0; i < arrNumber.length; i++) {
      if (arrNumber[i] == a) {
        n++
      }
    }
    return "angka paling besar adalah " + a + " dan jumlah kemunculan sebanyak " + n
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
