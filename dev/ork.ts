class Ork extends GameObject{
    public facing:number = 1;
    private tag:string;
        
    constructor() {
        super()

        this.tag = "ork";
        
        this.width = 67;
        this.height = 119;
        this.x = Math.random() * (window.innerWidth - 67);
        this.y = Math.random() * (window.innerHeight - 110);
        this.speedmultiplier = Math.random() + 1;

        this.style.backgroundImage = "url(images/"+this.tag+"_hungry.png)";
        this.style.cursor =  "auto";
        this.setTarget();
    }

     
    public update(){
        this.x += this.xspeed;
        this.y += this.yspeed;

        // als doel bereikt dan een nieuw doel
        let xdistance = this.xTarget - this.x;
        let ydistance = this.yTarget - this.y;

        if(xdistance < 4 && ydistance < 4) this.setTarget();

        this.setSpeed(xdistance, ydistance);

        this.facing = (this.xspeed > 0) ? -1 : 1;
        this.style.transform = "translate("+this.x+"px, "+this.y+"px) scale("+this.facing+",1)";
    }

    // een random plek in het scherm
    private setTarget(){
        this.xTarget = Math.random() * (window.innerWidth-80);
        this.yTarget = Math.random() * (window.innerHeight-120);
    }

    // snelheid uitrekenen
    private setSpeed(xdist:number, ydist:number):void {
        let distance:number = Math.sqrt(xdist * xdist + ydist * ydist);
        this.xspeed = xdist/distance;
        this.yspeed = ydist/distance;

        this.xspeed *= this.speedmultiplier;
        this.yspeed *= this.speedmultiplier;
    }

}

window.customElements.define("ork-component", Ork)