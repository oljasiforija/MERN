leftArr = [-4,1,2,7,9,14, 90,101];
rightArr = [0,3,4,6,8,10,11, 12, 13, 100, 1000];
const combine = (leftArr, rightArr) => {
    let i =0;
    let j = 0;
    const newArr = [];

    while(i < leftArr.length && j < rightArr.length)
    if (leftArr[i] < rightArr[j]){
        newArr.push(leftArr[i]);
        i++;
    }
    else{
        newArr.push(rightArr[j]);
        j++;
    }
    while(i < leftArr.length){
        newArr.push(leftArr[i]);
        i++
    }
    while(j < rightArr.length){
        newArr.push(rightArr[j]);
        j++
    }
    return newArr;
}

// should return [0,1,2,3,4,6,7,9,11]
// console.log(combine([1,2,7,9],[0,3,4,6,11]));
console.log(combine(leftArr, rightArr));