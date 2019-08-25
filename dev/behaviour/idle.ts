class Idle implements Behaviour {
    speedx: number = 0;
    car:Car;

    constructor(c:Car){
        this.car = c
    }

    public update() {
        console.log('car is now idle')
    }
   }