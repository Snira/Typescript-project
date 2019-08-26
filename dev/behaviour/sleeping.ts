class Sleeping implements Behaviour{
    speedx: number = 5;
    speedy:number
    gandalf:Gandalf

    constructor(g:Gandalf){
        this.gandalf = g
    }

    public update():void {
        this.gandalf.style.backgroundImage = "url(images/"+this.gandalf.tag+"_sleep.png)";
        this.gandalf.style.cursor =  "pointer";
        this.gandalf.addEventListener("click", this.gandalf.callback);
    }
}