class PlayView implements View{
    gameObjects:GameObject[] = []
    private breakfast:Breakfast;
    private factory:GameObjectFactory;

    constructor() {
        document.body.innerHTML = '<foodbutton></foodbutton><bar></bar><border></border><instructions></instructions>'
        this.breakfast = new Breakfast()    
        this.addGandalfs(4)
        this.addOrks(3)

        for(let g of this.gameObjects)
        {
            if(g instanceof Gandalf){
                this.breakfast.subscribe(g)
            }
        }
    }

    public update(): void {
        let score = Game.getInstance().score
        console.log(score)
        for (let go of this.gameObjects){
            this.breakfast.update()
            go.update()
        }
        if(score % 4 == 1)
        {
            this.addGandalfs(5)
        }
        if(score >= 20) {
            this.view = new GameOverView
        }
    }

    public addGandalfs(amount:number):void {
        this.factory = new GandalfFactory()
        for (let i = 0; i < amount; i++) {
            let gandalf = this.factory.createObject()
            this.breakfast.subscribe(gandalf)
            this.gameObjects.push(gandalf)
          }
    }

    public addOrks(amount:number):void {
        this.factory = new OrkFactory()
        for (let i = 0; i < amount; i++) {
            let ork = this.factory.createObject()
            this.gameObjects.push(ork)
          }
    }
}