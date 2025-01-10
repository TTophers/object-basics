/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //




const sweetTomatoes = {
  name: "Sweet Tomatoes",
  cuisines: "All You Can Eat",
  starRating: "4.7",
  address: "1234 E. Applewood Cir.",
  zipcode: "80016",
  Reservations: "true"
};


function updateRestaurantInfo(updates) {
  Object.keys(updates).forEach(key => {
    if (sweetTomatoes.hasOwnProperty(key)) {
      sweetTomatoes[key] = updates[key];
    }
  });
}


updateRestaurantInfo({
  starRating: "4.9",
  address: "5678 W. Cherry Lane",
  Reservations: "false"
});

console.log(sweetTomatoes)

