/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const validity = document.getElementById("validity");

    document.getElementById("pass-one").addEventListener("input", () => {
        const input = document.getElementById("pass-one").value;
    
        if (input.length >= 8 && input.match(/\d/g).length >= 2) {
            validity.textContent = "ok";
        }
        else {
            validity.textContent = "Pas ok";
        }
    });
})();
