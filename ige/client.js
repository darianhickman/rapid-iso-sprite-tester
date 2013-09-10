var Client = IgeClass.extend({
	classId: 'Client',
	init: function () {
		//ige.showStats(1);
		//ige.globalSmoothing(true);

		// Load our textures
		//var selfwoot = this;
		this.obj = [];


	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }