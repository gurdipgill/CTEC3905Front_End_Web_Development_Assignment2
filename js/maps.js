function myMap() {
	
	var sandwellcollege = {
		info: '<strong>Sandwell College</strong><br>\
					1 Spon Ln <br> West Bromwich, B70 6AW<br>\
					<a href="https://goo.gl/ncrVt9">Get Directions</a>',
		lat: 52.5151,
		long: -1.9920
	};

	var demontfortuniversity = {
		info: '<strong>De Montfort University</strong><br>\
					Gateway House<br> Leicester, LE1 9BH<br>\
					<a href="https://goo.gl/eSLAQ8">Get Directions</a>',
		lat: 52.6298,
		long: -1.1394
	};

	var universityofwestlondon = {
		info: '<strong>University of West London</strong><br>\r\
					St Marys Rd<br> London, W5 5RF<br>\
					<a href="https://goo.gl/vp1tNJ">Get Directions</a>',
		lat: 51.507259,
		long: -0.303013
	};

	var locations = [
      [sandwellcollege.info, sandwellcollege.lat, sandwellcollege.long, 0],
      [demontfortuniversity.info, demontfortuniversity.lat, demontfortuniversity.long, 1],
      [universityofwestlondon.info, universityofwestlondon.lat, universityofwestlondon.long, 2],
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 5,
		center: new google.maps.LatLng(55.3781, -3.4360),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}