// Define our player character classes
var Character = IgeEntity.extend({
	classId: 'Character',

	init: function (arg) {
		var self = this;
		IgeEntity.prototype.init.call(this);

		// Setup the entity
		self.addComponent(IgeAnimationComponent)
			.addComponent(IgeVelocityComponent)
			.depth(1)
			.size3d(40, 40, 40);

		// Load the character texture file
		//this._characterTexture = new IgeCellSheet('../assets/textures/sprites/walk_iso.png', 10, 8);
		if (arg.url) this._characterTexture = new IgeCellSheet(arg.url, 10, 8);

		// Wait for the texture to load
		this._characterTexture.on('loaded', function () {
			self.texture(self._characterTexture)
				.dimensionsFromCell();
				
			if (changestatus) changestatus("loaded walk_anim", 'greenstatus');
		}, false, true);
	},


	setType: function (type) {

		this.animation.define('S', [1,2,3,4,5,6,7,8,9,10], 8, -1)
			.animation.define('SE', [11,12,13,14,15,16,17,18,19,20], 8, -1)
			.animation.define('E', [21,22,23,24,25,26,27,28,29,30], 8, -1)
			.animation.define('NE', [31,32,33,34,35,36,37,38,39,40], 8, -1)
			.animation.define('N', [41,42,43,44,45,46,47,48,49,50], 8, -1)
			.animation.define('NW', [51,52,53,54,55,56,57,58,59,60], 8, -1)
			.animation.define('W', [61,62,63,64,65,66,67,68,69,70], 8, -1)
			.animation.define('SW', [71,72,73,74,75,76,77,78,79,80], 8, -1)
			.cell(1);

		this._restCell = 10;
		return this;
	},

	update: function (ctx) {
		// Set the depth to the y co-ordinate which basically
		// makes the entity appear further in the foreground
		// the closer they become to the bottom of the screen
		this.depth(this._translate.y);
		
		IgeEntity.prototype.update.call(this, ctx);
	},

	destroy: function () {
		// Destroy the texture object
		if (this._characterTexture) {
			this._characterTexture.destroy();
		}

		// Call the super class
		IgeEntity.prototype.destroy.call(this);
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Character; }