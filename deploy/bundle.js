(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
