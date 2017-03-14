// Generated by Phaser Editor v1.2.1

/**
 * lobbyScene.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function lobbyScene(aGame, aParent) {
	Phaser.Group.call(this, aGame, aParent);

	/* --- pre-init-begin --- */

	// you can insert code here

	/* --- pre-init-end --- */

	this.game.add.sprite(0, 0, 'bgLobby', null, this);

	var groupMenuBotton = this.game.add.group(this);

	var btnSetting = this.game.add.sprite(370, 680, 'mainUI', 'btn_menu.png', groupMenuBotton);

	var btnMessage = this.game.add.sprite(254, 680, 'mainUI', 'btn_menu.png', groupMenuBotton);

	var btnFriends = this.game.add.sprite(135, 680, 'mainUI', 'btn_menu.png', groupMenuBotton);

	var btnMission = this.game.add.sprite(13, 680, 'mainUI', 'btn_menu.png', groupMenuBotton);

	this.game.add.sprite(281, 703, 'mainUI', 'iconMessage.png', groupMenuBotton);

	this.game.add.sprite(396, 699, 'mainUI', 'iconSetting.png', groupMenuBotton);

	this.game.add.sprite(30, 692, 'mainUI', 'iconMisson.png', groupMenuBotton);

	this.game.add.sprite(166, 700, 'mainUI', 'iconFriend.png', groupMenuBotton);

	var groupModeButton = this.game.add.group(this);

	this.game.add.button(334, 552, 'mainUI', null, this, null, 'btnMode.png', null, null, groupModeButton);

	this.game.add.button(181, 552, 'mainUI', null, this, null, 'btnMode.png', null, null, groupModeButton);

	this.game.add.button(33, 552, 'mainUI', null, this, null, 'btnMode.png', null, null, groupModeButton);

	this.game.add.sprite(146, 504, 'mainUI', 'ribbonmode.png', groupModeButton);

	var mainUI = this.game.add.group(this);

	var bgBack_png = this.game.add.sprite(46, 99, 'mainUI', 'bgBack.png', mainUI);
	bgBack_png.scale.setTo(1.0, 0.9414514237358661);

	this.game.add.sprite(129, 155, 'mainUI', 'bgText.png', mainUI);

	var Bitmap_5_png = this.game.add.button(135, 402, 'mainUI', null, this, null, 'Bitmap 5.png', null, null, mainUI);

	var bg_png = this.game.add.sprite(58, 129, 'mainUI', 'bg.png', mainUI);

	this.game.add.sprite(133, 143, 'mainUI', 'bgText.png', mainUI);

	var groupProfile = this.game.add.group(this);

	 // public fields

	this.fBtnSetting = btnSetting;
	this.fBtnMessage = btnMessage;
	this.fBtnFriends = btnFriends;
	this.fBtnMission = btnMission;
	this.fBitmap_5_png = Bitmap_5_png;
	this.fBg_png = bg_png;
	this.fGroupProfile = groupProfile;

	/* --- post-init-begin --- */

	// you can insert code here

	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var lobbyScene_proto = Object.create(Phaser.Group.prototype);
lobbyScene.prototype = lobbyScene_proto;
lobbyScene.prototype.constructor = Phaser.Group;

/* --- end generated code --- */

// you can insert code here

