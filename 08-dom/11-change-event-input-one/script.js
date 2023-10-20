/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const counter = document.getElementById("counter");

    document.getElementById("pass-one").addEventListener("input", () => {
        const input = document.getElementById("pass-one").value;
        counter.textContent = input.length + "/10";

        if(input.length >= 10){
            document.getElementById("pass-one").value = input.slice(0, 10);
        }
    });
})();
