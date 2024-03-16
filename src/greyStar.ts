import { Container, Sprite } from "pixi.js";

export class greyStar extends Container{

    constructor(){
        super();

        const greystar = Sprite.from("GreyStar");

        this.addChild(greystar);
        
    }
}