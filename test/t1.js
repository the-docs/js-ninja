function solution(arr) {
  // write your code in JavaScript (Node.js 6.4.0)

  if (arr.length === 1) {
    return 0;
  }

  let headCount = 0;
  let tailCount = 0;

  for (let i in arr) {
    if (arr[i] === 1) {
      headCount = headCount + 1;
    } else {
      tailCount = tailCount + 1;
    }
  }

  return Math.min(headCount, tailCount);
}

let result1 = solution([1, 0, 0, 1, 0, 0]);
console.log(result1 === 2)

let result2 = solution([0, 0, 0, 0, 1, 1, 1, 1]);
console.log(result2 === 4)

let result3 = solution([0]);
console.log(result3 === 0)

let result4 = solution([0]);
console.log(result4 === 0)
