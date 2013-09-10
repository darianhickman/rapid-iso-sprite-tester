// Define our player character container classes
var CharacterContainer = IgeEntity.extend({
	classId: 'CharacterContainer',

	init: function (arg) {
		var self = this;
		IgeEntity.prototype.init.call(this);

		// Setup the entity 3d bounds
		self.size3d(20, 20, 40);
//console.log(this.id() + '_character');
		// Create a character entity as a child of this container
		self.character = new Character(arg)
			.id(this.id() + '_character')
			.setType(8)
			.drawBounds(false)
			.drawBoundsData(false)
			.originTo(0.5, 0.6, 0.5)
			.mount(this);
	},

	update: function (ctx) {
		// Set the depth to the y co-ordinate which basically
		// makes the entity appear further in the foreground
		// the closer they become to the bottom of the screen
		this.depth(this._translate.y);
		
		// Make sure the character is animating in the correct
		// direction
		var dir = this.path.currentDirection();
		
		if (dir && (dir !== this._currentDir || !this.character.animation.playing())) {
			this._currentDir = dir;
			console.log("dir: " + dir);
			// The characters we are using only have four directions
			// so convert the NW, SE, NE, SW to N, S, E, W
			/*switch (dir) {
				case 'SW':
					dir = 'W';
					break;
				
				case 'SE':
					dir = 'E';
					break;
				
				case 'NW':
					dir = 'W';
					break;
				
				case 'NE':
					dir = 'E';
					break;
			}*/
			
			this.character.animation.start(dir);
		}
		
		IgeEntity.prototype.update.call(this, ctx);
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = CharacterContainer; }