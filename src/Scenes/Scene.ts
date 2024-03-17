import { AnimatedSprite, Container, Graphics, Texture, Text } from "pixi.js";
import { WarriorSword } from "../Game/WarriorSword";

export class Scene extends Container {

    constructor()
    {
        super();

        // Class Extending from Container
        const warriorwithsword: WarriorSword = new WarriorSword();
        
        warriorwithsword.scale.set(0.5);
        warriorwithsword.position.set(150,130);

        this.addChild(warriorwithsword);

        // Animated Sprite
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

        // Graphics
        const myGraph: Graphics = new Graphics();

        myGraph.lineStyle({color: 0xFF00FF, width: 10, alpha:1});
        myGraph.moveTo(0, 0);
        myGraph.lineTo(300, 300);
        myGraph.lineTo(250, 300);
        myGraph.lineTo(0, 0);

        myGraph.clear();

        myGraph.lineStyle({color: 0xFF00FF, width: 10, alpha:1});
        myGraph.beginFill(0x00FF00,1);
        myGraph.drawCircle(0,0,100);
        myGraph.endFill();
        myGraph.drawCircle(50,50,100);

        myGraph.position.set(1280/2, 720/2);
        this.addChild(myGraph);

        // Text
        const myText: Text = new Text("Hello World!");
        this.addChild(myText);
    }
}