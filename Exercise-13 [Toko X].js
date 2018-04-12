function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  var sepatu = new Object()
  var baju = new Object()
  var sweater = new Object()
  var newArr =[]

  var sepatuName = []
  var bajuName = []
  var sweaterName = []
  // you can only write your code here!

  if (shoppers.length == 0) {
    return "[]"
  } else {
    sepatu.product = listBarang[0][0]
    baju.product = listBarang[1][0]
    sweater.product = listBarang[2][0]

    for (var i = 0; i < listBarang.length; i++) {

      var cekJenis = listBarang[i][0]
      var cekStok = listBarang[i][2]
      var arrName = []
      var leftOver = listBarang[i][2]
      var totalAmount = 0
      var profit = listBarang[i][1]

      for (var j = 0; j < shoppers.length; j++) {
        if (cekJenis == shoppers[j].product && cekStok >= shoppers[j].amount) {
          arrName.push(shoppers[j].name)
          leftOver = leftOver - shoppers[j].amount
          totalAmount += shoppers[j].amount
          cekStok = leftOver
        }
      }


      profit = profit * totalAmount
      if (i == 0) {
        sepatuName = sepatuName.concat(arrName)
        sepatuAmount = leftOver
        sepatuProfit = profit
      } else if (i == 1){
        bajuName = bajuName.concat(arrName)
        bajuAmount = leftOver
        bajuProfit = profit
      } else if (i == 2){
        sweaterName = sweaterName.concat(arrName)
        sweaterAmount = leftOver
        sweaterProfit = profit
      }
    }
  }
  sepatu.shoppers = sepatuName
  baju.shoppers = bajuName
  sweater.shoppers = sweaterName


  sepatu.leftOver = sepatuAmount
  baju.leftOver = bajuAmount
  sweater.leftOver = sweaterAmount

  sepatu.totalProfit = sepatuProfit
  baju.totalProfit = bajuProfit
  sweater.totalProfit = sweaterProfit

  newArr.push(sepatu,baju,sweater)


  return newArr
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2},
                        {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},
                        {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
                      {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10},
                      {name: 'Rani', product: 'Sweater Uniklooh', amount: 1},
                      {name: 'Devi', product: 'Baju Zoro', amount: 1},
                      {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log(countProfit([])); //[]
