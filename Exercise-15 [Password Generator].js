function changeVocals (str) {
  //code di sini
  var arrVocal = ["a","i","u","e","o","A","I","U","E","O"]
  var arrChange = ["b","j","v","f","p","B","J","V","F","P"]
  var newStr
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < arrVocal.length; j++) {
      if (str[i] == arrVocal[j]) {
        str = str.replace(str[i],arrChange[j])
      }
    }
  }
  return str
}

function reverseWord (str) {
  //code di sini
  str = str.split("").reverse()

  return str
}

function setLowerUpperCase (str) {
  //code di sini
  for (var i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      str[i] = str[i].toLowerCase()
    }else if (str[i] == str[i].toLowerCase()){
      str[i] = str[i].toUpperCase()
    }
  }
  return str
}

function removeSpaces (str) {
  //code di sini
  var newStr = ""
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      newStr = newStr.concat(str[i])
    }
  }
  return newStr
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter"
  } else {
    var convertVocal = changeVocals(name)
    var reverse = reverseWord(convertVocal)
    var convertCase = setLowerUpperCase(reverse)
    var final = removeSpaces(convertCase)

    return final
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
