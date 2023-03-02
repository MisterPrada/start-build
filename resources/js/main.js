/*
 * Modules
 */

import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/collapse";
import "./modules/hide-preloader";
import "./modules/horizontal-scroll";
import hideFocusOnDesktop from "./modules/hideFocusOnDesktop";
import modalVideoLogic from "./modules/modalVideoLogic";
import modalYoutubeVideoLogic from "./modules/modalYoutubeVideoLogic";
import updateStyleVariables from "./modules/resize-dependent";


const admin = function() {
	setTimeout(() => {
		updateStyleVariables();
	}, 2000);
}

const front = function() {
	const $body = $('body');

	$body.removeClass('scroll-off');

	updateStyleVariables();
	modalVideoLogic();
	modalYoutubeVideoLogic();

	// This code block always will be in the end!
	hideFocusOnDesktop();
}


$(function () {
	if ( $('body').hasClass('wp-admin') || $('body').hasClass('block-editor-iframe__body') ) {
		admin();
	} else {
		front();
	}
});

function initMap() {
	return;
}