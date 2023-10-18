/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    //const target = document.getElementById("target");
    //const runButton = document.getElementById("run");

    document.getElementById("run").addEventListener("click", () => {
        const randomBird = birds[Math.floor(Math.random() * birds.length)];

        let adjectivesArray = Array.from(adjectives);
        let randomAdjective = adjectivesArray[Math.floor(Math.random() * adjectivesArray.length)];

        let birdName;
        if (randomBird.fem) {
            birdName = "La " + randomBird.name;
            randomAdjective = randomAdjective+ "e";
        } else {
            birdName = "Le " + randomBird.name;
        }

        document.getElementById("target").textContent = birdName + " " + randomAdjective;
    });
})();
