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
		var x_index = 'a';
		var y_index = 0;
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
						border: 0,
						itemId: (x_index + y_index),
						type: 'pieceHolder',
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
						border: 0,
						itemId: (x_index + y_index),
						type: 'pieceHolder',
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
						border: 0,
						itemId: (x_index + y_index),
						type: 'pieceHolder',
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
						border: 0,
						itemId: (x_index + y_index),
						type: 'pieceHolder',
						x: a,
						y: b,
						bodyStyle: {
							'background-color': '#F6CF8A'
						}
					});
				}
			}
			x_index = String.fromCharCode(x_index.charCodeAt() + 1);
			if (parseInt(i % 8) == 0)
				x_index = 'a';
			y_index = parseInt(i / 8) + 1;
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
					soldier = this.fnCreatePiece('whiteRook');


				} else if (i == 5 || i == 2) {
					soldier = this.fnCreatePiece('whiteBishop');

				} else if (i == 6 || i == 1) {
					soldier = this.fnCreatePiece('whiteKnight');

				} else if (i == 4) {
					soldier = this.fnCreatePiece('whiteQueen');

				} else {
					soldier = this.fnCreatePiece('whiteKing');

				}
			} else if (i >= 8 && i < 16) {
				soldier = this.fnCreatePiece('whitePawn');

			} else if (i >= 48 && i < 56) {
				soldier = this.fnCreatePiece('blackPawn');

			} else if (i >= 56 && i < 64) {
				if (i == 63 || i == 56) {
					soldier = this.fnCreatePiece('blackRook');


				} else if (i == 61 || i == 58) {
					soldier = this.fnCreatePiece('blackBishop');

				} else if (i == 62 || i == 57) {
					soldier = this.fnCreatePiece('blackKnight');

				} else if (i == 59) {
					soldier = this.fnCreatePiece('blackQueen');

				} else {
					soldier = this.fnCreatePiece('blackKing');

				}
			}
			if (soldier)
				piece.add(soldier);
			soldier = null;
		};
		this.items = pieces;
		this.callParent();
	},
	fnCreatePiece: function(type) {
		var soldier = Ext.create('Ext.Img', {
			src: './images/' + type + '.png',
			height: 70,
			width: 70
		});
		return soldier;
	}
});