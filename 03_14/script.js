/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Book from "./Book.js";
import Backpack from "./Backpack.js";

const books = new Array();
books.push(new Book("foo", "bar", "my tribbles", "New York", 1993, 224));
books.push(new Book("foo", "bar", "my tribbles", "New York", 1993, 224));
books.push(new Book("foo", "bar", "my tribbles", "New York", 1993, 224));
books.push(new Book("foo", "bar", "my tribbles", "New York", 1993, 224));
books.push(new Book("foo", "bar", "my tribbles", "New York", 1993, 224));

// books.forEach((element) => console.log(element.citation));
//console.log(((Book)books[0]).citation());
console.log(books[0].citationString());

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
