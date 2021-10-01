//combine two pre-sorted arrays into one sorted array
//return the newly combined array
//bonus challenge: combine in place into leftArr instead of a new array
leftArr = [1,2,7,9];
rightArr = [0,3,4,6,11]
let newArr = [...leftArr, ...rightArr].sort()

const combine = (leftArr, rightArr) => {
    
}
console.log(newArr)
function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; ++i){
        let mindex = i;
        for(let j = i; j < arr.length; ++j){
            if(arr[mindex] > arr[j]){
                mindex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[mindex];
        arr[mindex] = temp;
    }
    return arr;
}
console.log(selectionSort(newArr))
// should return [0,1,2,3,4,6,7,9,11]
// console.log(combine([1,2,7,9],[0,3,4,6,11]));

// should return [0,1]
// console.log(combine([1],[0]));



