'use strict';
const fmlog = require('@waynechang65/fml-consolelog').log;
const usr_mgr = require('./usr_mgr.js').init();
const flex_level = require('./flex_level.js');
const c = require('./const_def.js').init();

function _bot_sticker_handler(_event, _bot) {
	let gID = _event.source.groupId;
	let uID = _event.source.userId;
	let groupDB = usr_mgr.getGDB();
	let idx = usr_mgr.getGIDX(gID);
	let cmdCatched = true;

	_bot.getGroupMemberProfile(gID, uID).then((profile) => {
		fmlog('basic_chat',
			['GN:' + groupDB[idx].gname, idx, '.............', 'Sticker' , profile.displayName, uID]);
	});

	flex_level.retainExp(_event, _bot, c.LV_SPEAKING);

	return cmdCatched;
}

/*..........................................................................*/
/*..........................Public Functions................................*/
/*..........................................................................*/

function _go(_event, _bot) {
	return _bot_sticker_handler(_event, _bot);
}

//////////////  Module Exports //////////////////
module.exports = {
	go : _go
};