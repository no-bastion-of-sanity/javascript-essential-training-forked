/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
let greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
};

const createArticle = () => document.createElement("article");

// how about a helper func to assemble the html?
const stirInGuts = (pack) => {
  return `
    <h1>${pack.name}</h1>
  <ul>
    <li>Volume: ${pack.volume}</li>
    <li>Color: ${pack.color}</li>
    <li>Number of pockets: ${pack.pocketNum}</li>
  </ul>
  `;
};

// basic function declaration
function declMakeArticleForPack(pack) {
  let article = createArticle();
  article.innerHTML = stirInGuts(pack) + `Func: decl`;
  return article;
}

// function expression
const exprMakeArticleForPack = (pack) => {
  let article = createArticle();
  article.innerHTML = stirInGuts(pack) + `Func: expr`;
  return article;
};

// // arrow function
// (pack) => {
//   let article = createArticle();
//   article.innerHTML = stirInGuts(pack);
//   return article;
// };

const main = document.querySelector("main");
main.append(declMakeArticleForPack(greenPack));
main.append(exprMakeArticleForPack(greenPack));
// never do this. But note, the entire anon func is wrapped
// in parens. THEN a separate parens holds the param.
main.append(
  ((zParm) => {
    let article = createArticle();
    article.innerHTML = stirInGuts(greenPack) + `Func: Anon`; // note: this is in scope
    console.log(zParm);
    return article;
  })("this is a useless param")
);
