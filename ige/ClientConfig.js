var igeClientConfig = {
	include: [
		'./ClientNetworkEvents.js',
		'./Character.js',
		'./CharacterContainer.js',		
		'./client.js',
		'./index.js'
	]
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = igeClientConfig; }