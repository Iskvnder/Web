
  let map;
  function initMap() {
    // Create the map.
    const myLatLng = { lat: 48.79015467184883,lng:9.18314572092118  };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: { lat:48.79015467184883,lng:9.18314572092118 },
      mapTypeId: "terrain",
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }