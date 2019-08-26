/// <reference path="gameobject.ts" />

class Gandalf extends GameObject {
    behaviour: Behaviour;
    public callback:EventListener;
    tag:string;

    xTarget:number;
    yTarget:number;
    
    constructor() {
        super()

        this.width = 67;
        this.height = 119;
        this.x = Math.random() * (window.innerWidth - 67);
        this.y = Math.random() * (window.innerHeight - 110);

        // this.behaviour = new Driving(this)
        this.tag = "gandalf";
        this.style.backgroundImage = "url(images/"+this.tag+"_hungry.png)";
        this.callback = (e:Event) => this.onClick(e);
    }

    public update(){
        this.behaviour.update()
        this.x += this.behaviour.speedx

        super.update()
    }

    public onClick(e:Event):void {
        console.log(e,"je klikt op gandalf. de listener wordt nu verwijderd.");
        this.style.cursor =  "auto";
        this.removeEventListener("click", this.callback);
    }

    // private keydown(event:KeyboardEvent)
    // {
    //     switch(event.key){
    //         case 'ArrowDown':
    //             this.behaviour = new Braking(this)
    //             break
    //         case 'ArrowUp':
    //             this.behaviour = new Driving(this)
    //             break
    //     }
    // }

    public setTarget(){
        this.xTarget = Math.random() * (window.innerWidth-80);
        this.yTarget = Math.random() * (window.innerHeight-120);
    }
}

window.customElements.define("gandalf-component", Gandalf)