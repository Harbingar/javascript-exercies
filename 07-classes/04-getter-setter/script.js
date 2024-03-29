/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person{
        
        constructor(firstname, lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name(){
            return `${this.firstname} ${this.lastname}`;
        }

        set name(fullname){
            const parts = fullname.split(" ");
            if(parts.length === 2){
                this.firstname = parts[0];
                this.lastname = parts[1];
            }
        }

    }

    document.getElementById("run").addEventListener("click", () => {

        const personne = new Person("Tom", "Blue");

        console.log(personne.name);
        personne.name = "Grim Flop";
        console.log(personne);
    });
})();
