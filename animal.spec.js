// Importera animal
const Animal = require('./animal.js')

// Skapa en ny instans av Animal
describe('Animal', () => {

  let myAnimal

  beforeAll(() => {
  // Skapa ett nytt Animal-objekt med ett unikt namn
    myAnimal = new Animal('a', 1, 'ape')
  })

  // Before each
  beforeEach(() => {
    myAnimal.name = 'a'
    myAnimal.age = 1
    myAnimal.species = 'ape'
  })

  it('Skapa Animal object', () => {
    expect(myAnimal.name).toBe('a')
    expect(myAnimal.age).toBe(1)
    expect(myAnimal.species).toBe('ape')
  })

  it('Aging', () => {
    expect(myAnimal.age).toBe(1)
    myAnimal.aging()
    expect(myAnimal.age).toBe(2)
  })

  it('Renaming done correct', () => {
    myAnimal.rename('Adam')
    expect(myAnimal.name).toBe('Adam')

    myAnimal.rename('Beatrice')
    expect(myAnimal.name).toBe('Beatrice')
  })

  it('Wrongful renaming', () => {
  //Spara errormeddelande i var
    let response = myAnimal.rename('Andxxxers')
    expect(response).toMatch('Felaktigt namn')
    expect(myAnimal.name).toBe('a') //Ingen ändring sker
  })

  it('ToString metod', () => {
    let response = myAnimal.toString()
    expect(response).toMatch('Denna ape heter a och är 1 år gammal.')
  })
})