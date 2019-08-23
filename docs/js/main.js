"use strict";
var Canvas = (function () {
    function Canvas() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
    }
    return Canvas;
}());
var Car = (function () {
    function Car() {
        this.positionX = 0;
        this.positiionY = 0;
        this.element = document.createElement('car');
        this.element.innerHTML = 'Dit is een test';
        document.body.appendChild(this.element);
        this.behaviour = new Driving(this);
    }
    Car.prototype.update = function () {
        this.behaviour.update();
        console.log('moving', this.positionX);
        this.positionX++;
        this.element.style.transform = "translateX(" + this.positionX + "px)";
    };
    Car.prototype.stop = function () {
        this.behaviour = new Idle(this);
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
        console.log('init');
        return this.instance || (this.instance = new Game());
    };
    return Game;
}());
window.addEventListener("load", function () {
    Game.getInstance();
});
var Braking = (function () {
    function Braking(c) {
        this.speed = 0;
        this.car = c;
    }
    Braking.prototype.update = function () {
        this.speed--;
        console.log('braking', this.speed);
        if (this.speed < 0) {
            this.car.behaviour = new Idle(this.car);
        }
    };
    return Braking;
}());
var Driving = (function () {
    function Driving(c) {
        this.speed = 100;
        this.car = c;
    }
    Driving.prototype.update = function () {
        this.car.positionX++;
        console.log('driving', this.speed);
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