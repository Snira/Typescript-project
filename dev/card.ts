class Card extends HTMLElement {
        
    public div: HTMLElement;

    constructor(x:number) {     
        super()
        this.style.left = x + "px";
    }

}

window.customElements.define("card-component", Card)