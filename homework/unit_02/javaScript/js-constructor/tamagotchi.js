console.log('Tamagotchi file is loaded');

//your constructor function here
class Tamagotchi {
    constructor(name, creatureType) {
        this.name = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
        
        this.cry = () => {
            this.foodInTummy--;
            console.log("WAHH!!!")
            console.log(this.name + "' food in tummy: " + this.foodInTummy);
        };

        this.puke = () => {
            this.foodInTummy--;
            console.log(this.name + "' WAHHH: " + this.foodInTummy);
        };

        this.yawn = () => {
            this.restedness--;
            console.log(this.name + " has current restedness of: " + this.restedness);
        };

        this.start = function(){
            console.log("Starting " + this.name);
            var tam = this;
            this.hungerTimer = setInterval(() => {
            tam.cry();
            }, 6000);
            this.yawnTimer = setInterval(() => {
            tam.yawn();
            }, 10000);
            this.sickTimer = setInterval(() => {
            tam.puke();
            }, 25000);
        };
        this.stop = function(){
            clearInterval(this.hungerTimer);
            clearInterval(this.yawnTimer);
            clearInterval(this.sickTimer);
        };
    }
}


//create new Tamagotchis
var tamOne = new Tamagotchi("Danny", "Type A");
var tamTwo = new Tamagotchi("Michael", "Type B");

var tamThree = new Tamagotchi("Jake", "Type C");
var tamFour = new Tamagotchi("Jack", "Type D");

var tamFive = new Tamagotchi("Aaron", "Type E");
var tamSix = new Tamagotchi("Blake", "Type F");

//test out your Tamagotchies below via console.logs

console.log("Tamagotchi one: " + tamOne);
console.log("Tamagatchi two: " + tamTwo);

tamOne.cry();
tamTwo.cry();
tamThree.cry();
tamFour.cry();

console.log(tamFive.name);
console.log(tamSix.name);
