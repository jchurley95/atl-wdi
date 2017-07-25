console.log('Tamagotchi file is loaded');

//your constructor function here
class Tamagotchi {
    constructor(name, creatureType) {
        this.name = name;
        this.creatureType = creatureType;
        this.restedness = 10;
        this.health = 10;
        
        this.cry = () => {
            this.foodInTummy--;
            console.log("WAHH!!!")
            console.log(this.name + "' food in tummy: " + this.foodInTummy);
        };

        this.puke = () => {
            this.health--;
            console.log(this.name + "' health: " + this.health);
        };

        this.yawn = () => {
            this.restedness--;
            console.log(this.name + " restedness: " + this.restedness);
        };
    }
}

//create new Tamagotchis
let tamOne = new Tamagotchi("Danny", "Type A");
let tamTwo = new Tamagotchi("Michael", "Type B");


//test out your Tamagotchies below via console.logs

console.log("Tamagotchi one: " + tamOne);
console.log("Tamagatchi two: " + tamTwo);
