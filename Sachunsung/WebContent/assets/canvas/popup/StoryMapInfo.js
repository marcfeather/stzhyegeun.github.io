// Generated by Phaser Editor v1.2.1

/**
 * StoryMapInfo.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function StoryMapInfo(aGame, aParent) {
	Phaser.Group.call(this, aGame, aParent);

	/* --- pre-init-begin --- */

	// you can insert code here

	/* --- pre-init-end --- */

	var group = this.game.add.group(this);

	this.game.add.sprite(20, 170, 'storyMapInfo', 'Bitmap 4.png', group);

	this.game.add.sprite(28, 179, 'storyMapInfo', 'bg.png', group);

	this.game.add.sprite(151, 427, 'storyMapInfo', 'timeBg.png', group);

	this.game.add.sprite(24, 302, 'storyMapInfo', 'viewerLine.png', group);

	this.game.add.sprite(56, 322, 'storyMapInfo', 'viewer.png', group);

	var btnStart = this.game.add.button(141, 564, 'storyMapInfo', null, this, 'bntStartClicked.png', 'btnStart.png', 'bntStartClicked.png', 'btnStart.png', group);

	this.game.add.sprite(28, 134, 'storyMapInfo', 'upPanel.png', group);

	var btnClose = this.game.add.sprite(420, 151, 'storyMapInfo', 'btnClose.png', group);

	var starCenter = this.game.add.sprite(202, 196, 'storyMapInfo', 'star.png', group);

	var starLeft = this.game.add.sprite(109, 226, 'storyMapInfo', 'star.png', group);
	starLeft.angle = -18.68509505712249;

	var starRight = this.game.add.sprite(295, 208, 'storyMapInfo', 'star.png', group);
	starRight.angle = 16.676002355406787;

	var txtTimePos = this.game.add.group(group);
	txtTimePos.position.setTo(280, 492);

	var txtNamePos = this.game.add.group(group);
	txtNamePos.position.setTo(290, 165);

	 // public fields

	this.fBtnStart = btnStart;
	this.fBtnClose = btnClose;
	this.fStarCenter = starCenter;
	this.fStarLeft = starLeft;
	this.fStarRight = starRight;
	this.fTxtTimePos = txtTimePos;
	this.fTxtNamePos = txtNamePos;

	/* --- post-init-begin --- */

	// you can insert code here

	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var StoryMapInfo_proto = Object.create(Phaser.Group.prototype);
StoryMapInfo.prototype = StoryMapInfo_proto;
StoryMapInfo.prototype.constructor = Phaser.Group;

/* --- end generated code --- */

// you can insert code here

