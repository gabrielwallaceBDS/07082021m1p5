
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: o},
        zoom: 5
       
    

    });
}

<script src="https://maps.googleapis.com/maps/api/js?key=YAPIK&callback=initMap" async defer></script>