// Importera Animal class
const Animal = require('./animal')

// Skapa ett objekt av Animal
let myAnimal = new Animal("Elvis", 15, "Cat")

console.log(myAnimal.name)
console.log(myAnimal.toString())

//Birthday
myAnimal.aging()
myAnimal.toString()