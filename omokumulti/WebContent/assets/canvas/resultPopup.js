// Generated by Phaser Editor v1.2.1

/**
 * resultPopup.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function resultPopup(aGame, aParent) {
	Phaser.Group.call(this, aGame, aParent);

	/* --- pre-init-begin --- */

	// you can insert code here

	/* --- pre-init-end --- */

	var popupUI = this.game.add.group(this);

	this.game.add.sprite(0, 0, 'PopupResult', 'backBg.png', popupUI);

	this.game.add.sprite(9, 8, 'PopupResult', 'bg.png', popupUI);

	var iconLose = this.game.add.sprite(24, 31, 'PopupResult', 'iconLose.png', popupUI);

	var iconWin = this.game.add.sprite(61, 53, 'PopupResult', 'iconWin.png', popupUI);

	var txtResult = this.game.add.sprite(152, 22, 'PopupResult', 'txtGameLose.png', popupUI);

	var btnReturn = this.game.add.button(111, 181, 'PopupResult', null, this, 'btnGreen.png', 'btnGreen.png', 'btnGreen.png', 'btnGreen.png', popupUI);

	this.game.add.sprite(119, 191, 'PopupResult', 'txtReturn.png', popupUI);

	var iconResult = this.game.add.sprite(201, 67, 'inGameUI', 'blackBlock.png', popupUI);

	 // public fields

	this.fIconLose = iconLose;
	this.fIconWin = iconWin;
	this.fTxtResult = txtResult;
	this.fBtnReturn = btnReturn;
	this.fIconResult = iconResult;

	/* --- post-init-begin --- */

	// you can insert code here

	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var resultPopup_proto = Object.create(Phaser.Group.prototype);
resultPopup.prototype = resultPopup_proto;
resultPopup.prototype.constructor = Phaser.Group;

/* --- end generated code --- */

// you can insert code here

