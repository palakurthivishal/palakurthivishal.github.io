/**
 * @class ExtSample.controller.PuzzleController
 * @extends Ext.app.Controllerss
 * Description
 */
Ext.define('ExtSample.controller.PuzzleController', {
	extend: 'Ext.app.Controller',
	refs: [{
		ref: 'puzzleView',
		selector: 'puzzle'
	}],
	init: function() {
		this.control({
			'puzzle button': {
				click: function(btn) {
					var clickedBtnX = btn.getX();
					var clickedBtnY = btn.getY();
					var dummyBtn = this.getPuzzleView().down('#dummyBtn');
					var dummyBtnX = dummyBtn.getX();
					var dummyBtnY = dummyBtn.getY();
					if ( (  (dummyBtnX == clickedBtnX) && (dummyBtnY - clickedBtnY == 40 || clickedBtnY - dummyBtnY == 40)) || ( (dummyBtnY == clickedBtnY ) && (dummyBtnX - clickedBtnX == 40 || clickedBtnX - dummyBtnX == 40))) {
						btn.setXY([dummyBtnX, dummyBtnY], true);
						var swapVar  = dummyBtn.place;
						dummyBtn.place = btn.place;
						btn.place = swapVar;
						dummyBtn.setXY([clickedBtnX, clickedBtnY], true);
						var countField = Ext.ComponentQuery.query('numberfield#movesCount')[0];
						countField.setValue(countField.getValue() + 1);
						this.fnCheckPuzzle();
					}
				}
			},
			'button[action=shufflePuzzle]': {
				click: this.fnShufflePuzzle
			}
		});
	},
	fnShufflePuzzle: function() {
		var puzzleBox = this.getPuzzleView();
		puzzleBox.removeAll();

		var piecesCount = 15;
		var a = 0;
		var b = 0;
		var pieces = [];
		for (var i = 0; i < piecesCount; i++) {
			var piece = Ext.create('ExtSample.view.PuzzlePiece', {
				text: (i + 1).toString(),
				itemId: (i + 1).toString()
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
			item.place = i + 1;
			a = a + 40;
		};
		var emptyPlace = Ext.create('Ext.form.Label', {
			itemId: 'dummyBtn',
			x: 120,
			y: 120,
			place : 16
		});
		pieces.push(emptyPlace);
		puzzleBox.add(pieces);
		Ext.ComponentQuery.query('numberfield#movesCount')[0].setValue(0);
	},
	fnCheckPuzzle: function() {
		var puzzleBoxItems = this.getPuzzleView().items.items;
		var flag = true;
		for (var i = 0; i < puzzleBoxItems.length - 1; i++) {
			var item = puzzleBoxItems[i];
			if (item.place != item.getText()) {
				flag = false;
				break;
			}
		};
		if (flag)
			Ext.Msg.alert('Success', 'You have solved the puzzle in ' + Ext.ComponentQuery.query('numberfield#movesCount')[0].getValue() + 'moves');
	}
});