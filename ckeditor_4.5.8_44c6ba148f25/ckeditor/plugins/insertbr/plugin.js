CKEDITOR.plugins.add('insertbr',
{
    init: function (editor) {
        var pluginName = 'insertbr';
        editor.ui.addButton('insertbr',
            {
                label: 'Insert BR',
                command: 'NewLine',
                icon: CKEDITOR.plugins.getPath('insertbr') + 'icons/InsertParagraph.png'
            });

	var cmd = editor.addCommand('NewLine', { exec: insertbr });
    }

});

function insertbr(e) {
   e.execCommand( 'shiftEnter' );
}
