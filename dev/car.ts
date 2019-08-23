class Car implements GameObject {
    element: HTMLElement;
    positionX: number;
    positiionY: number;
    behaviour: Behaviour;

    constructor() {
        this.positionX = 0;
        this.positiionY = 0;

        // let rectangle : ClientRect = this.element.getBoundingClientRect() 
        this.element = document.createElement('car')

        document.body.appendChild(this.element)
        this.behaviour = new Driving(this)
    }

    public update(){
        this.updatePosition()
    }

    private updatePosition() {
        this.positionX += this.behaviour.speed
        this.behaviour.update();
        
        this.element.style.transform = `translateX(${this.positionX}px)`
    }
}

// window.customElements.define("car-component", Car)