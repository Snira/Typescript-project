class Car implements GameObject {
    element: HTMLElement;
    positionX: number;
    positiionY: number;
    scale: number;
    behaviour: Behaviour;

    constructor() {
        this.positionX = 0;
        this.positiionY = 0;
        this.scale = 0.5;

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
        this.behaviour.update();
        
        this.element.style.transform = `translateX(${this.positionX}px) scale(${this.scale})`
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