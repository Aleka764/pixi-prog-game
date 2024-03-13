import { Application, Loader, Sprite } from 'pixi.js';


const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize", ()=>{
	
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX, scaleY);
	
	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeigth = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeigth) / 2);

	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeigth + "px";

	app.view.style.marginLeft = marginHorizontal + "px";
	app.view.style.marginRight = marginHorizontal + "px";

	app.view.style.marginTop = marginVertical + "px";
	app.view.style.marginBottom = marginVertical + "px";

});
window.dispatchEvent(new Event("resize"));


Loader.shared.add({url: "./warrior.png", name: "myWarrior"});
Loader.shared.add({url: "./sword.png", name: "mySword"});

Loader.shared.onComplete.add(()=>{
	const warrior: Sprite = Sprite.from("myWarrior");
	const sword: Sprite = Sprite.from("mySword");
	

	//clampy.anchor.set(0.5);

	warrior.x = 100;
	warrior.y = 0;
	sword.x = 100;
	sword.y = 0;

	warrior.scale.x = .5;
	warrior.scale.y = .5;
	sword.scale.x = .5;
	sword.scale.y = .5;

	app.stage.addChild(warrior);
	app.stage.addChild(sword);

});

Loader.shared.load();
