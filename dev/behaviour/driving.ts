class Driving implements Behaviour {
    speedx:number = 5;
    car:Car;

    constructor(c:Car){
        this.car = c
    }

    public update():void {
        console.log(this.car.x)
        if(this.car.x >= window.innerWidth){
            this.speedx *= -1
        }
        if(this.car.x <= 0){
            this.speedx *= -1
        }
    }
   }