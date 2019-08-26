class Leaving implements Behaviour {
    speedx:number
    speedy:number
    gandalf:Gandalf


    constructor(g:Gandalf){
        this.gandalf = g
        this.gandalf.style.backgroundImage = "url(images/"+this.gandalf.tag+"_leaving.png)";
        this.gandalf.style.cursor =  "auto";
        this.gandalf.xTarget = Math.random() * window.innerWidth;
        this.gandalf.yTarget = window.innerHeight + 300;
        this.gandalf.speedmultiplier += 1;
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