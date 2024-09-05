
function highLightFeature(e){
var layer = e.target;

layer.setStyle({
        fillColor: 'pink', 
        fillOpacity: 0.5,  
        weight: 2,
        opacity: 1,
        color: '#ffffff',
        dashArray: '3'
    });

if(!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
layer.bringToFront();

} }
	

   function resetHighlight(e) {
      dcdb.resetStyle(e.target);
    
    }

    function zoomToFeature(e) {
      map.fitBounds(e.target.getBounds());
    }

   


function zoomToAll(e){
map.fitBounds(dcdb.getBounds());
}

    function onEachFeature(feature, layer) {
           var popupContent = "<p><b>Name: </b>"+ feature.properties.name +"</p>";

            layer.bindPopup(popupContent);
       layer.on({
       mouseover: highLightFeature,
        mouseout: resetHighlight,
       click: zoomToFeature
       //dblclick:zoomToAll
       
      });
}


        function forEachFeature(feature, layer) {

            var popupContent = "<p><b>Name: </b>"+ Feature.properties.name +"</p>";

            layer.bindPopup(popupContent);


            layer.on("click", function (e) { 
                dcdb.setStyle(style); //resets layer colors
                layer.setStyle(highlight);  
                layer.zoomtoFeature();//highlights selected.
            }); 
        }

