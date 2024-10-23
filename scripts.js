// Importera Animal class
const Animal = require('./animal.js')

// Skapa ett objekt av Animal
const myAnimal = new Animal('Elvis', 15, 'Cat')

console.log(myAnimal.name)
console.log(myAnimal.toString())

// Birthday
myAnimal.aging()
console.log(myAnimal.toString())
