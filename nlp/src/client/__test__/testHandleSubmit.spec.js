
import "babel-polyfill";

// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"
//test function
describe("Testing the submit functionality", () => {
  
    test("Testing the handleSubmit() function", () => {
     
           expect(handleSubmit).toBeDefined();
})});