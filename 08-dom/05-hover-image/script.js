/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const image = document.querySelector("img");
    const dataHover = image.getAttribute("data-hover");

    image.addEventListener("mouseover", () => {
        image.src = dataHover;
    });

    // Changer à volonter en passant par dessus l'image :

    image.addEventListener("mouseout", () => {
        image.src = "../../_shared/img/kiss.svg";
    });
})();
