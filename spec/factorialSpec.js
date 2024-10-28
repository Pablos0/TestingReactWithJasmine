const factorial = require("../src/factorial.js");

describe("factorial", function () {
    var calc;

    // This will be called before running each spec
    beforeEach(function () {
        calc = factorial;
    });

    describe("when calc is used to perform factorial operations", function () {
        it("should be able to calculate factorial of 0", function () {
            expect(calc.factorial(1)).toEqual(1);
        });

        it("should be able to calculate factorial of 1", function () {
            expect(calc.factorial(1)).toEqual(1);
        });

        it("should be able to calculate factorial of 5", function () {
            expect(calc.factorial(5)).toEqual(120);
        });

        it("should be able to throw error in factorial operation when the number is negative", function () {
            expect(function () {
                calc.factorial(-2);
            }).toThrowError(Error);
        });

        it("should be able to throw error in factorial operation when the input is not a number", function () {
            expect(function () {
                calc.factorial(true);
            }).toThrowError(Error);
        });
    });
});