"use strict";
class Breakfast extends HTMLElement {
    constructor() {
        super();
        this.counter = 0;
        this.observers = [];
        this.bar = document.getElementsByTagName("bar")[0];
        this.button = document.getElementsByTagName("foodbutton")[0];
        this.button.style.cursor = "auto";
        this.callback = (e) => this.onClick(e);
    }
    update() {
        this.counter = Math.min(1, this.counter + 0.003);
        this.bar.style.width = (143 * this.counter) + "px";
        if (this.counter >= 1) {
            this.button.classList.add("blinking");
            this.button.addEventListener("click", this.callback);
            this.button.style.cursor = "pointer";
        }
    }
    onClick(e) {
        this.counter = 0;
        this.button.removeEventListener("click", this.callback);
        this.button.classList.remove("blinking");
        this.button.style.cursor = "auto";
        for (let o of this.observers) {
            o.notify(this);
        }
    }
    subscribe(o) {
        console.log('subscribed een gandalf');
        this.observers.push(o);
    }
    unsubscribe(o) {
        console.log('unsubscribed een gandalf');
        let index = this.observers.indexOf(o, 0);
        this.observers.splice(index, 1);
    }
}
window.customElements.define("breakfast-component", Breakfast);
class Card extends HTMLElement {
    constructor(x) {
        super();
        this.style.left = x + "px";
    }
}
window.customElements.define("card-component", Card);
class Game {
    constructor() {
        this.score = 0;
        this.gameOver = false;
        this.view = new StartView(this);
        this.gameLoop();
    }
    gameLoop() {
        this.view.update();
        if (this.score > 20) {
            this.gameOver = true;
        }
        if (!this.gameOver) {
            requestAnimationFrame(() => this.gameLoop());
        }
        else {
            this.view = new GameOverView(this);
        }
    }
    showPlayView(e, view) {
        if (e.code === "KeyR") {
            window.removeEventListener("keydown", view.callback);
            this.setView();
        }
    }
    setView() {
        if (this.view instanceof StartView) {
            this.view = new PlayView();
        }
    }
    removeObject(ob) {
        ob.remove();
    }
    static getInstance() {
        return this.instance || (this.instance = new Game());
    }
}
window.addEventListener("load", () => {
    Game.getInstance();
});
class GameObject extends HTMLElement {
    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.xspeed = 0;
        this.yspeed = 0;
        this.speedmultiplier = 1;
        this.direction = 1;
        this.x = Math.random() * (window.innerWidth - 67);
        this.y = Math.random() * (window.innerHeight - 110);
        document.body.appendChild(this);
    }
    update() {
        this.direction = (this.xspeed < 0) ? 1 : -1;
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px) scale(" + this.direction + ",1)";
    }
}
class Gandalf extends GameObject {
    constructor() {
        super();
        this.tag = "gandalf";
        this.style.backgroundImage = "url(images/" + this.tag + "_hungry.png)";
        let action = Math.random() < 0.5 ? 'hungry' : 'sleeping';
        this.setBehaviour(action);
        this.width = 67;
        this.height = 119;
        this.x = Math.random() * (window.innerWidth - 67);
        this.y = Math.random() * (window.innerHeight - 110);
        this.callback = (e) => this.onClick(e);
        this.addEventListener("click", this.callback);
    }
    update() {
        this.behaviour.update();
        super.update();
    }
    onClick(e) {
        console.log(e, "je klikt op gandalf. de listener wordt nu verwijderd.");
        this.setBehaviour('hungry');
        this.style.cursor = "auto";
        this.removeEventListener("click", this.callback);
    }
    setBehaviour(action) {
        switch (action) {
            case "hungry":
                this.behaviour = new Hungry(this);
                break;
            case "leaving":
                this.behaviour = new Leaving(this);
                break;
            case "sleeping":
                this.behaviour = new Sleeping(this);
                break;
        }
    }
    setTarget() {
        this.xTarget = Math.random() * (window.innerWidth - 80);
        this.yTarget = Math.random() * (window.innerHeight - 120);
    }
    notify(o) {
        if (this.behaviour instanceof Hungry) {
            this.setBehaviour('leaving');
            Game.getInstance().score++;
            o.unsubscribe(this);
        }
    }
}
window.customElements.define("gandalf-component", Gandalf);
class Ork extends GameObject {
    constructor() {
        super();
        this.facing = 1;
        this.tag = "ork";
        this.width = 67;
        this.height = 119;
        this.speedmultiplier = Math.random() + 1;
        this.style.backgroundImage = "url(images/" + this.tag + "_hungry.png)";
        this.style.cursor = "auto";
        this.setTarget();
    }
    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        let xdistance = this.xTarget - this.x;
        let ydistance = this.yTarget - this.y;
        if (xdistance < 4 && ydistance < 4)
            this.setTarget();
        this.setSpeed(xdistance, ydistance);
        this.facing = (this.xspeed > 0) ? -1 : 1;
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px) scale(" + this.facing + ",1)";
    }
    setTarget() {
        this.xTarget = Math.random() * (window.innerWidth - 80);
        this.yTarget = Math.random() * (window.innerHeight - 120);
    }
    setSpeed(xdist, ydist) {
        let distance = Math.sqrt(xdist * xdist + ydist * ydist);
        this.xspeed = xdist / distance;
        this.yspeed = ydist / distance;
        this.xspeed *= this.speedmultiplier;
        this.yspeed *= this.speedmultiplier;
    }
}
window.customElements.define("ork-component", Ork);
class Util {
    static setSpeed(go, xdist, ydist) {
        let distance = Math.sqrt(xdist * xdist + ydist * ydist);
        go.xspeed = xdist / distance;
        go.yspeed = ydist / distance;
        go.xspeed *= go.speedmultiplier;
        go.yspeed *= go.speedmultiplier;
    }
    static checkCollision(go1, go2) {
        return (go1.x < go2.x + go2.width &&
            go1.x + go1.width > go2.x &&
            go1.y < go2.y + go2.height &&
            go1.height + go1.y > go2.y);
    }
}
class Hungry {
    constructor(g) {
        this.gandalf = g;
        this.gandalf.style.backgroundImage = "url(images/" + this.gandalf.tag + "_hungry.png)";
        this.gandalf.style.cursor = "auto";
        this.gandalf.setTarget();
    }
    update() {
        this.gandalf.x += this.gandalf.xspeed;
        this.gandalf.y += this.gandalf.yspeed;
        let xdistance = this.gandalf.xTarget - this.gandalf.x;
        let ydistance = this.gandalf.yTarget - this.gandalf.y;
        if (xdistance < 4 && ydistance < 4)
            this.gandalf.setTarget();
        Util.setSpeed(this.gandalf, xdistance, ydistance);
    }
}
class Leaving {
    constructor(g) {
        this.gandalf = g;
        this.gandalf.style.backgroundImage = "url(images/" + this.gandalf.tag + "_leaving.png)";
        this.gandalf.style.cursor = "auto";
        this.gandalf.xTarget = Math.random() * window.innerWidth;
        this.gandalf.yTarget = window.innerHeight + 300;
        this.gandalf.speedmultiplier += 1;
    }
    update() {
        this.gandalf.x += this.gandalf.xspeed;
        this.gandalf.y += this.gandalf.yspeed;
        let xdistance = this.gandalf.xTarget - this.gandalf.x;
        let ydistance = this.gandalf.yTarget - this.gandalf.y;
        if (xdistance < 4 && ydistance < 4) {
            Game.getInstance().removeObject(this.gandalf);
        }
        Util.setSpeed(this.gandalf, xdistance, ydistance);
    }
}
class Sleeping {
    constructor(g) {
        this.gandalf = g;
        this.gandalf.style.backgroundImage = "url(images/" + this.gandalf.tag + "_sleep.png)";
        this.gandalf.style.cursor = "pointer";
        this.gandalf.addEventListener("click", this.gandalf.callback);
    }
    update() {
    }
}
class GandalfFactory {
    createObject() {
        return new Gandalf();
    }
}
class OrkFactory {
    createObject() {
        return new Ork();
    }
}
class GameOverView {
    constructor(game) {
        console.log('gameover', game);
        document.body.innerHTML = 'Gameover: Eindscore =' + game.score;
    }
    update() {
    }
}
class PlayView {
    constructor() {
        this.gameObjects = [];
        document.body.innerHTML = '<foodbutton></foodbutton><bar></bar><border></border><instructions></instructions>';
        this.breakfast = new Breakfast();
        this.addGandalfs(4);
        this.addOrks(3);
    }
    update() {
        for (let go of this.gameObjects) {
            this.breakfast.update();
            go.update();
        }
        console.log(this.breakfast.observers);
        if (this.breakfast.observers.length <= 2) {
            console.log('leeg');
            this.addGandalfs(Math.random() * 5 + 1);
        }
    }
    addGandalfs(amount) {
        let factory = new GandalfFactory();
        for (let i = 0; i < amount; i++) {
            let gandalf = factory.createObject();
            this.breakfast.subscribe(gandalf);
            this.gameObjects.push(gandalf);
        }
    }
    addOrks(amount) {
        let factory = new OrkFactory();
        for (let i = 0; i < amount; i++) {
            let ork = factory.createObject();
            this.gameObjects.push(ork);
        }
    }
}
class StartView {
    constructor(game) {
        document.body.innerHTML =
            '<p> Klik R om het spel te starten </p>';
        this.callback = (e) => game.showPlayView(e, this);
        window.addEventListener("keydown", this.callback);
    }
    update() {
    }
}
//# sourceMappingURL=main.js.map