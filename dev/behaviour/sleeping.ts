class Sleeping implements Behaviour{
    speedx:number
    speedy:number
    gandalf:Gandalf

    constructor(g:Gandalf){
        this.gandalf = g
        this.gandalf.style.backgroundImage = "url(images/"+this.gandalf.tag+"_sleep.png)";
        this.gandalf.style.cursor =  "pointer";
        this.gandalf.addEventListener("click", this.gandalf.callback);
    }

    public update():void {
        
    }
}