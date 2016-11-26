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

  var cmd = editor.addCommand('NewLine', { exec: showNewLine });

    }

});

function showNewLine(e) {

   e.execCommand( 'shiftEnter' );

   // Here if I replace the above line with  e.insertHtml('<br />&nbsp;'); it will work fine but is adding an extra space at the beggining of each line.

}
