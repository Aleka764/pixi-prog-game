import { Container } from "pixi.js"
import { boxBanner } from "./boxBanner";
import { iconButtonStarLevelComplete } from "./iconButtonStarLevelComplete";

export class SceneLevelComplete extends Container{
    constructor()
    {
        super();

        const boxwithbanner = new boxBanner();
        const iconbuttonstarlevelcomplete = new iconButtonStarLevelComplete();
        
        boxwithbanner.scale.set(.3);
        boxwithbanner.position.set(150,130);

        this.addChild(boxwithbanner);
        this.addChild(iconbuttonstarlevelcomplete);
        
    }
}