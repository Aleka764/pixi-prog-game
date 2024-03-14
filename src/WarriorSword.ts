import { Container, Sprite } from "pixi.js";

export class WarriorSword extends Container{

    constructor(){
        super();

        const warrior: Sprite = Sprite.from("myWarrior");
        const sword: Sprite = Sprite.from("mySword");
            
        warrior.x = 100;
        warrior.y = 0;
        sword.x = 240;
        sword.y = 200;

        sword.angle = -58;

        warrior.scale.x = .5;
        warrior.scale.y = .5;
        sword.scale.x = .5;
        sword.scale.y = .5;

        this.addChild(sword);
        this.addChild(warrior);
    }

}