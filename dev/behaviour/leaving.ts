class Leaving implements Behaviour {
    speedx:number
    speedy:number
    gandalf:Gandalf


    constructor(g:Gandalf){
        this.gandalf = g
    }

    public update():void {
        this.gandalf.x += this.gandalf.xspeed;
        this.gandalf.y += this.gandalf.yspeed;
        let xdistance = this.gandalf.xTarget - this.gandalf.x;
        let ydistance = this.gandalf.yTarget - this.gandalf.y;
        if(xdistance < 4 && ydistance < 4) {
            console.log("het karakter is uit beeld");
        }
        Util.setSpeed(this.gandalf, xdistance, ydistance);
    }
   }