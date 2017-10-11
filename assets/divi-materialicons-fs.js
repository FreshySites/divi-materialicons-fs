(function( $ ) {
	'use strict';
		
	function fs_dmi_check( string ) {
		if( ! string ) {
			return false;
		}
		
		var checkpoint = string.substring(0, 3);
		if( checkpoint === 'mi-' ) {
			return true;
		} else {
			return false;
		}
	}
    
    // Blurb
	$('div#page-container').find('.et-pb-icon').each( function() {
		var checkpoint = fs_dmi_check( $(this).html() );
		
		if( checkpoint ) {
			var icon = $(this).html().substr(3);
			$(this).addClass('divi_materialicons').html( icon );
		}
	});
	
	// Button, Gallery
	$('div#page-container').find('.et_pb_button,.et_overlay').each( function() {
		var checkpoint = fs_dmi_check( $(this).attr('data-icon') );
		
		if( checkpoint ) {
			var icon = $(this).attr('data-icon').substr(3);
			$(this).addClass('divi_materialicons').attr( 'data-icon', icon );
		}
	});
	
})( jQuery );