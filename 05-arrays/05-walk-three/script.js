/* becode/javascript
 *
 * /05-arrays/05-walk-three/script.js - 5.5: parcours de tableau (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// People is an array of Object
// To know a little bit more about Object (https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Working_with_Objects)

(() => {
    const people = [
        {
            firstname: "Garald",
            lastname: "Freschi",
            email: "gfreschi0@discuz.net",
        },
        {
            firstname: "Bendicty",
            lastname: "Foster-Smith",
            email: "bfostersmith1@mysql.com",
        },
        {
            firstname: "Michelle",
            lastname: "Draude",
            email: "mdraude2@csmonitor.com",
        },
        {
            firstname: "Cathee",
            lastname: "Meineck",
            email: "cmeineck3@t-online.de",
        },
        {
            firstname: "Marianna",
            lastname: "Coal",
            email: "mcoal4@creativecommons.org",
        },
    ];
    people.forEach((identity) => {
        console.log(identity.lastname);
    });
    // your code here
})();
