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
							'background-color': '#fff'
						}
					});
				} else {
					piece = Ext.create('Ext.panel.Panel', {
						height: 80,
						width: 80,
						x: a,
						y: b,
						bodyStyle: {
							'background-color': '#000'
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
							'background-color': '#000'
						}
					});
				} else {
					piece = Ext.create('Ext.panel.Panel', {
						height: 80,
						width: 80,
						x: a,
						y: b,
						bodyStyle: {
							'background-color': '#fff'
						}
					});
				}
			}
			pieces.push(piece);

		};
		this.items = pieces;
		this.callParent();
	}
});