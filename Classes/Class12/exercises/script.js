class Animal {
    constructor (name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }

    get type() {
        return this._type;
      }

      set type(data) {
        if (data !== 'herbivore' && data !== 'carnivore' && data !== 'omnivore') {
          console.log("The given type is not valid");
        } else {
          this._type = data;
        }
      }
    

    // eat (inputAnimal) {
    //     console.log((this.size * 2))
    //     console.log(inputAnimal.size);
    //     console.log(this.type);
    //     console.log(inputAnimal.type)
    //     if (inputAnimal instanceof Animal) {
    //         if (this.type === "herbivore") {
    //             console.log(`The animal ${this.name} is herbivore and does not eat animals.`);
    //             return;
    //         } else if (this.type !== "herbivore") {
    //             inputAnimal.isEaten = true;
    //             console.log(`The animal ${this.name} ate the ${inputAnimal.name}.`);
    //             return;
    //         } else if (inputAnimal.size >= (this.size * 2)) {
    //             console.log(`The animal ${this.name} tried to eat the ${inputAnimal.name}, but it was too large`);
    //             return;
    //         }
    //     } else {
    //         console.log(`The animal ${this.name} is eating ${inputAnimal.name}`);
    //         return; 
    //     }  
        
    // }


    eat (inputAnimal) {
        console.log((this.size * 2))
        console.log(inputAnimal.size);
        console.log(this.type);
        console.log(inputAnimal.type)
        if (inputAnimal instanceof Animal) {
            if (this.type === "herbivore") {
                console.log(`The animal ${this.name} is herbivore and does not eat animals.`);
                return;
            } else if (this.type !== "herbivore" && inputAnimal.size <= (this.size * 2)) {
                inputAnimal.isEaten = true;
                console.log(`The animal ${this.name} ate the ${inputAnimal.name}.`);
                return;
            } else if (this.type !== "herbivore" && inputAnimal.size >= (this.size * 2)) {
                console.log(`The animal ${this.name} tried to eat the ${inputAnimal.name}, but it was too large`);
                return;
            }
        } else {
            console.log(`The animal ${this.name} is eating ${inputAnimal.name}`);
            return; 
        }  
        
    }

}



let cat = new Animal ('Cat', 'herbivore', 3, 2);
console.log(cat);
let horse = new Animal ('Horse', 'herbivore', 10, 7);
console.log(horse);

cat.eat(horse);
