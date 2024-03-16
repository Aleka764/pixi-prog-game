import { Container, Sprite } from "pixi.js";

export class goldenStar extends Container{

    constructor(){
        super();

        const goldenstar = Sprite.from("GoldenStar");

        this.addChild(goldenstar);
    }
}