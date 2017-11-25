function solution(A) {
  // write your code in JavaScript (Node.js 6.4.0)

  let terrainArray = makeTerrainArray(A);

  if (terrainArray.length === 1 || terrainArray.length === 2) {
    return terrainArray.length;
  }

  let castleCount = 0;
  let hillCount = 0;
  let valleyCount = 0;
  let N = A.length;

  for (let i in terrainArray) {
    let P = terrainArray[i][0];
    let Q = terrainArray[i][1];

    if ( P > 0 && Q < (N - 1)) {
      if (A[P - 1] < A[P] && A[Q + 1] < A[Q]) {
        hillCount = hillCount + 1;
      }
      if (A[P - 1] > A[P] && A[Q + 1] > A[Q]) {
        valleyCount = valleyCount + 1;
      }
    } else {
      castleCount = castleCount + 1;
    }
  }

  return castleCount + hillCount + valleyCount;
}

function makeTerrainArray(arr) {
  let result = [];
  let tempArr = [];

  for (let i in arr) {

    if (tempArr.length === 0) {
      tempArr.push(parseInt(i));
      continue;
    }

    if (arr.length - 1 == i) {
      if (arr[i - 1] !== arr[i]) {
        tempArr.push(parseInt(i - 1));
        result.push(tempArr);
  
        tempArr = [parseInt(i), parseInt(i)];
        result.push(tempArr);
      } else {
        tempArr.push(parseInt(i));
        result.push(tempArr);
      }
      continue;
    }

    if (arr[i - 1] !== arr[i]) {
      tempArr.push(parseInt(i - 1));
      result.push(tempArr);

      tempArr = [];
      tempArr.push(parseInt(i));
    }
  }

  return result;
}


// [ [ 0, 1 ],[ 2, 2 ],[ 3, 3 ],[ 4, 5 ],[ 6, 7 ],[ 8, 9 ],[ 10, 10 ],[ 11, 11 ] ]
let result1 = solution([2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5]);
console.log(result1 === 4);

// [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8, 9 ] ]
let result2 = solution([0, 0, 1, 1, 0, 0, 1, 1, 0, 0]);
console.log(result2 === 5)

// [ [ 0, 0 ], [ 1, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [8, 8], [9, 9] ]
let result3 = solution([0, 2, 1, 1, 0, 0, 1, 1, 2, 0]);
console.log(result3 === 5)

// [ [ 0, 3 ], [ 4, 7 ] ]
let result4 = solution([0, 0, 0, 0, 1, 1, 1, 1]);
console.log(result4 === 2)

// [ [ 0, 2 ] ]
let result5 = solution([-3, -3]);
console.log(result5 === 1)
