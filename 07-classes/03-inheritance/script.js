/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    (() => {
        class Animal {
            constructor(name) {
                this.name = name;
            }
    
            sayHello() {
                return `${this.constructor.greeting}! I'm ${this.name}!`;
            }
        }
        // Extention de la class Animal avec l'attribut greeting spécifique à la classe Cat
        class Cat extends Animal {
            static greeting = "meow";
        }
        // Extention de la class Animal avec l'attribut greeting spécifique à la classe Dog
        class Dog extends Animal {
            static greeting = "woof";
        }
    
        document.getElementById("run").addEventListener("click", () => {
            const cat = new Cat("Chat");
            const dog = new Dog("Chien");
    
            console.log(cat.sayHello());
            console.log(dog.sayHello());
        });
    })();
})();
