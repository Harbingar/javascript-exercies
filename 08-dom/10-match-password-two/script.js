/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const passOneInput = document.getElementById("pass-one");
    const passTwoInput = document.getElementById("pass-two");

    document.getElementById("run").addEventListener("click", () => {
        const password1 = passOneInput.value;
        const password2 = passTwoInput.value;

        if (password1 == password2) {
            passOneInput.classList.remove('error');
            passTwoInput.classList.remove('error');
        }
        else {
            passOneInput.classList.add('error');
            passTwoInput.classList.add('error');
        }
    });
})();
