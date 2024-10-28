# Testing React with Jasmine

# Using Jasmine in npm 

In order to install Jasmine type below command:

``` npm install --save-dev jasmine ```

- Run following command to initialize the project for Jasmine:

``` npx jasmine init ```

This command create "spec/support/jasmine.json" file, which works as configuration file. 

- Optionally, you can run:

``` npx jasmine examples ```

This create example spec and source files

# Creating first suite 

- Create file called ```src/helloWorld.js``` and add below code:

``` JS 
    function helloWorld() {
        return "hello world";
    }

    module.exports = helloWorld;
    ``
```
This just will return "hello world"

- Create a Jasmine spec file called ```spec/helloWorldSpec.js```

``` JS 
    const helloWorld = require('../src/helloWorld.js');

        describe("helloWorld", () => {
            it("returns hello world", () => {
            var actual = helloWorld();
            expect(actual).toBe("hello world");
            });
        })
        ``
  ```

The ```describe``` function is used to group related specs and is usually found at the top level of each test file. The string parameter is used to name the collection of specs and will be concatenated with specs to form a spec's full name. This makes it easier to find specs in a large suite. If you name them correctly, your specifications will read as full sentences in traditional Behavior-driven-development (BDD) style.

Specs are defined by calling the global Jasmine function ```it```, which, like ```describe```, takes a string and a function. The string is the title of the spec, and the function is the spec or test. A spec contains one or more expectations that test the state of the code. In Jasmine, an expectation is an assertion that is either true or false. A passing spec contains all true expectations. A failing spec contains one or more false expectations.

Expectations are built with the function ```expect```, which takes a value called the actual. It is linked with a Matcher function, which takes the expected value.

- To run the test type below command

``` npx jasmine ``` or ``` npm test ```

If it was successfuly you should see ``` ... ```


- Create ``` src/factorial.js ``` file 

```JS
    const factorial = (inputNumber) => {
  if (inputNumber < 0)
    throw new Error("We don't allow factorial of a negative number.");

  if (inputNumber === 1 || inputNumber === 0) return 1;

  return inputNumber * exports.factorial(inputNumber - 1);
};

exports.factorial = factorial;
``
```
And ``` spec/factorialSpec.js ``` file

```JS 
    const factorial = require("../src/factorial.js");

describe("factorial", function () {
  var calc;

  //This will be called before running each spec
  beforeEach(function () {
    calc = factorial;
  });

  describe("when calc is used to peform factorial operations", function () {
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
  });
});
``
```

In ``` spec/factorialSpec.js ``` file type below code: 

``` JS 
    const factorial = require("../src/factorial.js");

describe("factorial", function () {
  var calc;

  //This will be called before running each spec
  beforeEach(function () {
    calc = factorial;
  });

  describe("when calc is used to peform factorial operations", function () {
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
``
```
if you try to test the code, a error will be prompt 

<!-- Started
.....F
Failures:
1) factorial when calc is used to peform factorial operations should be able to throw error in factorial operation when the input is not a number
  Message:
    Expected function to throw an Error.
...
6 specs, 1 failure -->

to pass this test is needed add a code line in ``` src/factorial.js ``` file just below the first line of factorial funcion

```JS
      if (typeof inputNumber !== "number") throw new Error("Has to be a number.");
      ``
```

