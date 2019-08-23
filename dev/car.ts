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
        this.element.innerHTML = 'Dit is een test'
        document.body.appendChild(this.element)
        this.behaviour = new Driving(this)
    }

    public update(){
        this.behaviour.update();
        console.log('moving', this.positionX)
        this.positionX ++
        this.element.style.transform = `translateX(${this.positionX}px)`
    }

    public stop(){
        this.behaviour = new Idle(this)
    } 
}

// window.customElements.define("car-component", Car)