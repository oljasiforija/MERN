const Ninja = require ('./ninja')

class Sensei extends Ninja {
    constructor(name){
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }
    speakWisdom(){
        const wisdom = this.drinkSake();
        console.log(`What one programmer can do in one month, two programmers can do in two months.`)
    }
}
let sensei1 = new Sensei("Master Sensei")
sensei1.speakWisdom();
sensei1.showStats();