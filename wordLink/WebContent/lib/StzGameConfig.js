var StzGameConfig = {
	DEBUG_MODE: true
	,AUTO_FLAG: false
	, GAME_WIDTH: 480
	, GAME_HEIGHT: 800
	, LOCK_ORIENTATION: "PORTRAIT" 	// , LOCK_ORIENTATION: "LANDSCAPE"
	, MAX_WORD_BUTTON_COUNT:6
	,PRELOAD_BAR_MIN_WIDTH : 21
	,TIME_BAR_MAX_WIDTH    : 404
	,GAME_LIMIT_TIME 	: 60
};

var StzServerConfig = {
    BASE_URL: ""
    , GET_PEERID_URL: ""
    , GET_PEERIDLIST_URL: ""
    , CREATE_PEERID_URL: ""
    , UPDATE_PEERID_URL: ""
    , EXPIRE_SECONDS: 30
    , getRetrievePeerIdUrl: function(inPeerId) {
		var result = this.BASE_URL + this.GET_PEERID_URL + "?peerid=" + inPeerId;
		return result;
	}
	, getRetrievePeerIdListUrl: function() {
		var result = this.BASE_URL + this.GET_PEERIDLIST_URL;
		return result;
	} 
	, getCreatePeerIdUrl: function(inPeerId) {
		var result = this.BASE_URL + this.CREATE_PEERID_URL + "?peerid=" + inPeerId;
		return result;
	}
	, getUpdateUrl: function(inPeerId, inStatus) {
    	var result = this.BASE_URL + this.UPDATE_PEERID_URL + "?peerid=" + inPeerId + "&status=" + inStatus;
    	return result;
    }
};

var EConnectStatus = {
	LOGIN: 0, 
	WAITING: 1, 
	GAMING: 2
};

var EWordButtonName = {
	ON: "btnWord.png", 
	OFF: "btnDisableWord.png", 
};

StzGameConfig.getChipFrameName = function(type){
	if(type === EChipType.BLACK) return 'blackChipBig.png';
	else if(type === EChipType.WHITE) return 'whiteChipBig.png';
	else if(type === EChipType.MINIBLACK) return 'blackChipMini.png';
	else if(type === EChipType.MINIWHITE) return 'whiteChipMini.png';
	else StzLog.assert(true, "Error");
};

var ETurn = {
    ME	: 	1, 
    YOU	: 	2
};

var ERESULT = {
	    WIN: 1, 
	    LOSE: 2
	};

var EEmoticonNames = {
		ALL 	:'emoticon' ,
		FAST	:'emoticonFast.png',
		LAUGH	:'emoticonLaugh.png',
		SORRY	:'emoticonSorry.png',
		GREET	:'emotionGreet.png'
};

var EWrodState = {
	NONE:'NONE',
	ME_CLEAR:'MECLEAR',
	YOU_CLEAR:'YOU_CLEAR'
};

var EWordDatas = {"CBAINH" : ["BAN", "BIN", "CAB", "CAN", "CABIN", "HIC", "CHIN", "INCH", "CHAIN", "CHINA"],
				  "ORWDS"  : ["DO", "OR", "ROD", "ROW", "WORD", "SO", "SOD", "RODS", "ROWS", "SWORD", "WORDS"],
				  "RTEA"   : ["AT", "TAR", "RATE", "TARE", "TEAR", "TEA", "RET", "RAT", "ART", "ARE", "ATE", "ERA", "EAR", "EAT"]
				 };