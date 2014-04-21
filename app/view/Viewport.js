Ext.define('ExtSample.view.Viewport', {
	extend: 'Ext.container.Viewport',
	layout: {
		type: 'hbox',
		align: 'middle',
		pack: 'center'
	},
	initComponent: function() {
		this.items =
			[/*{
			xtype: 'panel',
			width: 260,
			title: 'Puzzle',
			draggable : true,
			bbar: [{
				xtype: 'label',
				text: 'Number of moves : '
			}, {
				xtype: 'numberfield',
				itemId: 'movesCount',
				readOnly: true,
				value: 0,
				width : 50
			}],

			items: [{
				xtype: 'puzzle'
			}, {
				xtype: 'panel',
				layout: {
					type: 'fit',
					align: 'middle',
					pack: 'center'
				},
				items: [{
					xtype: 'button',
					text: 'Reset',
					action : 'shufflePuzzle'
				}]
			}]
		}*/{
			xtype : 'chessboard'
		}];
		this.callParent();
	}
});