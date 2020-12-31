function agrarCalcResize() {
	if(jQuery('body').width() > 980) {
		jQuery('.agrar-calc-target-2-of-3').css('width', ((jQuery('body').width() - jQuery('.et_pb_row.agrar-calc-helper').width()) / 2 + (jQuery('.et_pb_row.agrar-calc-helper').width() * 0.6633) - 2) + 'px');
		jQuery('.agrar-calc-target-1-of-3').css('width', ((jQuery('body').width() - jQuery('.et_pb_row.agrar-calc-helper').width()) / 2 + (jQuery('.et_pb_row.agrar-calc-helper').width() * 0.3333) - 2) + 'px');
	} else {
		jQuery('.agrar-calc-target-2-of-3').css('width', '');
		jQuery('.agrar-calc-target-1-of-3').css('width', '');
	}
}

jQuery(function() {
	jQuery('.et_builder_inner_content').prepend('<div class="et_pb_section agrar-calc-helper" style="height:0 !important; padding:0 !important; margin:0 !important;"><div class="et_pb_row agrar-calc-helper"></div></div>');
    agrarCalcResize();
	jQuery( window ).resize(function() {
        agrarCalcResize();
	});
});