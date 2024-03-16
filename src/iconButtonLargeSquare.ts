import { Container, Sprite } from "pixi.js";

export class iconButtonLargeSquare extends Container{
    constructor(){
        super();

        const iconbuttonlarge = Sprite.from("IconButtonLargeOrangeSquare");

        this.addChild(iconbuttonlarge);


    }
}