//Import sum
const {sum, sub} =  require('./sum.js')

//Initiera tester
describe("Tester kring matematik", () => {
    // Test 1
    it("1+2=3", () => {
        expect(sum(1, 2)).toBe(3)
    })

    // Test 2
    it("11+15=26", () => {
        expect(sum(11, 15)).toBe(26)
    })

    // Test 1 för sub
    it("100-90=10", () => {
        expect(sub(100, 90)).toBe(10)
    })

    // Test 2 för sub
    it("20-19=1", () => {
        expect(sub(20, 19)).toBe(1)
    })
})