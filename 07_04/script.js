/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

//let mo = ["cat", "dog"];
//let ary = [1, 2, mo, "hurricane", 22, 34, "Caribbean Wind"];
//console.log(ary);
//ary.forEach((item) => console.log("type is: " + typeof item));
// remove last item
//let last = ary.pop();
//console.log("last elt is: " + last);
// move last item to first position
//ary.unshift(ary.pop());
//ary.forEach((item) => console.log("elt is: " + item));
// sort alphabetically
//ary.push(last);
//ary.push("mango", "Mango", 5, 7, 8, 1.4, "Astroboy");
let new_ary = [3, 2, 123, 45, 17, 7, 8];
/* new_ary.sort((a, b) => a - b);
new_ary.forEach((item) => console.log("elt is: " + item));
 */
new_ary.splice(
  new_ary.findIndex((item) => item == 123),
  1
);
new_ary.sort((a, b) => a - b);
new_ary.unshift(123);
new_ary.forEach((item) => console.log("elt is: " + item));
// find a specific item
//last = ary.find((elt) => typeof elt == "string");
//console.log("Found: " + last);
// remove a specific item
/* last = ary.remove(ary.find((elt) => typeof elt == "object"));
console.log("Removed: " + last);
 */
