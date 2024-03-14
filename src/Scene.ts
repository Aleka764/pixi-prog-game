import { AnimatedSprite, Container, Texture } from "pixi.js";
import { WarriorSword } from "./WarriorSword";

export class Scene extends Container {

    constructor()
    {
        super();

        const warriorwithsword: WarriorSword = new WarriorSword();
        
        warriorwithsword.scale.set(0.5);
        warriorwithsword.position.set(150,130);

        this.addChild(warriorwithsword);

        const warriorAnimated: AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("WarriorWalk1"),
                Texture.from("WarriorWalk2"),
                Texture.from("WarriorWalk3"),
                Texture.from("WarriorWalk4"),
                Texture.from("WarriorWalk5"),
            ], true
        );
        warriorAnimated.play();
        warriorAnimated.animationSpeed = 0.1;
        this.addChild(warriorAnimated);
    }
}