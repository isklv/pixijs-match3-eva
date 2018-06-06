import * as PIXI from "pixi.js";
import { TweenLite } from "gsap";

export default class Cup extends PIXI.Container {
	constructor() {
        super();
        let texture = PIXI.Texture.fromImage('/static/images/happy-cup.svg');
        
        // console.log('texture', texture.height);
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
        this.sprite.width = 176;
        this.sprite.height = 170;
        this.addChild(this.sprite);
        
	}
}