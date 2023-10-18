/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let color = Math.floor(Math.random()*16777215).toString(16); // retourne un entier positif aléatoire en base 16 (Hexadécimal).
        document.body.style.backgroundColor = "#" + color; // Ajoute un # pour générer le code couleur aléatoire donné par la variable color.
    });
})();
