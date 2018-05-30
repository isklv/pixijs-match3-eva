import * as PIXI from "pixi.js";

import Config from "Config";

export default class Tile extends PIXI.Container {
	constructor(cid, col, row, levelObj) {
		super();
		this.col = col;
		this.row = row;
		this.obj = Config.content[cid];
		this.levelObj = levelObj;

		//check hidden block
		if(this.levelObj.hiddenBlock && this.levelObj.hiddenBlock.filter(item => item[0] == col && item[1] == row).length){
            this._bg = new PIXI.Sprite(PIXI.Texture.EMPTY);
		} 
		// Вафельная разметка
		else if(cid == 7) {
			if(col % 2 == row % 2) {
				this._bg = new PIXI.Sprite(PIXI.Texture.from(Config.content[7].ico));
			} else {
				this._bg = new PIXI.Sprite(PIXI.Texture.from(Config.content[8].ico));
			}
		}
		else{
			this._bg = new PIXI.Sprite(PIXI.Texture.from(this.obj.ico));
        }
		
		if (Array.isArray(this.obj.anchor)) this._bg.anchor.set(this.obj.anchor[0], this.obj.anchor[1]);
		else this._bg.alignAnchor();
		this.addChild(this._bg);
	}
}