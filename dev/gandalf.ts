/// <reference path="gameobject.ts" />

class Gandalf extends GameObject {
    behaviour: Behaviour;
    public callback:EventListener;
    tag:string;

    xTarget:number;
    yTarget:number;
    
    constructor() {
        super()

        this.behaviour = new Sleeping(this)
        this.width = 67;
        this.height = 119;
        this.x = Math.random() * (window.innerWidth - 67);
        this.y = Math.random() * (window.innerHeight - 110);

        this.tag = "gandalf";
        this.style.backgroundImage = "url(images/"+this.tag+"_hungry.png)";
        this.callback = (e:Event) => this.onClick(e);
        this.addEventListener("click", this.callback)
    }

    public update(){
        this.setBehaviour()
        this.behaviour.update()
        // console.log(this.behaviour)
        this.x += this.behaviour.speedx
        this.y += this.behaviour.speedy


        super.update()
    }

    public onClick(e:Event):void {
        console.log(e,"je klikt op gandalf. de listener wordt nu verwijderd.");
        this.style.cursor =  "auto";
        this.removeEventListener("click", this.callback);
    }

    private setBehaviour():void
    {
        let action = 'action'
        switch(action){
            case "hungry" :
                this.behaviour = new Hungry(this);
                break;
            case "leaving" :
                this.behaviour = new Leaving(this)
                break;
            case "sleeping" :
                this.behaviour = new Sleeping(this)
                break;
            }
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