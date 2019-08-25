class Braking implements Behaviour{
    speedx: number = 5;
    car:Car;

    constructor(c:Car){
        this.car = c
    }

    public update():void {
        this.speedx -= 0.2
        if(this.speedx < 0){
            this.car.behaviour = new Idle(this.car)
        } 
    }
}