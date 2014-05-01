/**
 * @class ExtSample.controller.ChessboardController
 * @extends Ext.app.Controllerss
 * Description
 */
Ext.define('ExtSample.controller.ChessboardController', {
	extend: 'Ext.app.Controller',
	refs: [{
		ref: 'chessboard',
		selector: 'chessboard'
	}],
	isMove: false,
	isSelect: false,
	init: function() {
		var me = this;
		this.alphas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		this.numbers = [1, 2, 3, 4, 5, 6, 7, 8];
		this.control({
			'chessboard panel[type=pieceHolder]': {
				afterrender: function(cmp) {

					var elt = cmp.getEl();
					elt.on('click', function() {
						console.log(cmp.itemId);
						var piece = me.fnClickHistory();
						if (piece) {
							if (cmp.itemId == piece.itemId) {
								cmp.isActivated = 'no';
								cmp.setBodyStyle('border-radius', '0px');
							} else {
								var inSoldier = cmp.query('image')[0];
								var outSoldier = piece.query('image')[0];
								if (outSoldier) {
									cmp.add(outSoldier);
									if (inSoldier) {
										// piece.add(inSoldier);
										// piece.remove(outSoldier)
									}
									me.fnCrossLineRule(piece.itemId, cmp.itemId);
									cmp.remove(inSoldier);
									piece.isActivated = 'no';
									piece.setBodyStyle('border-radius', '0px');
								}
							}

						} else {
							cmp.setBodyStyle('border-radius', '10px');
							cmp.isActivated = 'yes';
						}
					});

				}
			}
		});
	},
	fnClickHistory: function() {
		var activatedPiece = this.getChessboard().query('panel[isActivated=yes]');
		if (activatedPiece.length) {
			this.isMove = true;
			this.isSelect = false;
		} else {
			this.isSelect = true;
			this.isMove = false;
		}
		return activatedPiece[0];
	},
	fnStraightLineRule: function(posA, posB) {
		var a1 = posA.substring(0, 1);
		var a2 = parseInt(posA.substring(1, 2));
		/*var b1 = posB.substring(0, 1);
		var b2 = parseInt(posB.substring(1, 2));*/
		var numbers = this.numbers;
		var alphas = this.alphas;
		var possiblePositions = [];
		for (var i = 0; i < 8; i++) {
			var number = numbers[i];
			if (number == a2)
				continue;
			else
				possiblePositions.push(a1 + number);
		};
		for (var i = 0; i < 8; i++) {
			var alpha = alphas[i];
			if (alpha == a1)
				continue;
			else
				possiblePositions.push(alpha + a2);
		};
		if (possiblePositions.indexOf(posB) != -1) {
			return true;
		}
		return false;

	},
	fnCrossLineRule: function(posA, posB) {
		var a1 = posA.substring(0, 1);
		var a2 = parseInt(posA.substring(1, 2));
		/*var b1 = posB.substring(0, 1);
		var b2 = parseInt(posB.substring(1, 2));*/
		var numbers = this.numbers;
		var alphas = this.alphas;
		var possiblePositions = [];

		var x_index = alphas.indexOf(a1);
		var pointer = 1;
		for (var i = x_index + 1; i < 8; i++) {
			var alpha = alphas[i];
			if ((a2 + pointer) <= 8)
				possiblePositions.push(alpha + (a2 + pointer));
			if ((a2 + pointer) > 0)
				possiblePositions.push(alpha + (a2 - pointer));
			pointer++;
		};
		pointer = 1;
		for (var i = x_index - 1; i >= 0; i--) {
			var alpha = alphas[i];
			if ((a2 + pointer) <= 8)
				possiblePositions.push(alpha + (a2 + pointer));
			if ((a2 + pointer) > 0)
				possiblePositions.push(alpha + (a2 - pointer));
			pointer++;
		};

		if(possiblePositions.indexOf(posB) != -1)
			return true;
		return false;
	}
});