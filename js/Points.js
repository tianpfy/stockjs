var Places = {radius: 5,fillColor: "black", color: "black", weight: 1, opacity: 1, fillOpacity: 1}
var Homes = {radius: 10,fillColor: "orange", color: "orange", weight: 1, opacity: 1, fillOpacity: 1}
var Steads = {radius: 8,fillColor: "yellow", color: "yellow", weight: 1, opacity: 1, fillOpacity: 1}
var Water = {radius: 5,fillColor: "darkblue", color: "blue", weight: 1, opacity: 1, fillOpacity: 1}
            

function Asset (feature){
switch(feature.properties.feature){
case 'Yard' : return {radius: 5,fillColor: "White", color: "White", weight: 1, opacity: 1, fillOpacity: 1}; break;
case 'Water Tank' : return {radius: 5,fillColor: "Purple", color: "Purple", weight: 1, opacity: 1, fillOpacity: 1}; break;
case 'Windpump' : return {radius: 5,fillColor: "Pink", color: "Pink", weight: 1, opacity: 1, fillOpacity: 1}; break;
case 'Bore' : return {radius: 5,fillColor: "DARKKHAKI", color: "DARKKHAKI", weight: 1, opacity: 1, fillOpacity: 1}; break;
        }}


function Mplaces(feature, latlng) { return L.circleMarker(latlng, Places)}

function Mhomes(feature, latlng) {return L.circleMarker(latlng, Homes)}

function Msteads(feature, latlng) {return L.circleMarker(latlng, Steads)}

function Massets(feature, latlng) {return L.circleMarker(latlng, Asset)}

function Mwater(feature, latlng) {return L.circleMarker(latlng, Water)}