function Widget(colour, size) {
  this.colour = colour;
  this.size = size;
}
var widgets = [
  new Widget("red", 1),
  new Widget("blue", 2),
  new Widget("red", 2),
  new Widget("yellow", 3),
  new Widget("red", 4),
  new Widget("blue", 1),
  new Widget("red", 3),
];

// filter produces a new array of widget objects based on their colour attribute
// map takes only those red widgets and produces an array of sizes - the object structure is lost by this point
const sizeOfLargestRedWidget = widgets
  .filter((w) => w.colour === "red")
  .map((w) => w.size)
  .reduce((prev, curr) => (curr > prev ? curr : prev));
console.log(sizeOfLargestRedWidget);

{
  //ALTERNATIVE REDUCER LOGIC
  //   if (curr > prev) {
  //     return curr;
  //   } else {
  //     return prev;
  //   }
}
