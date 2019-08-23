"use strict";
var Car = (function () {
    function Car() {
        var _this = this;
        this.positionX = 0;
        this.positiionY = 0;
        this.scale = 0.5;
        this.element = document.createElement('car');
        document.body.appendChild(this.element);
        this.behaviour = new Driving(this);
        window.addEventListener("keydown", function (e) { return _this.keydown(e); });
    }
    Car.prototype.update = function () {
        this.updatePosition();
    };
    Car.prototype.updatePosition = function () {
        this.positionX += this.behaviour.speed;
        this.behaviour.update();
        this.element.style.transform = "translateX(" + this.positionX + "px) scale(" + this.scale + ")";
    };
    Car.prototype.keydown = function (event) {
        switch (event.key) {
            case 'ArrowDown':
                this.behaviour = new Braking(this);
                break;
            case 'ArrowUp':
                this.behaviour = new Driving(this);
                break;
        }
    };
    return Car;
}());
var Game = (function () {
    function Game() {
        var car = new Car();
        this.gameLoop(car);
    }
    Game.prototype.gameLoop = function (car) {
        var _this = this;
        car.update();
        requestAnimationFrame(function () { return _this.gameLoop(car); });
    };
    Game.getInstance = function () {
        return this.instance || (this.instance = new Game());
    };
    return Game;
}());
window.addEventListener("load", function () {
    Game.getInstance();
});
var Braking = (function () {
    function Braking(c) {
        this.speed = 5;
        this.car = c;
    }
    Braking.prototype.update = function () {
        this.speed -= 0.2;
        if (this.speed < 0) {
            this.car.behaviour = new Idle(this.car);
        }
    };
    return Braking;
}());
var Driving = (function () {
    function Driving(c) {
        this.speed = 5;
        this.car = c;
    }
    Driving.prototype.update = function () {
        if (this.car.positionX >= window.innerWidth) {
            this.speed *= -1;
        }
        if (this.car.positionX <= 0) {
            this.speed *= -1;
        }
    };
    return Driving;
}());
var Idle = (function () {
    function Idle(c) {
        this.speed = 0;
        this.car = c;
    }
    Idle.prototype.update = function () {
        console.log('car is now idle', this.speed);
    };
    return Idle;
}());
//# sourceMappingURL=main.js.map