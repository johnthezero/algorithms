/* Exercise.
You will be given an array of drinks, with each drink being an object with two properties: name and price. 
Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:

drinks = [
  {name: "lemonade", price: 10},
  {name: "lime", price: 10}
  {name: "coke", price: 8}
  {name: "vodka", price: 17}
  {name: "water", price: 3}
]
Expected results
The output of the sorted drinks object will be:

sortDrinkByPrice(drinks) ➞ [
    {name: "water", price: 3},
    {name: "coke", price: 8},
    {name: "lemonade", price: 10 },
    {name: "lime" , price: 10},
    {name: "vodka", price: 17},
] */

drinks = [
  {name: "lemonade", price: 10},
  {name: "lime", price: 10},
  {name: "coke", price: 8},
  {name: "vodka", price: 17},
  {name: "water", price: 3},
];
function sortDrinkByPrice(drinks){
    const filteredDrinks= drinks.sort((d1,d2)=>(d1.price>d2.price)? 1 : (d1.price<d2.price) ? -1 : 0);
}
sortDrinkByPrice(drinks);
console.log(drinks);
