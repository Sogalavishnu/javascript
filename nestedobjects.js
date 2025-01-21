// nested objects = object inside of the other object is know as nested object.
// Allows you to represent more complex data structures child Object is enclosed by a parent Object.

const person = {
    firstName : "Robby",
    lastName : "spain",
    age : 21,
    hobbies : ["reading", "swimming", "Sleeping"],
    Address : {
        street : "Himalayas",
        city : "Kasmir",
        country : "INDIA",
    }
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.hobbies[1]);
console.log(person.Address.street);
console.log(person.Address.country);

// if u wanna loop through the properties of the object.

for(const property in person.Address){
    console.log(person.Address[property]);
}

// these for classes.

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age; 
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person5 = new Person("Jumkahh", 20, "GUftugu", "delhi", "INDIA");

console.log(person5.address.city);
console.log(person5.name);

// storing the objects in a array.

const fruits = [{name : "SARA", age : 20, study : "coz"}, 
                {name : "NAGG", age : 13, study : "coz"},
                {name : "CHIRU", age : 20, study : "isqh"}]

console.log(fruits[0].name); // array[0].property;
console.log(fruits[1].age);
console.log(fruits[2].study);
fruits.push({name : "fisher", age : "21", study : "fashn"});
console.log(fruits);
fruits.pop();  // removes the last element of the array.
// ---forEach()-----

fruits.forEach(fruit => console.log(fruit)); // one element at a time will be print.

// ---map()--- IT will return a new array but only gives the property in that array.

const FruitsNames = fruits.map(fruit => fruit.name);
const FruitsAge = fruits.map(fruit => fruit.age);
const Fruitsstudy = fruits.map(fruit => fruit.study);
console.log(FruitsNames);
console.log(FruitsAge);
console.log(Fruitsstudy);

// ----filter()---- It will also return a new array but give total object with the property

const AdultsFruits = fruits.filter( fruit => fruit.age > 18);
console.log(AdultsFruits);
const Studies = fruits.filter(fruit => fruit.study === "coz");
console.log(Studies);

// ----reduce---- 

const MaxAge = fruits.reduce( (max, nextfruit) => nextfruit.age > nextfruit.age ? nextfruit : max);

console.log(MaxAge);

const MinAge = fruits.reduce( (min, nextfruit) => nextfruit.age < min.age ? nextfruit : min);

console.log(MinAge);