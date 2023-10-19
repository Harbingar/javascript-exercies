/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const source = document.getElementById("source");
    const target = document.getElementById("target");

    const dataImg = source.getAttribute("data-image");
    const createImg = document.createElement("img");

    createImg.setAttribute("src", dataImg);

    target.appendChild(createImg);
    source.remove();
})();
