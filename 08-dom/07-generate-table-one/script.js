/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
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
        const tr = document.createElement("tr"); // Crée une balise <tr>
        const td = document.createElement("td"); // Crée une balise <td>
        td.innerText = "Rangée : "+ i; // Ajoute la valeur dans la balise <td>
        tr.appendChild(td); // Donne la balise <td> comme enfant de la balise <tr>
        tableBody.appendChild(tr); // Donne la balise <tr> comme enfant de la balise <tbody>
    }
    table.appendChild(tableBody); // Ajoute la balise <tbody> chargée des 10 rangées dans le tableau
    target.appendChild(table); // Ajoute le tableau dans la balise <div>
})();
