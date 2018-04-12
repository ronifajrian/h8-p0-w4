function changeMe(arr) {
  // you can only write your code here!

  if (arr.length == 0) {
    console.log("\"\"");
  } else {
    var newObj = {}
    for (var i = 0; i < arr.length; i++) {
      newObj.firstName = arr[i][0]
      newObj.lastName = arr[i][1]
      newObj.gender = arr[i][2]
      if (arr[i].length !== 4 || arr[i][3] > 2018) {
        newObj.age = "Invalid Birth Year"
      } else {
        newObj.age = 2018 - arr[i][3]
      }
      console.log((i+1) + ". " + arr[i][0] + " " + arr[i][1] + ":");
      console.log(newObj);
    }
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""
