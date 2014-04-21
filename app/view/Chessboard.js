/**
 * @class ExtSample.view.Chessboard
 * @extends Ext.panel.Panelss
 * Description
 */
Ext.define('ExtSample.view.Chessboard', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.chessboard',
	height: 640,
	width: 640,
	layout: 'absolute',
	initComponent: function() {
		var chessBoardPieces = 64;
		var pieces = [];
		var flag = true;
		for (var i = 0; i < chessBoardPieces; i++) {
			var piece;
			var a = (i % 8) * 80;
			var b = parseInt(i / 8) * 80;
			if (i % 8 == 0) {
				flag = !flag;
			}
			if (flag) {
				if (i % 2 == 0) {
					piece = Ext.create('Ext.panel.Panel', {
						height: 80,
						width: 80,
						x: a,
						y: b,
						bodyStyle: {
							'background-color': '#F6CF8A'
						}
					});
				} else {
					piece = Ext.create('Ext.panel.Panel', {
						height: 80,
						width: 80,
						x: a,
						y: b,
						bodyStyle: {
							'background-color': '#554536'
						}
					});
				}
			} else {
				if (i % 2 == 0) {
					piece = Ext.create('Ext.panel.Panel', {
						height: 80,
						width: 80,
						x: a,
						y: b,
						bodyStyle: {
							'background-color': '#554536'
						}
					});
				} else {
					piece = Ext.create('Ext.panel.Panel', {
						height: 80,
						width: 80,
						x: a,
						y: b,
						bodyStyle: {
							'background-color': '#F6CF8A'
						}
					});
				}
			}
			pieces.push(piece);

		};

		var whiteKing = '&#9812';
		var whiteQueen = '&#9813';
		var whiteRook = '&#9814';
		var whiteBishop = '&#9815';
		var whiteKnight = '&#9816';
		var whitePawn = '&#9817';
		var blackKing = '&#9818';
		var blackQueen = '&#9819';
		var blackRook = '&#9820';
		var blackBishop = '&#9821';
		var blackKnight = '&#9822';
		var blackPawn = '&#9823';
		var soldier;
		for (var i = 0; i < pieces.length; i++) {
			var piece = pieces[i];
			if (i < 8) {
				if (i == 7 || i == 0) {
					soldier = Ext.create('Ext.Img', {
						src: './images/whiteRook.png',
						height: 70,
						width: 70
					});

				} else if (i == 6 || i == 1) {
					soldier = Ext.create('Ext.Img', {
						src: './images/whiteBishop.png',
						height: 70,
						width: 70
					});
				} else if (i == 5 || i == 2) {
					soldier = Ext.create('Ext.Img', {
						src: './images/whiteKnight.png',
						height: 70,
						width: 70
					});
				} else if (i == 4) {
					soldier = Ext.create('Ext.Img', {
						src: './images/whiteQueen.png',
						height: 70,
						width: 70
					});
				} else {
					soldier = Ext.create('Ext.Img', {
						src: './images/whiteKing.png',
						height: 70,
						width: 70
					});
				}
			} else if (i >= 8 && i < 16) {
				soldier = Ext.create('Ext.Img', {
					src: './images/whitePawn.png',
					height: 70,
					width: 70
				});
			} else if (i >= 48 && i < 56) {
				soldier = Ext.create('Ext.Img', {
					src: './images/blackPawn.png',
					height: 70,
					width: 70
				});
			} else if (i >= 56 && i < 64) {
				if (i == 63 || i == 56) {
					soldier = Ext.create('Ext.Img', {
						src: './images/blackRook.png',
						height: 70,
						width: 70
					});

				} else if (i == 62 || i == 57) {
					soldier = Ext.create('Ext.Img', {
						src: './images/blackBishop.png',
						height: 70,
						width: 70
					});
				} else if (i == 61 || i == 58) {
					soldier =Ext.create('Ext.Img', {
						src: './images/blackKnight.png',
						height : 70,
						width : 70
					});
				} else if (i == 59) {
					soldier = Ext.create('Ext.Img', {
						src: './images/blackQueen.png',
						height : 70,
						width : 70
					});
				} else {
					soldier = Ext.create('Ext.Img', {
						src: './images/blackKing.png',
						height : 70,
						width : 70
					});
				}
			}
			if (soldier)
				piece.add(soldier);
			soldier = null;
		};
		this.items = pieces;
		this.callParent();
	}
});