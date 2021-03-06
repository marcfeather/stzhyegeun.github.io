// Generated by Phaser Editor v1.2.1

/**
 * emoticonPopup.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function emoticonPopup(aGame, aParent) {
	Phaser.Group.call(this, aGame, aParent);

	/* --- pre-init-begin --- */

	// you can insert code here

	/* --- pre-init-end --- */

	var backBg2_png = this.game.add.sprite(0, 0, 'PopupResult', 'backBg2.png', this);
	backBg2_png.scale.setTo(1.8713450153833733, 0.4378377963366107);

	var btnL = this.game.add.sprite(7, 3, 'PopupResult', 'bg.png', this);
	btnL.scale.setTo(1.8888889402997249, 0.4319526646297508);

	var btnFast = this.game.add.sprite(187, 13, 'PopupResult', 'btnGreen.png', this);

	var btnSorry = this.game.add.sprite(483, 13, 'PopupResult', 'btnGreen.png', this);

	var btnGreet = this.game.add.sprite(41, 13, 'PopupResult', 'btnGreen.png', this);

	var btnLaugh = this.game.add.sprite(336, 13, 'PopupResult', 'btnGreen.png', this);

	this.game.add.sprite(54, 25, 'PopupResult', 'textGreet.png', this);

	this.game.add.sprite(195, 25, 'PopupResult', 'txtFast.png', this);

	this.game.add.sprite(346, 26, 'PopupResult', 'txtAngry.png', this);

	this.game.add.sprite(491, 25, 'PopupResult', 'txtSorry.png', this);

	 // public fields

	this.fBtnFast = btnFast;
	this.fBtnSorry = btnSorry;
	this.fBtnGreet = btnGreet;
	this.fBtnLaugh = btnLaugh;

	/* --- post-init-begin --- */

	// you can insert code here

	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var emoticonPopup_proto = Object.create(Phaser.Group.prototype);
emoticonPopup.prototype = emoticonPopup_proto;
emoticonPopup.prototype.constructor = Phaser.Group;

/* --- end generated code --- */

// you can insert code here

