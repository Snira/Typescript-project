class Driving implements Behaviour {
    speed:number = 5;
    car:Car;

    constructor(c:Car){
        this.car = c
    }

    public update() {
        if(this.car.positionX >= window.innerWidth){
            this.speed *= -1
        }
        if(this.car.positionX <= 0){
            this.speed *= -1
        }
    }
   }