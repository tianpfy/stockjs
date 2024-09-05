 
  function pop_towns(feature, layer) {
            var popupContent = '<p>SETTLEMENT</p>  <table><tr><th scope="row"></th><td>' + "  " + (feature.properties['name'] !== null ? Autolinker.link(String(feature.properties['name'])) : '') + '</td></tr></table>';
            layer.bindPopup(popupContent);
        };

  function pop_names(feature, layer) {
            var popupContent = '<p>PLACE</p> <table><tr><th scope="row"></th><td>' + "  " + (feature.properties['name'] !== null ? Autolinker.link(String(feature.properties['name'])) : '') + '</td></tr></table>';
            layer.bindPopup(popupContent);
        };

function pop_assets(feature, layer) {
            var popupContent = '<table><tr><th scope="row"></th><td>' + "  " + (feature.properties['gid'] !== null ? Autolinker.link(String(feature.properties['gid'])) : '') +'</td></tr><tr><th scope="row">name</th><td>' + (feature.properties['name'] !== null ? Autolinker.link(String(feature.properties['name'])) : '') +  '</td></tr><tr><th scope="row">feature</th><td>' + (feature.properties['feature'] !== null ? Autolinker.link(String(feature.properties['feature'])) : '') + '</td></tr></table>';
            layer.bindPopup(popupContent);
        };

function pop_steads(feature, layer) {
            var popupContent = '<p>HOMESTEAD</> <table><tr><th scope="row"></th><td>' +  "  " + (feature.properties['name'] !== null ? Autolinker.link(String(feature.properties['name'])) : '') +'</td></tr><tr></table>';
            layer.bindPopup(popupContent);
        };

function pop_gov(feature, layer) {
            var popupContent = '<p> SHIRE </p> <table><tr><th scope="row"></th><td>' + "  " +(feature.properties['name'] !== null ? Autolinker.link(String(feature.properties['name'])) : '') +'</td></tr></table>';
            layer.bindPopup(popupContent);
        };



function pop_forest(feature, layer) {
            var popupContent = '<p>FOREST</p><table><tr><th scope="row"></th><td>' + " " + (feature.properties['feat_name'] !== null ? Autolinker.link(String(feature.properties['feat_name'])) : '') +'</td></tr></table>';
            layer.bindPopup(popupContent);
        };

function pop_npark(feature, layer) {
            var popupContent = '<p>NATIONAL PARK</p><table><tr><th scope="row"></th><td>' + " " + (feature.properties['feat_name'] !== null ? Autolinker.link(String(feature.properties['feat_name'])) : '') +'</td></tr></table>';
            layer.bindPopup(popupContent);
        };

function pop_water(feature, layer) {
            var popupContent = '<p>WATER HOLE</p><table><tr><th scope="row"></th><td>' + " " + (feature.properties['featuretyp'] !== null ? Autolinker.link(String(feature.properties['featuretyp'])) : '') +'</td></tr></table>';
            layer.bindPopup(popupContent);
        };


function pop_shire(feature, layer) {
            var popupContent = '<p>SHIRE</p><table><tr><th scope="row"></th><td>' + " " + (feature.properties['lga'] !== null ? Autolinker.link(String(feature.properties['lga'])) : '') +'</td></tr></table>';
            layer.bindPopup(popupContent);
        };

function pop_dcdb(feature, layer) {
            var popupContent = '<p>PROPERTY NAME</p><table><tr><th scope="row"></th><td>' + " " + (feature.properties['name'] !== null ? Autolinker.link(String(feature.properties['name'])) : '') +'</td></tr></table>';
            layer.bindPopup(popupContent);
        };
function popUp(f,l){
    var out = [];
    if (f.properties){
        for(key in f.properties){
            out.push(key+": " + f.properties[key]);
        }
        l.bindPopup(out.join("<br />"));
    }
}