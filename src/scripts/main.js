// Chicken Monkey
// for multiples of 5, print "chicken" instead of the number,
// for multiples of 7 print "monkey"
// for both multiples of 5 and 7 print "chicken monkey"

for (let i = 1; i <= 100; i++) {

    if (i % 5 === 0 && i % 7 === 0) {
        console.log(i + ": chicken monkey");
    } else if (i % 5 === 0) {
        console.log(i + ": chicken");
    } else if (i % 7 === 0) {
        console.log(i + ": monkey");
    }

}

/* Take a Number - Battle of the Bands
 -write a function that accepts any band name as an argument
 -increment a global variable by one each time it is invoked
 -return that number, and the band name concatenated together.
*/

let count = 1;

let takeNumber = (band) => {
    console.log(`${count}. ${band}`);
    count++;
}

takeNumber('Rage');
takeNumber('Bassnectar');
takeNumber('Skrillex');

const hamburger = {
    name: 'Hamburger',
    type: 'beef',
    cooked: false,
}
const zucchini = {
    name: 'Zucchini',
    type: 'vegetable',
    cooked: false,
}
const chickenBreast = {
    name: 'Chicken Breast',
    type: 'chicken',
    cooked: false,
}
const corn = {
    name: 'Corn',
    type: 'vegetable',
    cooked: false,
}
const steak = {
    name: 'Steak',
    type: 'beef',
    cooked: false,
}
/*
    Cookout
 -iterate over the array of foods
 -invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.
*/
// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill(currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

for(let i = 0; i < foods.length; i++){
    grill(foods[i]);
}

console.log(cookedFood);
