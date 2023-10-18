/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var i =0;
    while(i == 0){
        var age = prompt("Quel est ton âge ?");
        var sexe = prompt("Quel est ton sexe ?");
        var ville = prompt("Quel est ta ville ?");
        var confirm = prompt("Tu as " + age + " ans, tu es de sexe " + sexe + " et ta ville est " + ville + " confirmes tu ?");
        if (confirm == 'oui'){
            i =1;
        }
        else{
            i=0;
        }
    }

})();
