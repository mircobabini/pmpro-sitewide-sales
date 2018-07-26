jQuery( document ).ready(function($) {
	$("#pmpro_sws_discount_code_select").selectWoo();
	$("#pmpro_sws_landing_page_select").selectWoo();
	$("#pmpro_sws_use_banner_select").selectWoo();
	$("#pmpro_sws_hide_levels_select").selectWoo();

	jQuery('.wp-editor-tabs').remove();
	jQuery('#insert-media-button').remove();

	$('#pmpro_sws_discount_code_select').change(function(){
		$('#pmpro_sws_after_discount_code_select').hide();
	});

	$('#pmpro_sws_landing_page_select').change(function(){
		$('#pmpro_sws_after_landing_page_select').hide();
	});

	$('#pmpro_sws_custom_sale_dates').change(function(){
		if(this.checked)
			$('#pmpro_sws_custom_date_select').show();
		else
			$('#pmpro_sws_custom_date_select').hide();
		});
	$('#pmpro_sws_custom_banner_title').change(function(){
		if(this.checked)
			$('#pmpro_sws_custom_title_select').show();
		else
			$('#pmpro_sws_custom_title_select').hide();
		});
});
