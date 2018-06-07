import * as PIXI from "pixi.js";
import { TweenLite } from "gsap";

export default class Logo extends PIXI.Container {
	constructor() {
        super();
        let texture = PIXI.Texture.fromImage('/static/images/halva-logo.svg');
        
        console.log('texture', texture.height);
        this.sprite = new PIXI.Sprite(texture);
		// this.tfScore = new PIXI.Text("0 очков", {
		// 	fontSize: 20,
		// 	fill: 0xffffff,
		// 	fontWeight: "bold",
		// 	dropShadow: true,
		// 	dropShadowColor: 0x0f3f61,
		// 	dropShadowDistance: 2
		// });
        // this.tfScore.alignAnchor();
        this.sprite.width = 152;
        this.sprite.height = 46;
        this.addChild(this.sprite);
        
	}
}