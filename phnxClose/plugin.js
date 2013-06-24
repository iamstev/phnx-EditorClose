// this plugin is custom, you must have jquery and phnx-Modals in place

CKEDITOR.plugins.add( 'phnxClose', {
    icons: 'close',
    init: function( editor ) {
        editor.addCommand( 'closeWindow', {
        	exec: function( editor ) {
        		var aaa = '#' + CKEDITOR.currentInstance.name;
        		var bbb = $(aaa).closest('.modal-holder').attr('id');
            	hideModal(bbb);
            	CKEDITOR.currentInstance.setData('');
        	}
        });
        
        editor.ui.addButton( 'Close', {
			label: 'Close Edit Window',
			command: 'closeWindow',
			toolbar: 'document'
		});
		
    }
});