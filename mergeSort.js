// 3 Steps of Merge Sort:
// Sort the left half
// Sort the right half
// Merge the sorted halves

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let midIndex = Math.floor(arr.length / 2);
    let leftHalf = mergeSort([...arr.slice(0, midIndex)]);
    let rightHalf = mergeSort([...arr.slice(midIndex)]);
    let sorted = [], i = 0, j = 0;
    while(i < leftHalf.length && j < rightHalf.length) {
        if (leftHalf[i] < rightHalf[j])
            sorted.push(leftHalf[i++]);
        else 
            sorted.push(rightHalf[j++]);
    }
    // Replacing both while loops: 
    while(i < leftHalf.length) sorted.push(leftHalf[i++]);
    while(j < rightHalf.length) sorted.push(rightHalf[j++]); 
    // return sorted.concat(leftHalf.slice(i)).concat(rightHalf.slice(j));
    return sorted;
}

/*
How to sort: 
// Divide: 
[5, 4, 3, 2, 1]
[5, 4] [3, 2, 1]
[5] [4]  [3] [2, 1]
[5] [4]  [3]  [2] [1]
// Conquer:
[4, 5]  [3]  [1, 2]
[4, 5] [1, 2, 3]
[1, 2, 3, 4, 5]
*/

// Main test cases:
console.log(mergeSort([])) // []
console.log(mergeSort([73])) // [73]
console.log(mergeSort([1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])) // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])) // [79, 100, 105, 110]
