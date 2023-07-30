/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const updateDesk = (update) => {
  let main = document.querySelector("main");
  main.innerHTML = markup(desk);
  console.info(update);
};

const pen = {
  type: "fountain",
  color: "silver",
  hasInk: true,
};

const cup = {
  type: "mug",
  color: "beige",
  needsRefill: true,
  toggleRefill: function (refillStatus) {
    this.needsRefill = refillStatus;
    updateDesk("Changed cup status.");
  },
};

const desk = {
  name: "typing desk",
  contents: [cup, pen],
  addContent: function (content) {
    this.contents.push(content);
    updateDesk("Added content to desk:");
  },
  toString: function () {
    return "this is my desk, there are many like it...\r";
  },
};

console.log("Here's yr desk:\r", desk.contents);

const markup = (desk) => {
  return `
    <div>
      <h3>Your desk: ${desk.toString()}</h3>
      <ul>
    
      </ul>
    </div>
  `;
};

const main = document.createElement("main");
main.innerHTML = markup(desk);
document.body.appendChild(main);
