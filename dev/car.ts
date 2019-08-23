class Car implements GameObject {
    element: HTMLElement;
    positionX: number;
    positionY: number;
    scale: number;
    behaviour: Behaviour;

    constructor(x:number, y:number, scale:number) {
        this.positionX = x
        this.positionY = y
        this.scale = scale

        // let rectangle : ClientRect = this.element.getBoundingClientRect() 
        this.element = document.createElement('car')

        document.body.appendChild(this.element)
        this.behaviour = new Driving(this)
        window.addEventListener("keydown", (e:KeyboardEvent) => this.keydown(e))
    }

    public update(){
        this.updatePosition()
    }

    private updatePosition() {
        this.positionX += this.behaviour.speed
        this.behaviour.update()
        
        this.element.style.transform = `translateX(${this.positionX}px) translateY(${this.positionY}px) scale(${this.scale})`
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