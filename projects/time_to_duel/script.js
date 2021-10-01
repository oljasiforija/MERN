class Cards{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}
class Units extends Cards{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    showStats(){
        console.log(`Name: ${this.name}, Cost: ${this.cost}, Power: ${this.power}, Resilience: ${this.resilience} `)
    }
    attack(target){
        target.resilience -= this.power;
    }
    
}

class Effect extends Cards{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Units){
            target[this.stat] += this.magnitude;
            target.cost -= this.cost;
            console.log(`${this.text}`)
        }
        else{
            throw new Error( "Target must be a unit!" );
        }
    }
}

let unit1 = new Units("Red Belt Ninja", 3, 3, 4)
let unit2 = new Units("Black Belt Ninja", 4, 5, 4)
let effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3)
let effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)
let effect3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)
unit1.showStats();
unit2.showStats();
effect1.play(unit1);
effect2.play(unit1);
effect3.play(unit1);
unit1.showStats();
unit1.attack(unit2);
unit1.showStats();
unit2.showStats();
