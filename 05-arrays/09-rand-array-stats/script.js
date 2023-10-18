/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let tab = [];
        for(let i=0; i<10; i++){
            tab[i] = Math.floor(Math.random() * 100) + 1
            document.getElementById(`n-${i + 1}`).textContent = tab[i];
        }
        let sum =0;
        for(let i=0; i<tab.length; i++){
            sum = sum+ tab[i];
        }
        const min = Math.min(...tab);
        const max = Math.max(...tab);
        const moyenne = sum/tab.length;
        
        document.getElementById("min").textContent = min;
        document.getElementById("max").textContent = max;
        document.getElementById("sum").textContent = sum;
        document.getElementById("average").textContent = moyenne;
    });

})();
