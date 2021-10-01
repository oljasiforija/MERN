//Intersect two arrays to create an unsorted multiset
//return the new array of all the values that both arrays
//have in common

//[6,7,2,7,6,2], [2,7,2,1,2] returns [7,2,2]

// const intersectUnsorted = (leftArr, rightArr) => {
//     let newArr = [];
//     for (var i = 0; i < leftArr.length; i++) {
//         for (var j = 0; j < rightArr.length; j++) {
//             if (leftArr[i] === rightArr[j]) {
//                 newArr.push(leftArr[i]);
//                 i++;
//                 j++;
//                 break
//             }
//         }
//     }
//     return newArr;
// }
// console.log(intersectUnsorted([6, 7, 2, 7, 6, 2, 3], [2, 7, 2, 1, 2, 3]));
// console.log(intersectUnsorted([1, 2, 2, 27, 2], [2, 2, 6, 6, 7]));
// console.log(intersectUnsorted([1, 5, 9], [2, 6, 10, 0, 0, 0, 1]));
// console.log(intersectUnsorted([6, 19, 0, 0, 9, 32, 4], [2, 0, 6, 7, 18, 0, 6, 1]));
// console.log(intersectUnsorted([23, 4, 100, 108, 16, 15, 2, 8, 42], [0, 4, 8, 15, -100, 42, 108, 23, 16]));

const intersectUnsorted1 = (leftArr, rightArr) => {
    var output = [];
    for (var i =0; i<leftArr.length;i++) {
        for (var j=0; j<rightArr.length; j++) {
            if (leftArr[i] === rightArr[j]) {
                output.push(leftArr[i]);
                rightArr.splice(j,1)
                break
            }
        }
    }
    return output;
}


console.log(intersectUnsorted1([6,7,2,7,6,2], [2,7,2,1,2]));
console.log(intersectUnsorted1([1,2,2,27,2],[2,2,6,6,7]));
console.log(intersectUnsorted1([1,5,9],[2,6,10,0,0,0,1]));
console.log(intersectUnsorted1([6,19,0,0,9,32,4],[2,0,6,7,18,0,6,1]));
console.log(intersectUnsorted1([23,4,100,108,16,15,2,8,42],[0,4,8,15,-100,42,108,23,16])); 