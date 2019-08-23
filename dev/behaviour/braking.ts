class Braking implements Behaviour{
    speed: number = 5;
    car:Car;

    constructor(c:Car){
        this.car = c
    }

    public update() {
        this.speed -= 0.2
        if(this.speed < 0){
            this.car.behaviour = new Idle(this.car)
        } 
    }
}