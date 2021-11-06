// 4. Add constant and call calculator.js
const calculator = require("./calculator");

// 5. Describe test cases
describe("Test my basic calculator", () => {

    // 6. ("Describe what you want to test for add")
    test("add 111 + 111 equal 222", () => {
        //7. Expect result
        expect(calculator.add(111,111)).toBe(222);
    });
    
    // ("Describe what you want to test for subtract")
    test("subtract 123 - 23 equal 100", () => {
        expect(calculator.subtract(123,23)).not.toBe(100);
    });

});
