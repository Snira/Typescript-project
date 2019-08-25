/// <reference path="gameobject.ts" />

class Car extends GameObject {
    behaviour: Behaviour;
    
    constructor() {
        super()

        this.width = 300
        this.height = 160
        this.x = Math.random() * (window.innerWidth - 67)
        this.y = Math.random() * (window.innerHeight/2) + (window.innerHeight/2-67)

        this.behaviour = new Driving(this)
        window.addEventListener("keydown", (e:KeyboardEvent) => this.keydown(e))
    }

    public update(){
        this.behaviour.update()
        this.x += this.behaviour.speedx

        super.update()
    }

    private keydown(event:KeyboardEvent)
    {
        switch(event.key){
            case 'ArrowDown':
                this.behaviour = new Braking(this)
                break
            case 'ArrowUp':
                this.behaviour = new Driving(this)
                break
        }
    }
}

window.customElements.define("car-component", Car)