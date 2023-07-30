/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

console.log(backpackContents);

let foobar = backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});
console.log(foobar);

let newContents = backpackContents.map((item) => "<li>" + item + "</li>");
console.log(newContents);

// let longItems = backpackContents.find(function (item) {
//   if (item.length >= 5) {
//     return item;
//   }
// });
// console.log("longItems:", longItems);
