class Breakfast extends HTMLElement {

    private counter:number = 0;
    private bar:HTMLElement;
    private button:HTMLElement;
    private callback:EventListener;
        
    constructor() {
        super()
        this.bar = <HTMLElement> document.getElementsByTagName("bar")[0];
        this.button = <HTMLElement> document.getElementsByTagName("foodbutton")[0];
        this.button.style.cursor =  "auto";
        this.callback = (e:Event) => this.onClick(e);    
    }

    public update():void {
        this.counter = Math.min(1, this.counter + 0.003);
        this.bar.style.width = (143 * this.counter) + "px";

        if(this.counter >= 1) {
            this.button.classList.add("blinking");
            this.button.addEventListener("click", this.callback);
            this.button.style.cursor =  "pointer";
        } 
    }

    private onClick(e:Event):void {
        console.log("Ontbijtjes uitdelen!",e);
        this.counter = 0;
        this.button.removeEventListener("click", this.callback);
        this.button.classList.remove("blinking"); 
        this.button.style.cursor =  "auto";
    }
}

window.customElements.define("breakfast-component", Breakfast)