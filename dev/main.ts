/// <reference path="message.ts"/>

class Main {
    constructor() {
       let mOne:Message = new Message("Hello");
       let mTwo:Message = new Message("World");
    }
} 

// hier starten we de applicatie
window.addEventListener("load", function() {
    new Main();
});