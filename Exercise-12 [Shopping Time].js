function shoppingTime(memberId, money) {
  // you can only write your code here!
  var data = {}
  var listPurchased = []
  var changeMoney = 0

  var arrSale = ['Sepatu Stacattu','Baju Zoro','Baju H&N','Sweater Uniklooh','Casing Handphone']
  var hargaSale = [1500000,500000,250000,175000,50000]
  var sisa = money
  var newArr = []

  for (var i = 0; i < hargaSale.length; i++) {
    if (sisa >= hargaSale[i]) {
      var changeMoney = sisa - hargaSale[i]
      sisa = changeMoney
      listPurchased.push(arrSale[i] + " ")
    }
  }

  if (memberId == "" || memberId == null) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja"
  } else if (listPurchased.length == 0) {
    return "Mohon maaf, uang tidak cukup"
  }

  data.memberId = memberId
  data.money = money
  data.listPurchased = listPurchased
  data.changeMoney = changeMoney

  return data
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }

console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }


console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
