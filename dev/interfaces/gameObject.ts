interface GameObject {
    element: HTMLElement;
    positionX: number;
    positionY: number;
    scale: number;
    color?: string;
    width?: number;
    height?: number;

    update():void
}