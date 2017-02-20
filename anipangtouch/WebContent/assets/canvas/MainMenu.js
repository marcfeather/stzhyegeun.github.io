// Generated by Phaser Editor v1.2.1

/**
 * MainMenu.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function MainMenu(aGame, aParent) {
	Phaser.Group.call(this, aGame, aParent);

	/* --- pre-init-begin --- */

	// you can insert code here

	/* --- pre-init-end --- */

	var background = this.game.add.group(this);

	var buttons = this.game.add.group(this);

	var btn_stage_20 = this.game.add.sprite(723, 941, 'btn_stage', null, buttons);
	btn_stage_20.anchor.setTo(0.5, 0.5);

	var btn_stage_19 = this.game.add.sprite(576, 941, 'btn_stage', null, buttons);
	btn_stage_19.anchor.setTo(0.5, 0.5);

	var btn_stage_18 = this.game.add.sprite(426, 941, 'btn_stage', null, buttons);
	btn_stage_18.anchor.setTo(0.5, 0.5);

	var btn_stage_17 = this.game.add.sprite(274, 941, 'btn_stage', null, buttons);
	btn_stage_17.anchor.setTo(0.5, 0.5);

	var btn_stage_16 = this.game.add.sprite(723, 791, 'btn_stage', null, buttons);
	btn_stage_16.anchor.setTo(0.5, 0.5);

	var btn_stage_15 = this.game.add.sprite(576, 791, 'btn_stage', null, buttons);
	btn_stage_15.anchor.setTo(0.5, 0.5);

	var btn_stage_14 = this.game.add.sprite(426, 791, 'btn_stage', null, buttons);
	btn_stage_14.anchor.setTo(0.5, 0.5);

	var btn_stage_13 = this.game.add.sprite(274, 791, 'btn_stage', null, buttons);
	btn_stage_13.anchor.setTo(0.5, 0.5);

	var btn_stage_12 = this.game.add.sprite(723, 641, 'btn_stage', null, buttons);
	btn_stage_12.anchor.setTo(0.5, 0.5);

	var btn_stage_11 = this.game.add.sprite(576, 641, 'btn_stage', null, buttons);
	btn_stage_11.anchor.setTo(0.5, 0.5);

	var btn_stage_10 = this.game.add.sprite(426, 641, 'btn_stage', null, buttons);
	btn_stage_10.anchor.setTo(0.5, 0.5);

	var btn_stage_9 = this.game.add.sprite(274, 641, 'btn_stage', null, buttons);
	btn_stage_9.anchor.setTo(0.5, 0.5);

	var btn_stage_8 = this.game.add.sprite(723, 491, 'btn_stage', null, buttons);
	btn_stage_8.anchor.setTo(0.5, 0.5);

	var btn_stage_7 = this.game.add.sprite(576, 491, 'btn_stage', null, buttons);
	btn_stage_7.anchor.setTo(0.5, 0.5);

	var btn_stage_6 = this.game.add.sprite(426, 491, 'btn_stage', null, buttons);
	btn_stage_6.anchor.setTo(0.5, 0.5);

	var btn_stage_5 = this.game.add.sprite(274, 491, 'btn_stage', null, buttons);
	btn_stage_5.anchor.setTo(0.5, 0.5);

	var btn_stage_4 = this.game.add.sprite(723, 341, 'btn_stage', null, buttons);
	btn_stage_4.anchor.setTo(0.5, 0.5);

	var btn_stage_3 = this.game.add.sprite(576, 341, 'btn_stage', null, buttons);
	btn_stage_3.anchor.setTo(0.5, 0.5);

	var btn_stage_2 = this.game.add.sprite(426, 341, 'btn_stage', null, buttons);
	btn_stage_2.anchor.setTo(0.5, 0.5);

	var btn_stage_1 = this.game.add.sprite(274, 341, 'btn_stage', null, buttons);
	btn_stage_1.anchor.setTo(0.5, 0.5);

	var btn_left = this.game.add.sprite(75, 640, 'arrow-button', 0, buttons);
	btn_left.anchor.setTo(0.5, 0.5);

	var btn_right = this.game.add.sprite(885, 640, 'arrow-button', 1, buttons);
	btn_right.anchor.setTo(0.5, 0.5);

	 // public fields

	this.fBackground = background;
	this.fButtons = buttons;
	this.fBtn_stage_20 = btn_stage_20;
	this.fBtn_stage_19 = btn_stage_19;
	this.fBtn_stage_18 = btn_stage_18;
	this.fBtn_stage_17 = btn_stage_17;
	this.fBtn_stage_16 = btn_stage_16;
	this.fBtn_stage_15 = btn_stage_15;
	this.fBtn_stage_14 = btn_stage_14;
	this.fBtn_stage_13 = btn_stage_13;
	this.fBtn_stage_12 = btn_stage_12;
	this.fBtn_stage_11 = btn_stage_11;
	this.fBtn_stage_10 = btn_stage_10;
	this.fBtn_stage_9 = btn_stage_9;
	this.fBtn_stage_8 = btn_stage_8;
	this.fBtn_stage_7 = btn_stage_7;
	this.fBtn_stage_6 = btn_stage_6;
	this.fBtn_stage_5 = btn_stage_5;
	this.fBtn_stage_4 = btn_stage_4;
	this.fBtn_stage_3 = btn_stage_3;
	this.fBtn_stage_2 = btn_stage_2;
	this.fBtn_stage_1 = btn_stage_1;
	this.fBtn_left = btn_left;
	this.fBtn_right = btn_right;

	/* --- post-init-begin --- */

	// you can insert code here
	this.fBtn_right.name = 'fBtn_right';
	this.fBtn_right.inputEnabled = true;
	this.fBtn_right.input.enabled = true;
	
	this.fBtn_left.name = 'fBtn_left';
	this.fBtn_left.inputEnabled = true;
	this.fBtn_left.input.enabled = true;
	
	for (var i = 1; i < 21; i++) {
		this['fBtn_stage_' + i].name = 'fBtn_stage_' + i;
		this['fBtn_stage_' + i].inputEnabled = true;
		this['fBtn_stage_' + i].input.enabled = true;
	}
	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var MainMenu_proto = Object.create(Phaser.Group.prototype);
MainMenu.prototype = MainMenu_proto;
MainMenu.prototype.constructor = Phaser.Group;
MainMenu.prototype.OnClickMainMenuButtons = function(sprite, pointer) {};

/* --- end generated code --- */

// you can insert code here

