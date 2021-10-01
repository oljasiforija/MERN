//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
const dedupe = (str) => {
    const dedupe = (str) => {
        const strArray = [...str]
        const dedupe = [...new Set(strArray)]
        const string = dedupe.join("")
        return string
    }
    
    
    const dedupe2 = (str) => {
        let StringSet = new Set()
        let output = ""
        for(char of str) {
            StringSet.add(char)
        }
        for(char of StringSet) {
            output += char
        }
        return output
    }
}

console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!"));


// const dedupe = (str) => {
//     var arr = [];
//     var output = "";
//     count = 0;
//     for (var i = str.length - 1; i >=0; i--){
//         for (var j=0; j < arr.length; j++){
//             if (str[i] === arr[j]){
//                 count++;
//             }
//         }
//         if (count === 0){
//             arr.push(str[i]);
//             output = str[i] + output;
//         }
//         count = 0;
//     }
//     return output;
// }




// const dedupe = (str) => {
//     var outputString = ""
//     var usedCharacters = []
//     var useValue = true
//     for(var i = str.length-1; i>=0; --i) {
//         if (i == str.length - 1) {
//             outputString = str[i] + outputString
//             usedCharacters.push(str[i])
//         } else {
//             for(var j = 0; j < usedCharacters.length; j++) {
//                 if (usedCharacters[j] == str[i]) {
//                     useValue = false
//                     break
//                 }
//             }
//             if (useValue == true) {
//             outputString = str[i] + outputString
//             usedCharacters.push(str[i])
//             } else {
//                 useValue = true
//             }
//         }
//     }
//     return outputString
// }

// console.log(dedupe("Snaps! crackles! pops!"))
// console.log(dedupe("scoop dedupe"))
// console.log(dedupe("15446214518585"))