class Hungry implements Behaviour {
    speedx:number
    speedy:number
    gandalf:Gandalf

    constructor(g:Gandalf){
        this.gandalf = g 
    }

    public update():void {
        this.gandalf.x += this.speedx;
        this.gandalf.y += this.speedy;
        let xdistance = this.gandalf.xTarget - this.gandalf.x;
        let ydistance = this.gandalf.yTarget - this.gandalf.y;
        if(xdistance < 4 && ydistance < 4) this.gandalf.setTarget();
        Util.setSpeed(this.gandalf, xdistance, ydistance);
    }
   }