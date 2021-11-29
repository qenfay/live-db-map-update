/* VARIABLES */

// Map Starting Location (i.e NUST)
STARTING_LATITUDE = 33.6425;
STARTING_LONGITUDE = 72.9930;

// Array of all markers with lng, lat and an empty marker attribute. 
MARKER_OBJECTS_JSON_FILE_PATH = `/api/sensorball/geolocation`

MAP_DIV = 'map-canvas'; // The id of the div in which the map will be displayed
ZOOM = 20; // Initial zoom of the map


/* UN-ABSTRACTED IMPLEMENTATION */
// Starting Coordinates (i.e NUST)
window.lat = STARTING_LATITUDE;
window.lng = STARTING_LONGITUDE;

var map; // Map Object
var markerObjectsJSON = MARKER_OBJECTS_JSON_FILE_PATH; // Array of all the Markers
var allmarkers = [];

// The callback function that will be called by the Google Maps API
var initialize = function() {
    
    // Initialise the Map in the div, with specified lat, lng and zoom
    map = new google.maps.Map(document.getElementById(MAP_DIV), {center: {lat: lat, lng: lng}, zoom: ZOOM});
    
    $.getJSON(markerObjectsJSON, function(markerObjects) {

        // Initialise the markers
        for (var i = 0; i < markerObjects.length; ++i) {
            console.log(markerObjects[i]);
            allmarkers[i] = new google.maps.Marker(
                {
                    position:{ lat: markerObjects[i].lat, lng: markerObjects[i].lng},
                    label: markerObjects[i].dname,
                    map: map
                }
            );
        } 
    });

    // set call back function to be part of the window so that API can call it?
    window.initialize = initialize;
};

// Input: Marker, Payload with attributes lat and lng
// Output: Void
// Effect: Map updates Marker with new lat and lng coordinates from Payload
var redraw = function(marker, payload) {
    lat = payload.lat;
    lng = payload.lng;
    marker.setPosition({lat:lat, lng:lng, alt:0});
};



