import { Container } from "pixi.js";
import { WarriorSword } from "./WarriorSword";

export class Scene extends Container {

    constructor()
    {
        super();

        const warriorwithsword: WarriorSword = new WarriorSword();
        
        warriorwithsword.scale.set(0.5);
        warriorwithsword.position.set(150,130);

        this.addChild(warriorwithsword);
    }
}