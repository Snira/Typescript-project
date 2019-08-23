class Canvas {
    canvas:HTMLCanvasElement;
    context:CanvasRenderingContext2D|null;

    constructor() {
        this.canvas = <HTMLCanvasElement> document.getElementById('canvas')
        this.context = this.canvas.getContext("2d")
    }
}