/**
 * Exercise 1
 */

 class Animal {
    constructor(name, type, age, size) {
      this.name = name;
      this.type = type;
      this.age = age;
      this.size = size;
      this.isEaten = false;
    }
  
    // set type(data) {
    //   if (data !== 'carnivore' && data !== 'omnivore' && data !== 'herbivore') {
    //     throw new Error('There is no such a type');
    //   } else {
    //     this._type = data;
    //   }
    // }
  
    // get type() {
    //   return this._type;
    // }
  
    eat(food) {
      if (food instanceof Animal) {
        if (this.type === 'herbivore') {
          console.log(`The animal ${this.name} is a herbivor e and does not eat other animals!`);
          return;
        }
        if (this.size >= food.size * 2) {
          food.isEaten = true;
          console.log(`The animal ${this.name} ate the ${food.name}`);
          return;
        } else {
          console.log(`The animal ${this.name} tried to eat the ${food.name} but it was too large`);
          return;
        }
      }
      console.log(`The animal ${this.name} is eating ${food}`);
    }
  }
  
let cat = new Animal ('Cat', 'carnivore', 3, 2);
console.log(cat);
let horse = new Animal ('Horse', 'herbivore', 10, 6);
console.log(horse);

cat.eat(horse);