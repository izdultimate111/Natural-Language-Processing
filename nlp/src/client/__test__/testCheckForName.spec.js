// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker"

// The describe() function accepts two arguments - a string description, and a test suite that serve as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {

    test("Testing the checkForName() function", () => {
   
           expect(checkForName).toBeDefined();
})});