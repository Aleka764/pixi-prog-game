import { Container } from "pixi.js"
import { boxBanner } from "../Game/boxBanner";
import { iconButtonStarLevelComplete } from "../Game/iconButtonStarLevelComplete";

export class SceneLevelComplete extends Container{
    constructor()
    {
        super();

        const boxwithbanner = new boxBanner();
        const iconbuttonstarlevelcomplete = new iconButtonStarLevelComplete();
        
        boxwithbanner.scale.set(.3);
        boxwithbanner.position.set(150,130);
        iconbuttonstarlevelcomplete.position.set(boxwithbanner.width/2.22,boxwithbanner.height/2.8);

        this.addChild(boxwithbanner);
        this.addChild(iconbuttonstarlevelcomplete);
        
    }
}