<script>
    import { onMount } from "svelte";
    import L from 'leaflet';
  
    let datapoints = []
    onMount(async () => {
      fetch("https://vda-lab.gitlab.io/datavis-technologies/assets/flights_part.json")
        .then(res => res.json())
        .then(data => datapoints = data)
    });
  
    $: console.log(datapoints)
  
    let map;
  
    onMount(async () => {
      map = L.map("map", {preferCanvas: true }).setView([50.8476,4.3572], 2);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 18
      }).addTo(map);
      let real_brussels = L.marker([50.9010, 4.4856]).addTo(map);
      real_brussels.bindTooltip("Real Brussels airport").openTooltip();
      let brussels_in_datafile = L.marker([51.502,4.807],{markerColor: 'red'}).addTo(map);
      brussels_in_datafile.bindTooltip("Brussels airport in datafile").openTooltip();
    });
  
    $: {
      datapoints.forEach((d) => {
        L.circle([d.from_lat,d.from_long],{
                    stroke: false,
                    color: 'black',
                    radius: 50000} // is radius in meters
                  ).addTo(map);
      })
    }
  </script>
  
  <style>
    #map {
      height: 480px;
    }
  </style>
  
  <svelte:head>
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
      crossorigin="" />
  
    <script
      src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
      crossorigin="">
  
    </script>
  </svelte:head>
  
  <div id="map" />