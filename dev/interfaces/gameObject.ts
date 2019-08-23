interface GameObject {
    element: HTMLElement;
    positionX: number;
    positiionY: number;
    scale: number;
    color?: string;
    width?: number;
    height?: number;

    update():void
}