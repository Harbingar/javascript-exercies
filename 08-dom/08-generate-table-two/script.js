/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const target = document.getElementById("target");
    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");

    for(let i=1; i<11; i++){
        const row = document.createElement("tr");
        for(let j =1; j<11; j++){
            const cell = document.createElement("td");
            cell.textContent =i*j;
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    target.appendChild(table);
})();
