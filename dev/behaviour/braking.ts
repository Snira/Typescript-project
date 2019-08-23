class Braking implements Behaviour{
    speed: number = 0;
    car:Car;

    constructor(c:Car){
        this.car = c
    }

    public update() {
        this.speed--
        console.log('braking', this.speed)

        if(this.speed < 0){
            this.car.behaviour = new Idle(this.car)
        } 
    }
}