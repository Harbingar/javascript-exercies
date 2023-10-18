/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const day = document.getElementById("dob-day").value;
        const month = document.getElementById("dob-month").value;
        const year = document.getElementById("dob-year").value;

        const NowDay = new Date().getDate();
        const NowMonth = new Date().getMonth() +1;
        const NowYear = new Date().getFullYear();


        let age = NowYear - year;

        if(NowMonth < month || (NowMonth == month && NowDay < day)){
            age--;
        }
        alert("Vous avez " + age + " ans");
    });
})();
