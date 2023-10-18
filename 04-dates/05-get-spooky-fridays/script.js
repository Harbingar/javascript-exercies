/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const yearInput = document.getElementById("year").value;
        const year = parseInt(yearInput);

        let spookyMonths = [];

        for (let month = 0; month < 12; month++) {
            const date = new Date(year, month, 13);
            if (date.getDay() === 5) {
                spookyMonths.push(date.toLocaleString("fr-FR", { month: "long" }));
            }
        }
        
        if (spookyMonths.length > 0) {
            alert("Il y a " + spookyMonths + " qui contiennent un vendredi 13 cette année là ("+yearInput+")");
        } else {
            alert("Il n'y a aucun vendredi 13 cette année là ("+yearInput+")");
        }
    });
})();
