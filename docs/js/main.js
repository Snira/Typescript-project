"use strict";
class GameObject extends HTMLElement {
    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.xspeed = 0;
        this.yspeed = 0;
        this.speedmultiplier = 1;
        this.direction = 1;
        document.body.appendChild(this);
    }
    update() {
        this.direction = (this.xspeed < 0) ? 1 : -1;
        this.style.transform = "translate(" + this.x + "px, " + this.y + "px) scale(" + this.direction + ",1)";
    }
}
class Car extends GameObject {
    constructor() {
        super();
        this.width = 300;
        this.height = 160;
        this.x = Math.random() * (window.innerWidth - 67);
        this.y = Math.random() * (window.innerHeight / 2) + (window.innerHeight / 2 - 67);
        this.behaviour = new Driving(this);
        window.addEventListener("keydown", (e) => this.keydown(e));
    }
    update() {
        this.behaviour.update();
        this.x += this.behaviour.speedx;
        super.update();
    }
    keydown(event) {
        switch (event.key) {
            case 'ArrowDown':
                this.behaviour = new Braking(this);
                break;
            case 'ArrowUp':
                this.behaviour = new Driving(this);
                break;
        }
    }
}
window.customElements.define("car-component", Car);
class Game {
    constructor() {
        this.score = 0;
        this.gameOver = false;
        this.view = new StartView(this);
        this.gameLoop();
    }
    gameLoop() {
        this.view.update();
        if (!this.gameOver) {
            requestAnimationFrame(() => this.gameLoop());
        }
        else {
            this.view = new GameOverView(this);
        }
    }
    showPlayView(e) {
        if (e.keyCode === 82) {
            document.body.innerHTML = '';
            this.setView();
        }
    }
    setView() {
        if (this.view instanceof StartView) {
            this.view = new PlayView();
        }
    }
    static getInstance() {
        return this.instance || (this.instance = new Game());
    }
}
window.addEventListener("load", () => {
    Game.getInstance();
});
class Util {
    static checkCollision(go1, go2) {
        return (go1.x < go2.x + go2.width &&
            go1.x + go1.width > go2.x &&
            go1.y < go2.y + go2.height &&
            go1.height + go1.y > go2.y);
    }
}
class Braking {
    constructor(c) {
        this.speedx = 5;
        this.car = c;
    }
    update() {
        this.speedx -= 0.2;
        if (this.speedx < 0) {
            this.car.behaviour = new Idle(this.car);
        }
    }
}
class Driving {
    constructor(c) {
        this.speedx = 5;
        this.car = c;
    }
    update() {
        if (this.car.x >= window.innerWidth) {
            this.speedx *= -1;
        }
        if (this.car.x <= 0) {
            this.speedx *= -1;
        }
    }
}
class Idle {
    constructor(c) {
        this.speedx = 0;
        this.car = c;
    }
    update() {
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
        this.gameObjects.push(new Car(), new Car());
    }
    update() {
        for (let go of this.gameObjects) {
            go.update();
            if (Util.checkCollision(this.gameObjects[0], this.gameObjects[1])) {
                Game.getInstance().gameOver = true;
                go.remove();
            }
        }
    }
}
class StartView {
    constructor(game) {
        document.body.innerHTML = 'Klik R om het spel te starten';
        window.addEventListener("keydown", (e) => game.showPlayView(e));
    }
    update() {
    }
}
//# sourceMappingURL=main.js.map