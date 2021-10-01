
class Ninja {
    constructor(name, health = 0){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength =  3
    }
    sayName(){
        console.log(`${this.name}`)
    }
    showStats(){
        console.log(`Name: ${this.name}, health: ${this.health}, strength: ${this.strength}, speed: ${this.speed} `)
    }
    drinkSake(){
        this.health += 10
        console.log(`Health has been increased by 10.`)
    }
}
let ninja1 = new Ninja ("Awesome Ninja")
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


module.exports = Ninja;