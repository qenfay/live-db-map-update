// function to update markers from JSON file
function updateMarkersWithJSONFile() {
    $.getJSON(markerObjectsJSON, function(markerObjects) {
        for (var i = 0; i < allmarkers.length; ++i) {
            console.log(markerObjects[i])
            redraw(allmarkers[i], {lat: markerObjects[i].lat, lng: markerObjects[i].lng})
        } 
    });
}


// Force marker update
document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name === 's') {
       updateMarkersWithJSONFile();
    }
}, false);


// Run marker update every 1 second
// TODO: Use a method that is less computationally taxing
setInterval(updateMarkersWithJSONFile, 1000);






