// Generated by Phaser Editor v1.2.1

/**
 * InGameScene.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function InGameScene(aGame, aParent) {
	Phaser.Group.call(this, aGame, aParent);

	/* --- pre-init-begin --- */

	// you can insert code here

	/* --- pre-init-end --- */

	this.game.add.sprite(0, 0, 'inGameUI', 'mainStage.png', this);

	this.game.add.sprite(0, 66, 'inGameUI', 'leftLine.png', this);

	this.game.add.sprite(457, 66, 'inGameUI', 'rightLine.png', this);

	this.game.add.sprite(0, 654, 'inGameUI', 'downLine.png', this);

	this.game.add.sprite(0, 0, 'inGameUI', 'upLine.png', this);

	var redBlind_png = this.game.add.sprite(1, 117, 'inGameUI', 'redBlind.png', this);

	this.game.add.sprite(0, 0, 'inGameUI', 'upLeftPanel.png', this);

	this.game.add.sprite(119, 0, 'inGameUI', 'upPanel.png', this);

	this.game.add.sprite(174, 6, 'inGameUI', 'mainGage.png', this);

	var btnPause = this.game.add.button(437, -2, 'inGameUI', null, this, 'btnPause.png', 'btnPause.png', 'btnStart.png', 'btnPause.png', this);
	btnPause.scale.setTo(1.3054541868894243, 1.5574191410420477);

	 // public fields

	this.fRedBlind_png = redBlind_png;
	this.fBtnPause = btnPause;

	/* --- post-init-begin --- */

	// you can insert code here

	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var InGameScene_proto = Object.create(Phaser.Group.prototype);
InGameScene.prototype = InGameScene_proto;
InGameScene.prototype.constructor = Phaser.Group;

/* --- end generated code --- */

// you can insert code here
