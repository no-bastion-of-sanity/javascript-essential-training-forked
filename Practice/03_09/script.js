/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  changeColor: function (newColor) {
    this.color = newColor;
  },
  addPocket: function () {
    ++this.pocketnNum;
  },
  removePocket: function () {
    --this.pocketNum;
  },
  changeVolume: function (newVol) {
    this.volume = newVol;
  },
};

console.log("Pockets before: ", backpack.pocketNum);
console.log("Color Before: ", backpack.color);
backpack.changeColor("puce");
backpack.removePocket();
console.log("Pockets after: ", backpack.pocketNum);
console.log("Color after: ", backpack.color);
