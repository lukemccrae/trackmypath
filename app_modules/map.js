module.export = {
    initMap: function(lat, long) {

        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 39.7576958,
                long: -105.00724629999999
            },
            zoom: 2
        });
    },

    marker: function(latPosition, longPosition) {
        var myLatLng = {
            lat: latPosition,
            lng: longPosition
        };

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: myLatLng
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!'
        });
    },
    test: function() {
        console.log("modules working");
    }
}
