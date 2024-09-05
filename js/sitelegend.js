
function getColour(d) {
    switch (d) {
//case 'National Park' : return 'orange';
case 'Windpump' : return "pink";
//case 'Forest' : return "lightgreen";
case 'Water Tank' : return "purple";
case 'Yard' : return "white";
case 'Bore' : return "DARKKHAKI";
//case 'Waterhole': return "darkblue";
        default: return '#fff;'
    }
};

var sitelegend = L.control({position: 'topright'});

sitelegend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    sitetypes = ['Windpump', 'Water Tank','Yard','Bore'];
      div.innerHTML += '<b> PASTORAL </b><br><b> HERITAGE </b><br>'
      div.innerHTML +=  '<b> &nbsp;&nbsp;Sites</b><br>'
    for (var i = 0; i < sitetypes.length; i++) {
        div.innerHTML +=
            '<i class="circle" style=" background:' + getColour(sitetypes[i]) + '"></i> ' + (sitetypes[i] ? sitetypes[i] + '<br>' : '+' +'<br>' + '<br>');
    }
    
    return div;
};
//sitelegend.addTo(map);