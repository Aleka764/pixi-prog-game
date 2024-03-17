import { Container, Sprite } from "pixi.js";

export class boxBanner extends Container{
    
    constructor(){
        super();

        const box = Sprite.from("BoxOrangeRounded");
        const banner = Sprite.from("BannerOrange");

        box.position.set(0,0);
        box.scale.set(1.2,1.1);
        banner.position.set(box.width/5.5,-banner.height/2);

        this.addChild(box);
        this.addChild(banner);
    }
}