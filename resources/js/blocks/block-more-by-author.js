
import Swiper, {Grid, Navigation, Pagination} from "swiper";
import adminInitializeBlock from "../modules/editor";

(function ($) {
	const sectionSelector = '.section-more-by-author'

	const initializeBlock = function (section = false) {
		const $section = section ? $(section) : $(sectionSelector);

		$section.each( function() {
			const $section = $( this ),
				$slider = $section.find('.js-more-by-author'),
				$sliderNav = $section.find('.slider-more-by-author__nav'),
				$buttonPrev = $sliderNav.find('.slider-more-by-author__slider-control--prev'),
				$buttonNext = $sliderNav.find('.slider-more-by-author__slider-control--next'),
				$sliderPagination = $sliderNav.find('.slider-more-by-author__pagination');

			let swiper = new Swiper($slider[0], {
				modules: [Navigation, Pagination, Grid],
				observer: true,
				breakpoints: {
					0: {
						slidesPerView: 1,
						slidesPerGroup: 1,
						grid: {
							fill: 'row',
							rows: 3,
						},
					},
					768: {
						slidesPerView: 2,
						slidesPerGroup: 2,
						grid: {
							fill: 'row',
							rows: 2,
						},
					},
					1280: {
						slidesPerView: 4,
						slidesPerGroup: 4,
						grid: {
							fill: 'row',
							rows: 1,
						},
					},
				},
				navigation: {
					nextEl: $buttonNext[0],
					prevEl: $buttonPrev[0],
				},
				pagination: {
					el: $sliderPagination[0],
					type: "fraction",
					formatFractionCurrent: function (currentNum) {
						return currentNum < 10 ? `0${currentNum}` : currentNum;
					},
					formatFractionTotal: function (totalNum) {
						return totalNum < 10 ? `0${totalNum}` : totalNum;
					},
					renderFraction: function (currentClass, totalClass) {
						return (
							'<span class="' +
							currentClass +
							'"></span>' +
							"/" +
							'<span class="' +
							totalClass +
							'"></span>'
						);
					},
				},
			})
		})
	};
		
	window.acf.addAction("ready", function () {
        const siteEditor = window.acf.isGutenberg();
 
        if (siteEditor) {
            // site editor (back-end)
 
            window.acf.addAction(
                'render_block_preview/type=more-by-author',
                adminInitializeBlock( initializeBlock, sectionSelector )
            );
        } else {
            // front-end
			$(document).ready(function(){
				initializeBlock();
			});
        }
    });
})(jQuery);
