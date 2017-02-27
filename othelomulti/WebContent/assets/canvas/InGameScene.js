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

	var groupUI = this.game.add.group(this);

	this.game.add.sprite(0, 0, 'inGameUI', 'bgBig.png', groupUI);

	var groupChip = this.game.add.group(this);

	 // public fields

	this.fGroupUI = groupUI;
	this.fGroupChip = groupChip;

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

