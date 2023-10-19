/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

        const hour = new Date().getHours();
        const minutes = new Date().getMinutes();
        const day = new Date().getDay();
        const date = new Date().getDate();
        const month = new Date().getMonth() +1;
        const year = new Date().getFullYear();

        let dayInLetter ="";
        let monthInLetter ="";

        switch(month){
            case 1:
                monthInLetter = "janvier";
                break;
            case 2:
                monthInLetter = "février";
                break;
            case 3:
                monthInLetter = "mars";
                break;
            case 4:
                monthInLetter = "avril";
                break;
            case 5:
                monthInLetter = "mai";
                break;
            case 6:
                monthInLetter = "juin";
                break;
            case 7:
                monthInLetter = "juillet";
                break;
            case 8:
                monthInLetter = "août";
                break;
            case 9:
                monthInLetter = "septembre";
                break;
            case 10:
                monthInLetter = "octobre";
                break;
            case 11:
                monthInLetter = "novembre";
                break;
            case 12:
                monthInLetter = "décembre";
                break;
        }
        switch(day){
            case 1:
                dayInLetter = "lundi";
                break;
            case 2:
                dayInLetter = "mardi";
                break;
            case 3:
                dayInLetter = "mercredi";
                break;
            case 4:
                dayInLetter = "jeudi";
                break;
            case 5:
                dayInLetter = "vendredi";
                break;
            case 6:
                dayInLetter = "samedi";
                break;
            case 7:
                dayInLetter = "dimanche";
                break;
        }
        
        document.getElementById("target").innerHTML = dayInLetter + " " + date + " " + monthInLetter + " " + year + ", " + hour+"h"+minutes;
        
})();
