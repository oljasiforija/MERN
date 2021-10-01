const isPangram = (str) => {
    const sentence = str.toUpperCase();
    const alphabet = "ABCDEFJHIJKLMNOPQRSTUVWXYZ";

    for(let i = 0; i < alphabet.length; i++){
        let found = false;
        for(let j = 0; j < sentence.length; j++){
            // console.log(`checking alphabet letter: ${alphabet[i]}, checking sentence letter: ${sentence[j]}`);
            if(alphabet[i] === sentence[j]){
                found = true;
            }
        }
        if(!found){
            console.log(`couldn't find ${alphabet[i]}`);
            return false;
        }
    }

    return true;
}



const isPangram = (str) => {
    return new Set(format(str)).size == 26;
}

const isPerfectPangram = (str) => {
    return new Set(format(str)).size == 26 && format(str).length == 26;
}

function format(string) {
    return string.toUpperCase().replace(/[^A-Z]/g, '');
}

console.log(isPangram("Waxy and quivering, jocks fumble the pizza."));//returns true
console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));//missing x, returns false
console.log(isPangram("Sphinx of black quartz, judge my vow"));

console.log(isPerfectPangram("The quick brown fox jumps over the lazy sleeping dog"));//should be false
console.log(isPerfectPangram("qrstuvwxyzab cde.fghijkLMNOP"));//should be true