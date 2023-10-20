/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const text = target.textContent; // Récupère le texte d'origine

    // Crée un tableau de tailles de texte
    const textSizes = ["20px", "25px", "30px", "35px", "40px"];

    // Crée un élément de résultat vide
    const result = document.createElement("span");

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const span = document.createElement("span");

        // Affecte une taille de texte en fonction de l'index dans textSizes
        span.style.fontSize = textSizes[i % textSizes.length];

        // Ajoute le caractère au span
        span.textContent = char;

        // Ajoute le span au résultat
        result.appendChild(span);
    }

    // Remplace le contenu de la balise cible par le résultat
    document.getElementById('target').innerHTML = '';
    document.getElementById('target').appendChild(result);
})();
