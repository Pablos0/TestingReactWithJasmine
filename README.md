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

