<template>
  <div id="map" />
</template>
   
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Address } from '@/data/types'

import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
   
// let map  = ref('')
const address = defineModel<Address>()
let currentMarker

const icon = L.divIcon({
	className: 'geo-marker-div',
	iconAnchor: [0, 24],
	popupAnchor: [0, -36],
	html: '<span class="geo-marker" />'
})

   
onMounted(() => {
	const map = L.map('map').setView([56.010561, 92.852557], 13)
	// L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
	// 	maxZoom: 19,
	// }).addTo(map)

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
	}).addTo(map)
   
	map.on('click', function(e) {
		if (currentMarker) {
			map.removeLayer(currentMarker)
		}
		currentMarker = L.marker(e.latlng, {icon: icon}).addTo(map)
		// .bindPopup('You clicked the map at ' + e.latlng.toString())
		// .openPopup()

		fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${e.latlng.lat}&lon=${e.latlng.lng}`)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				if (address.value) {
					address.value.city = data.address.city
					address.value.road = data.address.road
					address.value.house_number = data.address.house_number
					address.value.building = data.address.building
					address.value.entrance = data.address.entrance
					address.value.floor = data.address.floor
					address.value.flat = data.address.flat
				}
			})
	})
})
</script>
   
<style>
   #map  {
    width: 100%;
    height: 100%;
	min-height: 380px;
	border-radius: 12px;
   }
</style>
   