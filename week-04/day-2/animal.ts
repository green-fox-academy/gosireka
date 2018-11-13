/*
Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one
*/

class Animal {
  hungerValue: number;
  thirstValue: number;

  constructor(hunger: number = 50, thirst: number = 50) {
    this.hungerValue = Math.round(hunger);
    this.thirstValue = Math.round(thirst);
  }
  public eat(){
    this.hungerValue--;
  }
  public drink() {
    this.thirstValue--;
  }
  public play() {
    this.hungerValue++;
    this.thirstValue++;
  }

}
let cat = new Animal(55.121, 10);

cat.play();
//cat.drink();
cat.eat();

console.log(cat.thirstValue);
console.log(cat.hungerValue);
