class Driving implements Behaviour {
    speedx:number = 5;
    car:Car;

    constructor(c:Car){
        this.car = c
    }

    public update() {
        if(this.car.x >= window.innerWidth){
            this.speedx *= -1
        }
        if(this.car.y <= 0){
            this.speedx *= -1
        }
    }
   }