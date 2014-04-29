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
		this.control({
			'chessboard panel[type=pieceHolder]': {
				afterrender: function(cmp) {

					var elt = cmp.getEl();
					elt.on('click', function() {
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
	fnStraightLineRule : function(posA, posB){
		var a1 = posA.subString(0,1);
		var a2 = posA.subString(1,2);
		var b1 = posB.subString(0,1);
		var b2 = posB.subString(1,2);
		
	}
});