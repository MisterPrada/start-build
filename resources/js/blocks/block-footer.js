(function ($) {
	const initializeBlock = function () {

		let mapStyles = [
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#444444"
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"color": "#f2f2f2"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 45
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "all",
				"stylers": [
					{
						"color": "#44baea"
					},
					{
						"visibility": "on"
					}
				]
			}
		];

		function initMapFooter( $el ) {
			let lat = parseFloat( $el.attr('data-marker-lat') ),
				lng = parseFloat( $el.attr('data-marker-lng') );

			const map = new google.maps.Map( $el[0], {
				center: { lat: lat, lng: lng },
				zoom: 14,
				styles: mapStyles,
				disableDefaultUI: true,
				draggable: true,
				gestureHandling: 'cooperative'
			});

			let markerSVG = window.btoa('<svg width="40" height="55" viewBox="0 0 40 55" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
				'<path d="M40 20C40 31.0457 20 55 20 55C20 55 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z" fill="#0971CE"/>\n' +
				'<path d="M32.5663 13H14.2456C14.076 12.9994 13.9092 13.0436 13.7619 13.1281C13.6146 13.2126 13.4919 13.3346 13.4062 13.4818L6.0824 26.0874C6.02895 26.1794 6.00053 26.284 6.00001 26.3905C5.99948 26.4971 6.02688 26.6019 6.07942 26.6944C6.13197 26.7869 6.20782 26.8639 6.29933 26.9175C6.39084 26.9712 6.49478 26.9996 6.60069 27H27.3326C27.58 27.0006 27.8239 26.9411 28.0436 26.8267C28.2632 26.7122 28.4522 26.5461 28.5945 26.3425L31.4902 22.2502C31.6211 22.0604 31.6912 21.835 31.6912 21.604C31.6912 21.3731 31.6211 21.1477 31.4902 20.9579L31.1353 20.4308C31.1066 20.3868 31.0899 20.336 31.0868 20.2835C31.0837 20.231 31.0944 20.1785 31.1178 20.1315C31.1412 20.0844 31.1764 20.0444 31.22 20.0153C31.2637 19.9863 31.3141 19.9693 31.3663 19.966L32.2395 19.9036C32.3802 19.8956 32.5168 19.8532 32.6375 19.7801C32.7582 19.707 32.8595 19.6055 32.9324 19.4842L34.6225 16.7636C34.8684 16.3758 34.9993 15.9255 35 15.4656C35 14.8146 34.7441 14.19 34.2882 13.7281C33.8323 13.2662 33.2133 13.0045 32.5663 13ZM24.8819 22.1935L24.1665 23.3781C24.1165 23.4545 24.0489 23.5176 23.9694 23.5621C23.89 23.6065 23.801 23.6309 23.7101 23.6332H14.1329C14.0828 23.6335 14.0335 23.6203 13.9901 23.595C13.9467 23.5697 13.9108 23.5333 13.8861 23.4894C13.8614 23.4455 13.8488 23.3957 13.8496 23.3453C13.8504 23.2948 13.8646 23.2455 13.8907 23.2024L14.578 22.0688C14.6285 21.9853 14.6997 21.9163 14.7846 21.8686C14.8695 21.8209 14.9652 21.7962 15.0625 21.7968H24.6397C24.6862 21.7964 24.7321 21.8082 24.7728 21.8309C24.8135 21.8536 24.8477 21.8865 24.872 21.9264C24.8964 21.9663 24.9101 22.0119 24.9118 22.0587C24.9136 22.1055 24.9033 22.1519 24.8819 22.1935ZM27.7607 17.0923L27.0396 18.2769C26.9897 18.3533 26.9221 18.4164 26.8426 18.4608C26.7631 18.5053 26.6742 18.5297 26.5833 18.532H17.0342C16.9836 18.5333 16.9336 18.5209 16.8894 18.496C16.8452 18.4712 16.8085 18.4348 16.7831 18.3907C16.7578 18.3466 16.7447 18.2964 16.7452 18.2455C16.7458 18.1946 16.76 18.1447 16.7864 18.1012L17.4793 16.9676C17.5294 16.8849 17.5997 16.8164 17.6835 16.7688C17.7673 16.7212 17.8619 16.696 17.9582 16.6956H27.5354C27.579 16.6988 27.6211 16.7127 27.6582 16.7359C27.6953 16.7591 27.7262 16.791 27.7483 16.8289C27.7705 16.8668 27.7832 16.9095 27.7853 16.9534C27.7875 16.9973 27.7791 17.0411 27.7607 17.081V17.0923Z" fill="white"/>\n' +
				'</svg>\n');

			const marker = new google.maps.Marker({
				position: { lat: lat, lng: lng },
				map: map,
				icon: {
					url: `data:image/svg+xml;base64,${markerSVG}`,
					scaledSize: new google.maps.Size(40, 55),
				},
			});
		}

		let $footerMap = $('#footer-map');
		if ( $footerMap.length ) {
			initMapFooter( $footerMap );
		}

	};

	window.acf.addAction("ready", function () {
		const siteEditor = window.acf.isGutenberg();

		if (!siteEditor) {
			initializeBlock();
		}
	});
})(jQuery);
