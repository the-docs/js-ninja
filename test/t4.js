function solution(A) {
  // write your code in JavaScript (Node.js 6.4.0)

  let uniqueArr = makeUniqueArr(A);
  let startIndex = 0;
}

function makeUniqueArr(arr) {
  let result = [];

  arr.forEach(function (element) {
    let index = result.findIndex(function(el) {
      return el === element;
    });

    if (index === -1) {
      result.push(element);
    }
  });

  return result;
}

function findCoverArr(vacationArr, uniqueArr) {
  uniqueArr.forEach(function (element) {
    let index = vacationArr.findIndex(function(el) {
      return el === element;
    });

    if (index === -1) {
      return false;
    }
  });

  return true;
}

let A = [7,3,7,3,1,3,4,1];
let result = uniqueArr(A);
console.log(result);
let result2 = coverArr(A, result);
console.log(result2);
