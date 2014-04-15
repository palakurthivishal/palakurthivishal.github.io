/**
 * @class ExtSample.view.Puzzle
 * @extends Ext.container.Container'
 * Description
 */
Ext.define('ExtSample.view.Puzzle', {
	extend: 'Ext.panel.Panel',
	layout: 'absolute',
	margin: 50,
	height: 160,
	width: 160,
	style : {
		borderRadius : '5px'
	},
	alias: 'widget.puzzle',
	initComponent: function() {
		var piecesCount = 15;
		var a = 0;
		var b = 0;
		var loadedPieces = [];
		var getRandomInt = function(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		};
		this.items = [];
		var pieces = [];
		for (var i = 0; i < piecesCount; i++) {
			var piece = Ext.create('ExtSample.view.PuzzlePiece', {
				text: (i + 1).toString(),
				itemId : (i+1).toString()
			});
			pieces.push(piece);
		}
		pieces.sort(function() {
			return Math.round(Math.random()) - 0.5;
		});
		for (var i = 0; i < pieces.length; i++) {
			if (a > 120) {
				a = 0;
				b = b + 40;
			}
			var item = pieces[i];
			item.x = a;
			item.y = b;
			item.place = i+1;
			a = a + 40;
		};
		var emptyPlace = Ext.create('Ext.form.Label', {
			itemId : 'dummyBtn',
			x : 120,
			y : 120,
			place : 16
		});
		pieces.push(emptyPlace);
		this.items = pieces;
		this.callParent();
	}
});