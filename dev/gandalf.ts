/// <reference path="gameobject.ts" />

class Gandalf extends GameObject {
    behaviour: Behaviour;
    public callback:EventListener;
    tag:string;

    xTarget:number;
    yTarget:number;
    
    constructor() {
        super()
        this.tag = "gandalf";
        this.style.backgroundImage = "url(images/"+this.tag+"_hungry.png)";


        let action = Math.random() < 0.5 ? 'hungry' : 'sleeping'
        this.setBehaviour(action)
        this.width = 67;
        this.height = 119;
        this.x = Math.random() * (window.innerWidth - 67);
        this.y = Math.random() * (window.innerHeight - 110);
    
        this.callback = (e:Event) => this.onClick(e);
        this.addEventListener("click", this.callback)
    }

    public update(){    
        this.behaviour.update()
        
        super.update()
    }

    public onClick(e:Event):void {
        console.log(e,"je klikt op gandalf. de listener wordt nu verwijderd.");
        this.setBehaviour('hungry')
        this.style.cursor =  "auto";
        this.removeEventListener("click", this.callback);
    }

    private setBehaviour(action:string):void
    {
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