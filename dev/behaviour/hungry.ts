class Hungry implements Behaviour {
    speedx:number
    speedy:number
    gandalf:Gandalf

    constructor(g:Gandalf){
        this.gandalf = g
        this.gandalf.style.backgroundImage = "url(images/"+this.gandalf.tag+"_hungry.png)";
        this.gandalf.style.cursor =  "auto";
        this.gandalf.setTarget();
    }

    public update():void {
        this.gandalf.x += this.gandalf.xspeed;
        this.gandalf.y += this.gandalf.yspeed;
        let xdistance = this.gandalf.xTarget - this.gandalf.x;
        let ydistance = this.gandalf.yTarget - this.gandalf.y;
        if(xdistance < 4 && ydistance < 4) this.gandalf.setTarget();
        Util.setSpeed(this.gandalf, xdistance, ydistance);
    }
   }