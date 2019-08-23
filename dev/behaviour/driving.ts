class Driving implements Behaviour {
    speed:number = 100;
    car:Car;

    constructor(c:Car){
        this.car = c
    }

    public update() {
        this.car.positionX++
        console.log('driving', this.speed)
    }
   }