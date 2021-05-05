// # Nests

// #### 1. 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.

// ```javascript
// let board = [
//   [1, 2, 3],
//   ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
//   [true, false]
// ];
// ```

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];

for (let i in board) {
  for (let j in board[i]) {
    console.log(board[i][j]);
  }
}

console.log(
  board[0][0],
  board[0][1],
  board[0][2],
  board[1][0],
  board[1][1],
  board[1][2],
  board[1][3],
  board[1][4],
  board[1][5],
  board[1][6],
  board[2][0],
  board[2][1]
);

// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// * 2.3 Access the second element of the doggo's favorite foods.
// * 2.4 Add a method that loops through and print all the doggo's favorite food.

let doggo = {
  name: "Doggo",
  breed: "dog",
};

doggo.favouredFood = ["Salami", "Whiskas"];

console.log(doggo.favouredFood[1]);
console.log(doggo.favouredFood);

// #### 3.
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties
// butter, sugar, flour etc. Each property should have a string as its value.
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`.
// * 3.4 Change the ingredient `sugar` to `brown sugar`.
// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.

let recipes = {
  ingredients: {
    butter: "5gr",
    sugar: "1 spoon",
    flour: "250gr",
    salt: "Only a little bit of salt",
  },
};

recipes.ingredients.ginger = "1 tuber";
recipes.ingredients.sugar = "1 spoon brown sugar";
console.log(recipes.ingredients);
console.log(Object.values(recipes.ingredients));

console.log(Object.keys(recipes.ingredients));
delete recipes.ingredients.sugar;
recipes.ingredients.brownSugar = "Only a little bit of sugar";

console.log(recipes.ingredients);
