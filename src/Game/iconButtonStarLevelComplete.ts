import { Container } from "pixi.js";
import { iconButtonLargeSquare } from "./iconButtonLargeSquare";
import { goldenStar } from "./goldenStar";
import { greyStar } from "./greyStar";

export class iconButtonStarLevelComplete extends Container{
    constructor(){
        super();

        const iconbuttonlargesquare = new iconButtonLargeSquare();
        const goldenstar1 = new goldenStar();
        const goldenstar2 = new goldenStar();
        const greystar = new greyStar();

        iconbuttonlargesquare.scale.set(1,.33);
        goldenstar1.position.set(iconbuttonlargesquare.width/4-goldenstar1.width/3,iconbuttonlargesquare.height/2-goldenstar1.height/4);
        goldenstar1.scale.set(.5);
        goldenstar2.position.set(iconbuttonlargesquare.width/2-goldenstar2.width/3,-iconbuttonlargesquare.height/4);
        goldenstar2.scale.set(.65);
        greystar.position.set((iconbuttonlargesquare.width/4)*3-greystar.width/6,iconbuttonlargesquare.height/2-greystar.height/4);
        greystar.scale.set(.5);


        this.addChild(iconbuttonlargesquare);
        this.addChild(goldenstar1);
        this.addChild(goldenstar2);
        this.addChild(greystar);

    }
}