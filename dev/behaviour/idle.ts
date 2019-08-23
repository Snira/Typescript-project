class Idle implements Behaviour {
    speed: number = 0;
    car:Car;

    constructor(c:Car){
        this.car = c
    }

    public update() {
        console.log('car is now idle', this.speed)
    }
   }