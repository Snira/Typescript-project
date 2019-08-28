class PlayView implements View{
    gameObjects:GameObject[] = []
    private breakfast:Breakfast;

    constructor() {
        document.body.innerHTML = '<foodbutton></foodbutton><bar></bar><border></border><instructions></instructions>'
        this.breakfast = new Breakfast()    
        this.addGandalfs(4)
        this.addOrks(3)
    }

    public update(): void {
        for (let go of this.gameObjects){
            this.breakfast.update()
            go.update()
        }
        console.log(this.breakfast.observers)
        if(this.breakfast.observers.length <= 2)
        {
            console.log('leeg')
            this.addGandalfs(Math.random() * 5 + 1)
        }
    }

    public addGandalfs(amount:number):void {
        let factory:GameObjectFactory = new GandalfFactory()
        for (let i = 0; i < amount; i++) {
            let gandalf = factory.createObject()
            this.breakfast.subscribe(gandalf)
            this.gameObjects.push(gandalf)
          }
    }

    public addOrks(amount:number):void {
        let factory:GameObjectFactory = new OrkFactory()
        for (let i = 0; i < amount; i++) {
            let ork = factory.createObject()
            this.gameObjects.push(ork)
          }
    }
}