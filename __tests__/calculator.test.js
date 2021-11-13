// 4. Add constant and call calculator.js
const calculator = require("../calculator");

const a = 4;
const b = 2;


// 5. Describe test cases
describe("Test basic calculator", () => {

    // 6. ("Describe what you want to test for add")
    test("add a + b equal 6", () => {
        //7. Expect result
        expect(calculator.add(a, b)).toBe(6);
    });
    
    // ("Describe what you want to test for subtract")
    test("subtract a - b equal 2", () => {
        expect(calculator.subtract(a, b)).toBe(2);
    });

    // ("Describe what you want to test for multiply")
    test("multiply 2 * 4 equal 8", () => {
        expect(calculator.multiply(a, b)).toBe(8);
    });

    // ("Describe what you want to test for divide")
    test("divide 4 / 2 equal 2", () => {
       expect(calculator.divide(a, b)).toBe(2);
    });

});
