// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// a describe method that lists the name of the function OR naming of the particular test.
describe("shuffleTheRest", () => {
    let colors1 = ["purple", "blue", "green", "yellow", "pink"]
    let colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {

        //an expect method, nested within the test block, calling on the shuffleTheRest() function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(shuffleTheRest(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(shuffleTheRest(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})
// -- Got the red --  

// function shuffleTheRest(array) {
//     // call shift method (remove) the first element of the array:
//     array.shift();
//     // randomizer and sort the array
//     const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
//     //return the array
//     return shuffledArray
// }
// console.log(shuffleTheRest(colors1));

// -- Got the green -- 

// -- Refactor --  

function shuffleTheRest(array) {
    array.shift();
    return shuffledArray = array.sort((a, b) => 0.5 - Math.random()); 
}

// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
 
var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]
  
describe("minAndMax", () => {
    let nums1 = [3, 56, 90, -8, 0, 23, 6]
    let nums2 = [109, 5, 9, 67, 8, 24]
    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order,", () => {

        //an expect method, nested within the test block, calling on the minAndMax() function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(minAndMax(nums1)).toEqual([-8, 90])
        expect(minAndMax(nums2)).toEqual([5, 109])
    })
})
// -- Got the red --  

// b) Create the function that makes the test pass.

// function minAndMax(array) {
//     //declare an array, in the array call the the min and max methods, put in the index 0 and 1
//     let minAndMaxArray = [Math.min(...array), Math.max(...array)]
//     //return the array
//     return minAndMaxArray
// }
// -- Got the green -- 

// -- Refactor --  
function minAndMax(array) {

    return minAndMaxArray = [Math.min(...array), Math.max(...array)]
}
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("noDuplicate", () => {
    let testArray1 = [3, 7, 10, 5, 4, 3, 3]
    let testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {

        //an expect method, nested within the test block, calling on the noDuplicate() function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(noDuplicate(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})
// -- Got the red --  
// b) Create the function that makes the test pass.
// function noDuplicate(array1, array2) {
//     // declare the array and use spread operator to conbine the arrays and use [...new Set []] to take out the duplicate values
//     let newArray =  [...new Set([...array1, ...array2])]
//     //return newArray 
//     return newArray
// }
// -- Refactor --  
function noDuplicate(array1, array2) {
    
    return newArray =  [...new Set([...array1, ...array2])]
}