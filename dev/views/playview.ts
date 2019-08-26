class PlayView implements View{
    gameObjects:GameObject[] = []
    private breakfast:Breakfast;

    constructor() {
        document.body.innerHTML = '<foodbutton></foodbutton><bar></bar><border></border><instructions></instructions>'
        this.gameObjects.push(new Gandalf(), new Gandalf())
        this.gameObjects.push(new Ork(), new Ork())
        this.breakfast = new Breakfast()    

        for(let g of this.gameObjects)
        {
            if(g instanceof Gandalf){
                this.breakfast.subscribe(g)
            }
        }
    }

    public update(): void {
        for (let go of this.gameObjects){
            this.breakfast.update()
            go.update()
        }
    }

    public addGandalfs():void{
        for (let i = 0; i < 5; i++) {
            let gandalf = new Gandalf()
            this.breakfast.subscribe(gandalf)
            this.gameObjects.push(gandalf)
          }
    }
}