/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,

  printAd(topping){
    if (this.pizzaToppings.hasOwnProperty(topping)) {
      const price = this.pizzaToppings[topping];
      return `Welcome to Papa John's! We are located at ${this.address}. 
      This week, we are having a sale on ${topping} for $${price}. Better Ingredients. Better Pizza. Papa John's.`;   
  } elce 
    return `Sorry, we don't have ${topping} as a topping.`; 
  }
  };
console.log(papaJohns.printAd("bacon"));

// DO NOT EDIT THE ABOVE OBJECT // 

//to make this display values just change the "object.keys to .values"


/*function grabCategories(obj) {
  return Object.keys(obj);
}
const categories = grabCategories(papaJohns);
console.log(categories);
*/



/*function verifyValues(obj) {
 if (Object.keys(obj).length === 9) {
  return true;
 }
 return false;
  
}
const count = verifyValues(papaJohns);
console.log(count);
*/

/*
function getToppingsInfo(papaJohns) {
  const pizzaToppings = papaJohns.pizzaToppings;
}

const toppingsInfo = [];

for (const topping in  papaJohns.pizzaToppings) {
  if (papaJohns.pizzaToppings.hasOwnProperty(topping)) {
    toppingsInfo.push([topping,  papaJohns.pizzaToppings[topping]])
  }
}

console.log(toppingsInfo);

*/