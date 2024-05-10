window.addEventListener('load', function() {
    map.setView([24.489100647544756, 39.55075879410006, -0.09], 18); // set the map view to the initial position
  });

var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:1
}).fitBounds([[24.487606893653542,39.54802571354866],[24.49059438369755,39.553491874651506]]);
var hash = new L.Hash(map);
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
L.control.locate({locateOptions: {maxZoom: 19}}).addTo(map);
var bounds_group = new L.featureGroup([]);
function setBounds() {
}

map.createPane('pane_OSMStandard_0');
map.getPane('pane_OSMStandard_0').style.zIndex = 100;
var layer_OSMStandard_0 = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    pane: 'pane_OSMStandard_0',
    opacity: 1.0,
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19
});
layer_OSMStandard_0;
map.addLayer(layer_OSMStandard_0);

document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control")[0].style.display="none";
document.getElementsByClassName("leaflet-control-attribution leaflet-control")[0].style.display="none";
function openDirectionpopup() {

  var startPoint = L.latLng(24.490183, 39.550859); // Starting point
var endPoint = L.latLng(24.489558,39.549599); // Destination point

var startMarker = null;
var endMarker = null;
var routeControl = null;
var routeLayer = null;

/* var taxiIcon = L.icon({
      iconUrl: 'img/taxi.png',
      iconSize: [12, 12]
  })
  Smarker = L.marker([24.488703169896223, 39.54926519081561]/*, { icon: taxiIcon }).addTo(map);
  */
map.on('click', function (e) {
  if (startMarker === null) {
    startMarker = L.marker(e.latlng, { draggable: true }).addTo(map);
    startMarker.on('dragend', updateWaypoints);
  } else if (endMarker === null) {
    endMarker = L.marker(e.latlng, { draggable: true }).addTo(map);
    endMarker.on('dragend', updateWaypoints);
    map.off('click');
    calculateRoute();
  }
});

function updateWaypoints() {
  var newStartPoint = startMarker.getLatLng();
  var newEndPoint = endMarker.getLatLng();

  if (routeControl !== null) {
    map.removeControl(routeControl);
  }

  routeControl = L.Routing.control({
    waypoints: [newStartPoint, newEndPoint],
    routeLine: function (route) {
      var line = L.Routing.line(route, {
        styles: [{ color: '#0066ff', opacity: 0.8, weight: 6 }]
      });
      routeLayer = line.getLayer();
      return line;
    }
  }).addTo(map);
}

function calculateRoute() {
  var waypoints = [startMarker.getLatLng(), endMarker.getLatLng()];

  if (routeControl !== null) {
    map.removeControl(routeControl);
  }

  routeControl = L.Routing.control({
    waypoints: waypoints,
    routeLine: function (route) {
      var line = L.Routing.line(route, {
        styles: [{ color: '#0066ff', opacity: 0.8, weight: 6 }]
      });
      routeLayer = line.getLayer();
      return line;
    }
  }).addTo(map);
}

routeControl = L.Routing.control({
  waypoints: [startPoint, endPoint],
  routeLine: function (route) {
    var line = L.Routing.line(route, {
      styles: [{ color: '#0066ff', opacity: 0.8, weight: 6 }]
    });
    routeLayer = line.getLayer();
    return line;
  }
  
}).addTo(map);
routeControl._container.style.display = "none";
    map.off('click');

}
//buildings floors group layers

var layersGroup_233 = new L.layerGroup([]);
var layersGroup_209 = new L.layerGroup([]);
var layersGroup_212 = new L.layerGroup([]);
var layersGroup_239 = new L.layerGroup([]);
var layersGroup_228 = new L.layerGroup([]);
var layersGroup_205 = new L.layerGroup([]);
var layersGroup_204 = new L.layerGroup([]);
var layersGroup_203 = new L.layerGroup([]);
var layersGroup_231 = new L.layerGroup([]);
var layersGroup_224 = new L.layerGroup([]);
var layersGroup_235 = new L.layerGroup([]);
var layersGroup_234 = new L.layerGroup([]);
var layersGroup_225 = new L.layerGroup([]);
var layersGroup_226 = new L.layerGroup([]);
var layersGroup_223 = new L.layerGroup([]);
var layersGroup_222 = new L.layerGroup([]);
var layersGroup_232 = new L.layerGroup([]);
var layersGroup_201 = new L.layerGroup([]);
var layersGroup_230 = new L.layerGroup([]);
var layersGroup_229 = new L.layerGroup([]);
var layersGroup_227 = new L.layerGroup([]);


//link floors and markers in group layers
var layersGroupGFTV = new L.layerGroup([]);
var layersGroupF1TV = new L.layerGroup([]);
var layersGroupF2TV = new L.layerGroup([]);
var layersGroupF3TV = new L.layerGroup([]);
var layersGroupGFjaz = new L.layerGroup([]);
var layersGroupFFjaz = new L.layerGroup([]);
var layersGroupSFjaz = new L.layerGroup([]);
var layersGroupGFlibrary = new L.layerGroup([]);
var layersGroupFFlibrary = new L.layerGroup([]);
var layersGroupSFlibrary = new L.layerGroup([]);
var layersGroupGFclinic = new L.layerGroup([]);
var layersGroupFFclinic = new L.layerGroup([]);
var layersGroupSFclinic = new L.layerGroup([]);
var layersGroupGFDinstry = new L.layerGroup([]);
var layersGroupFFDinstry = new L.layerGroup([]);
var layersGroupSFDinstry = new L.layerGroup([]);
var layersGroupGFPharmacy = new L.layerGroup([]);
var layersGroupFFPharmacy = new L.layerGroup([]);
var layersGroupSFPharmacy = new L.layerGroup([]);
var layersGroupGFBusiness = new L.layerGroup([]);
var layersGroupFFBusiness = new L.layerGroup([]);
var layersGroupSFBusiness = new L.layerGroup([]);



function style_yellowBase_1_0() {
    return {
        pane: 'pane_yellowBase_1',
        opacity: 1,
        color: 'rgba(255,255,229,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,229,1.0)',
        interactive: false,
    }
}
map.createPane('pane_yellowBase_1');
map.getPane('pane_yellowBase_1').style.zIndex = 401;
map.getPane('pane_yellowBase_1').style['mix-blend-mode'] = 'normal';
var layer_yellowBase_1 = new L.geoJson(json_yellowBase_1, {
    attribution: '',
    interactive: false,
    dataVar: 'json_yellowBase_1',
    layerName: 'layer_yellowBase_1',
    style: style_yellowBase_1_0,
});
bounds_group.addLayer(layer_yellowBase_1);
map.addLayer(layer_yellowBase_1);
function pop_underStructure_2(feature, layer) {
    var popupContent = `

<div class="container"> 
<table class="table table-striped"> 
<div style="text-align:right;" 
class="row"> 
<div class="col"> مبنى تحت الإنشاء ${feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : ''}
 </div> </div> </table>
  </div> `
    layer.bindPopup(popupContent, {maxHeight: 310});
}

var pattern_underStructure_2_0 = new L.StripePattern({
    weight: 0.3,
    spaceWeight: 2.0,
    color: '#000000',
    opacity: 0.3,
    spaceOpacity: 0,
    angle: 315
});
pattern_underStructure_2_0.addTo(map);
function style_underStructure_2_0() {
    return {
        pane: 'pane_underStructure_2',
        stroke: false,
        fillOpacity: 1,
        fillPattern: pattern_underStructure_2_0,
        interactive: true,
    }
}
function style_underStructure_2_1() {
    return {
        pane: 'pane_underStructure_2',
        opacity: 1,
        color: 'rgba(0,0,0,0.3)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 2.0,
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_underStructure_2');
map.getPane('pane_underStructure_2').style.zIndex = 402;
map.getPane('pane_underStructure_2').style['mix-blend-mode'] = 'normal';
var layer_underStructure_2 = new L.geoJson.multiStyle(json_underStructure_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_underStructure_2',
    layerName: 'layer_underStructure_2',
    pane: 'pane_underStructure_2',
    onEachFeature: pop_underStructure_2,
    styles: [style_underStructure_2_0,style_underStructure_2_1,]
});
bounds_group.addLayer(layer_underStructure_2);
map.addLayer(layer_underStructure_2);

function style_boundry1_3_0() {
    return {
        pane: 'pane_boundry1_3',
        opacity: 1,
        color: 'rgba(224,224,224,1.0)',
        dashArray: '',
        lineCap: 'round',
        lineJoin: 'round',
        weight: 1.0,
        fillOpacity: 0,
        interactive: false,
    }
}
map.createPane('pane_boundry1_3');
map.getPane('pane_boundry1_3').style.zIndex = 403;
map.getPane('pane_boundry1_3').style['mix-blend-mode'] = 'normal';
var layer_boundry1_3 = new L.geoJson(json_boundry1_3, {
    attribution: '',
    interactive: false,
    dataVar: 'json_boundry1_3',
    layerName: 'layer_boundry1_3',
    pane: 'pane_boundry1_3',
    style: style_boundry1_3_0,
});
bounds_group.addLayer(layer_boundry1_3);
map.addLayer(layer_boundry1_3);
function pop_boardingHouse_4(feature, layer) {
    var popupContent = `

<div class="container"> <div style="text-align:right;" class="row"> <div class="col-12"> مبنى سكن الطالبات تحت الإنشاء رقم ${feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : ''} </div> </div> </div> `
    layer.bindPopup(popupContent, {maxHeight: 310});
}

var pattern_boardingHouse_4_0 = new L.StripePattern({
    weight: 0.3,
    spaceWeight: 2.0,
    color: '#000000',
    opacity: 0.3,
    spaceOpacity: 0,
    angle: 315
});
pattern_boardingHouse_4_0.addTo(map);
function style_boardingHouse_4_0() {
    return {
        pane: 'pane_boardingHouse_4',
        stroke: false,
        fillOpacity: 1,
        fillPattern: pattern_boardingHouse_4_0,
        interactive: true,
    }
}
function style_boardingHouse_4_1() {
    return {
        pane: 'pane_boardingHouse_4',
        opacity: 1,
        color: 'rgba(0,0,0,0.3)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 2.0,
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_boardingHouse_4');
map.getPane('pane_boardingHouse_4').style.zIndex = 404;
map.getPane('pane_boardingHouse_4').style['mix-blend-mode'] = 'normal';
var layer_boardingHouse_4 = new L.geoJson.multiStyle(json_boardingHouse_4, {
    attribution: '',
    interactive: true,
    dataVar: 'json_boardingHouse_4',
    layerName: 'layer_boardingHouse_4',
    pane: 'pane_boardingHouse_4',
    onEachFeature: pop_boardingHouse_4,
    styles: [style_boardingHouse_4_0,style_boardingHouse_4_1,]
});
bounds_group.addLayer(layer_boardingHouse_4);
map.addLayer(layer_boardingHouse_4);


function style_garden_5_0(feature) {
    switch(String(feature.properties['id'])) {
        case '0':
            return {
        pane: 'pane_garden_5',
        opacity: 1,
        color: 'rgba(51,160,44,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: '#65cf0e',
        interactive: false,
    }
            break;
        case '1':
            return {
        pane: 'pane_garden_5',
        opacity: 1,
        color: 'rgba(251,154,153,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(251,154,153,1.0)',
        interactive: false,
    }
            break;
        case '2':
            return {
        pane: 'pane_garden_5',
        opacity: 1,
        color: 'rgba(255,255,229,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(248,248,223,1.0)',
        interactive: false,
    }
    case '5':
        return {
    pane: 'pane_garden_5',
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0, 
    fill: true,
    fillOpacity: 1,
    fillColor: '#c1a776',
    interactive: false,
}
        break;
    case '8':
        return {
    pane: 'pane_garden_5',
    opacity: 1,
    color: 'rgba(255,255,255,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0, 
    fill: true,
    fillOpacity: 1,
    fillColor: '#6c95b1',
    interactive: false,
}
            break;
        default:
            return {
        pane: 'pane_garden_5',
        opacity: 1,
        color: 'rgba(51,160,44,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(178,223,138,1.0)',
        interactive: false,
    }
            break;
    
    }
}
map.createPane('pane_garden_5');
map.getPane('pane_garden_5').style.zIndex = 405;
map.getPane('pane_garden_5').style['mix-blend-mode'] = 'normal';
var layer_garden_5 = new L.geoJson(json_garden_5, {
    attribution: '',
    interactive: false,
    dataVar: 'json_garden_5',
    layerName: 'layer_garden_5',
    pane: 'pane_garden_5',
    style: style_garden_5_0,
});
bounds_group.addLayer(layer_garden_5);
map.addLayer(layer_garden_5);

function pop_shops_6(feature, layer) {
    var popupContent = document.getElementById("popupContent");
    layer.bindPopup(popupContent, {maxHeight: 310});
    var container=document.getElementById("popupContent");
    container.innerHTML = "<div class=\"container\">\
    <div class=\"row\">\
      <div class=\"col-12\">\
        <img id=\"imgSrc\" alt=\"Building picture\" class=\"img-fluid\" />\
      </div>\
    </div>\
    <div class=\"row\">\
      <div class=\"col-6\">\
        <h2 id=\"popupNum\" class=\"text-right\"></h2>    \
      </div>   \
      <div class=\"col-6\">        \
        <h2 id=\"popupTitle\" class=\"text-right\"></h2>\
      </div>   \
    </div>\
    <div class=\"row\">        \
      <div class=\"col-12 text-right pb-4\">\
        <p>الوصف</p>        \
        <p id=\"Disc\"></p>      \
      </div>\
    </div>\
  </div> \
  \
  <div id=\"popupButtons\" class=\"text-right\">\
  </div>"
     

 layer.on('click', function() { 
    
    if(layer.feature.properties['id'] !== null){
        var buildingID=layer.feature.properties['id'].toLocaleString();
        const imgElement=document.getElementById("imgSrc")
        imgElement.src="images/"+buildingID+".jpg"
       document.getElementById("popupNum").textContent=(feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '');
       document.getElementById("popupTitle").textContent= (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '');
       document.getElementById("Disc").textContent=(feature.properties['discrib'] !== null ? autolinker.link(feature.properties['discrib'].toLocaleString()) : '');
        var divButtons=document.getElementById("popupButtons");
        if(divButtons.hasChildNodes()){
            while (divButtons.firstChild) {
                divButtons.removeChild(divButtons.firstChild);
            }
        }
        
    }
    
 });

}

function style_shops_6_0() {
    return {
        pane: 'pane_shops_6',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(253,191,111,1.0)',
        interactive: true,
    }
}
map.createPane('pane_shops_6');
map.getPane('pane_shops_6').style.zIndex = 406;
map.getPane('pane_shops_6').style['mix-blend-mode'] = 'normal';
var layer_shops_6 = new L.geoJson(json_shops_6, {
    attribution: '',
    interactive: true,
    dataVar: 'json_shops_6',
    layerName: 'layer_shops_6',
    pane: 'pane_shops_6',
    onEachFeature: pop_shops_6,
    style: style_shops_6_0,
});
bounds_group.addLayer(layer_shops_6);
map.addLayer(layer_shops_6);

function pop_services_7(feature, layer) {
    var popupContent = document.getElementById("popupContent");
    layer.bindPopup(popupContent, {maxHeight: 310});
    var container=document.getElementById("popupContent");
    container.innerHTML = " <table>\
        <tbody>\
            <tr>\
            <td colspan='2'>\
                <img id='imgSrc' alt='Building picture' width='100%' height='auto'>\
                 </td>\
            </tr>\
            <tr>\
            <td><h2 id='popupNum'style='text-align:right;'></h2></td>\
            <td><h2 id='popupTitle' style='text-align:right;'></h2></td>\
            </tr>\
            <tr>\
            <td colspan='2' style='text-align:right; padding-bottom:20px;'><p>الوصف </p><br><p id='Disc'></p></td>\
            </tr>\
        </tbody>\
     </table>\
     <div id='popupButtons'>\
     </div>";
     

 layer.on('click', function() { 
    
    if(layer.feature.properties['id'] !== null){
        var buildingID=layer.feature.properties['id'].toLocaleString();
        const imgElement=document.getElementById("imgSrc")
        imgElement.src="images/"+buildingID+".jpg"
       document.getElementById("popupNum").textContent=(feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '');
       document.getElementById("popupTitle").textContent= (feature.properties['name'] !== null ? ' مبنى '+autolinker.link(feature.properties['name'].toLocaleString()) : '');
       document.getElementById("Disc").textContent=(feature.properties['Disc'] !== null ? autolinker.link(feature.properties['Disc'].toLocaleString()) : '');
        var divButtons=document.getElementById("popupButtons");
        if(divButtons.hasChildNodes()){
            while (divButtons.firstChild) {
                divButtons.removeChild(divButtons.firstChild);
            }
        }
        
    }
    
 });
}

function style_services_7_0() {
    return {
        pane: 'pane_services_7',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(253,191,111,1.0)',
        interactive: true,
    }
}
map.createPane('pane_services_7');
map.getPane('pane_services_7').style.zIndex = 407;
map.getPane('pane_services_7').style['mix-blend-mode'] = 'normal';
var layer_services_7 = new L.geoJson(json_services_7, {
    attribution: '',
    interactive: true,
    dataVar: 'json_services_7',
    layerName: 'layer_services_7',
    pane: 'pane_services_7',
    onEachFeature: pop_services_7,
    style: style_services_7_0,
});
bounds_group.addLayer(layer_services_7);
map.addLayer(layer_services_7);

function pop_Enterences_8(feature, layer) {
    var popupContent = document.getElementById("popupContent");
    layer.bindPopup(popupContent, {maxHeight: 310});
    var container=document.getElementById("popupContent");
    container.innerHTML = `
<div class="container">
  <table class="table">
    <tbody>
      <div class="row">  
        <div class="col-12">  
          <img id="imgSrc" alt="Building picture" width="100%" class="img-fluid">
        </div>     
      </div>     
      <div class="row">   
       
         <div class="col-6">           
           <h2 id="popupNum" class="text-right"></h2>  
         </div>
         <div class="col-6">
           <h2 id="popupTitle" class="text-right"></h2>                
         </div>                 
      </div>   
       <div class="row">        
         
         <div class="col-12 text-right pb-4">
           <p>الوصف </p><br>    
           <p id="Disc"></p>           
         </div>                  
       </div> 
    </tbody>   
  </table>
</div>

<div id="popupButtons" class="text-right">
</div>`

 layer.on('click', function() { 
    
    if(layer.feature.properties['id'] !== null){
        var buildingID=layer.feature.properties['id'].toLocaleString();
        const imgElement=document.getElementById("imgSrc")
        imgElement.src="images/"+buildingID+".jpg"
       document.getElementById("popupNum").textContent=(feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '');
       document.getElementById("popupTitle").textContent= (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '');
       document.getElementById("Disc").textContent=(feature.properties['Disc'] !== null ? autolinker.link(feature.properties['Disc'].toLocaleString()) : '');
        var divButtons=document.getElementById("popupButtons");
        if(divButtons.hasChildNodes()){
            while (divButtons.firstChild) {
                divButtons.removeChild(divButtons.firstChild);
            }
        }
        
    }
    
 });
}

function style_Enterences_8_0() {
    return {
        pane: 'pane_Enterences_8',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(253,191,111,1.0)',
        interactive: true,
    }
}
map.createPane('pane_Enterences_8');
map.getPane('pane_Enterences_8').style.zIndex = 408;
map.getPane('pane_Enterences_8').style['mix-blend-mode'] = 'normal';
var layer_Enterences_8 = new L.geoJson(json_Enterences_8, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Enterences_8',
    layerName: 'layer_Enterences_8',
    pane: 'pane_Enterences_8',
    onEachFeature: pop_Enterences_8,
    style: style_Enterences_8_0,
});
bounds_group.addLayer(layer_Enterences_8);
map.addLayer(layer_Enterences_8);




function pop_buiding_9(feature, layer) {
    var popupContent = document.getElementById("popupContent");
    layer.bindPopup(popupContent, {maxHeight: 310});
    var container=document.getElementById("popupContent");

    

    container.innerHTML = '<div class="container">' +
    '<div class="row">' +
        '<div class="col-12">' +
            '<img id="imgSrc" alt="Building picture" class="img-fluid">' +
        '</div>' +
    '</div>' +
    '<div class="row">' +
        '<div class="col-2">' +
            '<h2 id="popupNum" class="text-right"></h2>' +
        '</div>' +
        '<div class="col-10">' +
            '<h2 id="popupTitle" class="text-right"></h2>' +
        '</div>' +
    '</div>' +
    '<div class="row">' +
        '<div class=" col-12">' +
            '<p class="bg-light" >وصف المبنى</p>' +
            '<p id="Disc"></p>' +
        '</div>' +
    '</div>' +
    '<div id="popupButtons"></div>' +
'</div>';
     

 layer.on('click', function() { 
    
    if(layer.feature.properties['id'] !== null){
        var buildingID=layer.feature.properties['id'].toLocaleString();
        const imgElement=document.getElementById("imgSrc")
        imgElement.src="images/"+buildingID+".jpg"
       document.getElementById("popupNum").textContent=(feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '');
       document.getElementById("popupTitle").textContent= (feature.properties['name'] !== null ? " مبنى "+autolinker.link(feature.properties['name'].toLocaleString()) : '');
       document.getElementById("Disc").textContent=(feature.properties['descrip'] !== null ? autolinker.link(feature.properties['descrip'].toLocaleString()) : '');
        
        var Buildinglayers=window["layersGroup_"+buildingID];
        var divButtons=document.getElementById("popupButtons");
        var totalButtons=Buildinglayers.getLayers().length;
        

        if(divButtons.hasChildNodes()){
            while (divButtons.firstChild) {
                divButtons.removeChild(divButtons.firstChild);
            }
        }
        if(totalButtons>0){
            for (var b=0; b<totalButtons;b++){
                var button = document.createElement("button");
                button.setAttribute("id", b);
                if(b==0){
                    button.innerHTML="Floor GF";
                }else{
                    button.innerHTML="Floor " + b;
                }
                divButtons.appendChild(button);
                
                button.addEventListener("click", function(event) {
                    var btn = event.target;
                    var bid = btn.getAttribute("id");
                    
                    if (bid == 0) {
                        // Add the GF floor layer
                        var activeLayer =Buildinglayers.getLayer(Buildinglayers.getLayers()[0]._leaflet_id).addTo(map);
                        //bind
                        if((Object.values((Buildinglayers.getLayer(Buildinglayers.getLayers()[0]._leaflet_id))._layers))[0]._layers != null){
                            if(activeLayer == layersGroupGFTV ||activeLayer == layersGroupF1TV||activeLayer == layersGroupF2TV||activeLayer == layersGroupF3TV)
                            bindTooltipsByNameForComplexStructure(Buildinglayers.getLayer(Buildinglayers.getLayers()[0]._leaflet_id),"name");
                            else
                            bindTooltipsByNameForComplexStructure(activeLayer,"id");     
                    }
                        else{
                            if(activeLayer==layer_GFtahdiri_40||activeLayer==layer_F1tahdiri_42||activeLayer==layer_F2tahdiri_43||activeLayer==layer_F3tahdiri_45)
                            bindTooltipsByNameOrId(activeLayer,"name")
                            else
                            bindTooltipsByNameOrId(activeLayer,"id")
                       }
                        // Remove other floor layers
                        map.removeLayer(Buildinglayers.getLayer(Buildinglayers.getLayers()[1]._leaflet_id));
                        //unbind
                        if((Object.values((Buildinglayers.getLayer(Buildinglayers.getLayers()[1]._leaflet_id))._layers))[0]._layers != null){
                            unbindTooltipsComplex(Buildinglayers.getLayer(Buildinglayers.getLayers()[1]._leaflet_id))}
                        else{
                            unbindTooltips(Buildinglayers.getLayer(Buildinglayers.getLayers()[1]._leaflet_id))
                       }
                        map.removeLayer(Buildinglayers.getLayer(Buildinglayers.getLayers()[2]._leaflet_id));
                        if((Object.values((Buildinglayers.getLayer(Buildinglayers.getLayers()[2]._leaflet_id))._layers))[0]._layers != null){
                            unbindTooltipsComplex(Buildinglayers.getLayer(Buildinglayers.getLayers()[2]._leaflet_id))}
                        else{
                            unbindTooltips(Buildinglayers.getLayer(Buildinglayers.getLayers()[2]._leaflet_id))
                       }
                       console.log()
                       if (Object.values(Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id))!=null) {
                            map.removeLayer(Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id));
                            if((Object.values((Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id))._layers))[0]._layers != null){
                                unbindTooltipsComplex(Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id))}
                            else{
                                unbindTooltips(Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id))
                           }                     
                           }
                    } else if (bid == 1) {
 // Add the first floor layer
 var activeLayer =Buildinglayers.getLayer(Buildinglayers.getLayers()[1]._leaflet_id).addTo(map);
 //bind
 if((Object.values((Buildinglayers.getLayer(Buildinglayers.getLayers()[1]._leaflet_id))._layers))[0]._layers != null){
     if(activeLayer == layersGroupGFTV ||activeLayer == layersGroupF1TV||activeLayer == layersGroupF2TV||activeLayer == layersGroupF3TV)
     bindTooltipsByNameForComplexStructure(Buildinglayers.getLayer(Buildinglayers.getLayers()[1]._leaflet_id),"name");
     else
     bindTooltipsByNameForComplexStructure(activeLayer,"id");     
}
 else{
     if(activeLayer==layer_GFtahdiri_40||activeLayer==layer_F1tahdiri_42||activeLayer==layer_F2tahdiri_43||activeLayer==layer_F3tahdiri_45)
     bindTooltipsByNameOrId(activeLayer,"name")
     else
     bindTooltipsByNameOrId(activeLayer,"id")
}
 // Remove other floor layers
 map.removeLayer(Buildinglayers.getLayer(Buildinglayers.getLayers()[0]._leaflet_id));
 //unbind
 if((Object.values((Buildinglayers.getLayer(Buildinglayers.getLayers()[0]._leaflet_id))._layers))[0]._layers != null){
     unbindTooltipsComplex(Buildinglayers.getLayer(Buildinglayers.getLayers()[0]._leaflet_id))}
 else{
     unbindTooltips(Buildinglayers.getLayer(Buildinglayers.getLayers()[0]._leaflet_id))
}
 map.removeLayer(Buildinglayers.getLayer(Buildinglayers.getLayers()[2]._leaflet_id));
 if((Object.values((Buildinglayers.getLayer(Buildinglayers.getLayers()[2]._leaflet_id))._layers))[0]._layers != null){
     unbindTooltipsComplex(Buildinglayers.getLayer(Buildinglayers.getLayers()[2]._leaflet_id))}
 else{
     unbindTooltips(Buildinglayers.getLayer(Buildinglayers.getLayers()[2]._leaflet_id))
}if (Object.values(Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id))!=null) {
     map.removeLayer(Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id));
     if((Object.values((Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id))._layers))[0]._layers != null){
         unbindTooltipsComplex(Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id))}
     else{
         unbindTooltips(Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id))
    }                     
    }
                    } else if (bid == 2) {
                        // Add the third floor layer
 var activeLayer =Buildinglayers.getLayer(Buildinglayers.getLayers()[2]._leaflet_id).addTo(map);
 //bind
 if((Object.values((Buildinglayers.getLayer(Buildinglayers.getLayers()[2]._leaflet_id))._layers))[0]._layers != null){
     if(activeLayer == layersGroupGFTV ||activeLayer == layersGroupF1TV||activeLayer == layersGroupF2TV||activeLayer == layersGroupF3TV)
     bindTooltipsByNameForComplexStructure(Buildinglayers.getLayer(Buildinglayers.getLayers()[2]._leaflet_id),"name");
     else
     bindTooltipsByNameForComplexStructure(activeLayer,"id");     
}
 else{
     if(activeLayer==layer_GFtahdiri_40||activeLayer==layer_F1tahdiri_42||activeLayer==layer_F2tahdiri_43||activeLayer==layer_F3tahdiri_45)
     bindTooltipsByNameOrId(activeLayer,"name")
     else
     bindTooltipsByNameOrId(activeLayer,"id")
}
 // Remove other floor layers
 map.removeLayer(Buildinglayers.getLayer(Buildinglayers.getLayers()[0]._leaflet_id));
 //unbind
 if((Object.values((Buildinglayers.getLayer(Buildinglayers.getLayers()[0]._leaflet_id))._layers))[0]._layers != null){
     unbindTooltipsComplex(Buildinglayers.getLayer(Buildinglayers.getLayers()[0]._leaflet_id))}
 else{
     unbindTooltips(Buildinglayers.getLayer(Buildinglayers.getLayers()[0]._leaflet_id))
}
 map.removeLayer(Buildinglayers.getLayer(Buildinglayers.getLayers()[1]._leaflet_id));
 if((Object.values((Buildinglayers.getLayer(Buildinglayers.getLayers()[1]._leaflet_id))._layers))[0]._layers != null){
     unbindTooltipsComplex(Buildinglayers.getLayer(Buildinglayers.getLayers()[1]._leaflet_id))}
 else{
     unbindTooltips(Buildinglayers.getLayer(Buildinglayers.getLayers()[1]._leaflet_id))
}if (Object.values(Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id))!=null) {
     map.removeLayer(Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id));
     if((Object.values((Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id))._layers))[0]._layers != null){
         unbindTooltipsComplex(Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id))}
     else{
         unbindTooltips(Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id))
    }                     
    }
                    } else if (bid == 3) {
                        // Add the fourth floor layer
                        var activeLayer =Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id).addTo(map);
                        //bind
                        if((Object.values((Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id))._layers))[0]._layers != null){
                            if(activeLayer == layersGroupGFTV ||activeLayer == layersGroupF1TV||activeLayer == layersGroupF2TV||activeLayer == layersGroupF3TV)
                            bindTooltipsByNameForComplexStructure(Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id),"name");
                            else
                            bindTooltipsByNameForComplexStructure(activeLayer,"id");     
                       }
                        else{
                            if(activeLayer==layer_GFtahdiri_40||activeLayer==layer_F1tahdiri_42||activeLayer==layer_F2tahdiri_43||activeLayer==layer_F3tahdiri_45)
                            bindTooltipsByNameOrId(activeLayer,"name")
                            else
                            bindTooltipsByNameOrId(activeLayer,"id")
                       }
                        // Remove other floor layers
                        map.removeLayer(Buildinglayers.getLayer(Buildinglayers.getLayers()[0]._leaflet_id));
                        //unbind
                        if((Object.values((Buildinglayers.getLayer(Buildinglayers.getLayers()[0]._leaflet_id))._layers))[0]._layers != null){
                            unbindTooltipsComplex(Buildinglayers.getLayer(Buildinglayers.getLayers()[0]._leaflet_id))}
                        else{
                            unbindTooltips(Buildinglayers.getLayer(Buildinglayers.getLayers()[0]._leaflet_id))
                       }
                        map.removeLayer(Buildinglayers.getLayer(Buildinglayers.getLayers()[1]._leaflet_id));
                        if((Object.values((Buildinglayers.getLayer(Buildinglayers.getLayers()[1]._leaflet_id))._layers))[0]._layers != null){
                            unbindTooltipsComplex(Buildinglayers.getLayer(Buildinglayers.getLayers()[1]._leaflet_id))}
                        else{
                            unbindTooltips(Buildinglayers.getLayer(Buildinglayers.getLayers()[1]._leaflet_id))
                       }if (Buildinglayers.getLayer(Buildinglayers.getLayers()[2]) !== null) {
                            map.removeLayer(Buildinglayers.getLayer(Buildinglayers.getLayers()[2]._leaflet_id));
                            if((Object.values((Buildinglayers.getLayer(Buildinglayers.getLayers()[2]._leaflet_id))._layers))[0]._layers != null){
                                unbindTooltipsComplex(Buildinglayers.getLayer(Buildinglayers.getLayers()[2]._leaflet_id))}
                            else{
                                unbindTooltips(Buildinglayers.getLayer(Buildinglayers.getLayers()[2]._leaflet_id))
                           }                     
                           }
                    } else {
                        // Remove all floor layers
                        map.removeLayer(Buildinglayers.getLayer(Buildinglayers.getLayers()[0]._leaflet_id));
                        map.removeLayer(Buildinglayers.getLayer(Buildinglayers.getLayers()[1]._leaflet_id));
                        map.removeLayer(Buildinglayers.getLayer(Buildinglayers.getLayers()[2]._leaflet_id));
                        if (Buildinglayers.getLayer(Buildinglayers.getLayers()[3]) !== null) {
                            map.removeLayer(Buildinglayers.getLayer(Buildinglayers.getLayers()[3]._leaflet_id));
                        }
                    }
        });
            } 
        }
        
    }
    
 });

    
}

function style_buiding_9_0() {
    return {
        pane: 'pane_buiding_9',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,133,1.0)',
        interactive: true,
    }
}
map.createPane('pane_buiding_9');
map.getPane('pane_buiding_9').style.zIndex = 409;
map.getPane('pane_buiding_9').style['mix-blend-mode'] = 'normal';
var layer_buiding_9 = new L.geoJson(json_buiding_9, {
    attribution: '',
    interactive: true,
    dataVar: 'json_buiding_9',
    layerName: 'layer_buiding_9',
    pane: 'pane_buiding_9',
    onEachFeature: pop_buiding_9,
    style: style_buiding_9_0,
});
bounds_group.addLayer(layer_buiding_9);
map.addLayer(layer_buiding_9);

function style_waitingBuilding_10_0() {
    return {
        pane: 'pane_waitingBuilding_10',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(216,177,140,1.0)',
        interactive: false,
    }
}
map.createPane('pane_waitingBuilding_10');
map.getPane('pane_waitingBuilding_10').style.zIndex = 410;
map.getPane('pane_waitingBuilding_10').style['mix-blend-mode'] = 'normal';
var layer_waitingBuilding_10 = new L.geoJson(json_waitingBuilding_10, {
    attribution: '',
    interactive: false,
    dataVar: 'json_waitingBuilding_10',
    layerName: 'layer_waitingBuilding_10',
    pane: 'pane_waitingBuilding_10',
    style: style_waitingBuilding_10_0,
});
bounds_group.addLayer(layer_waitingBuilding_10);
map.addLayer(layer_waitingBuilding_10);
layersGroup_201.addLayer(layer_waitingBuilding_10)

function style_sharedbuilding_11_0() {
    return {
        pane: 'pane_sharedbuilding_11',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_sharedbuilding_11');
map.getPane('pane_sharedbuilding_11').style.zIndex = 411;
map.getPane('pane_sharedbuilding_11').style['mix-blend-mode'] = 'normal';
var layer_sharedbuilding_11 = new L.geoJson(json_sharedbuilding_11, {
    attribution: '',
    interactive: false,
    dataVar: 'json_sharedbuilding_11',
    layerName: 'layer_sharedbuilding_11',
    pane: 'pane_sharedbuilding_11',
    style: style_sharedbuilding_11_0,
});
bounds_group.addLayer(layer_sharedbuilding_11);
map.addLayer(layer_sharedbuilding_11);
layersGroup_228.addLayer(layer_sharedbuilding_11)

function style_physicaltherapy_12_0() {
    return {
        pane: 'pane_physicaltherapy_12',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(216,177,140,1.0)',
        interactive: false,
    }
}
map.createPane('pane_physicaltherapy_12');
map.getPane('pane_physicaltherapy_12').style.zIndex = 412;
map.getPane('pane_physicaltherapy_12').style['mix-blend-mode'] = 'normal';
var layer_physicaltherapy_12 = new L.geoJson(json_physicaltherapy_12, {
    attribution: '',
    interactive: false,
    dataVar: 'json_physicaltherapy_12',
    layerName: 'layer_physicaltherapy_12',
    pane: 'pane_physicaltherapy_12',
    style: style_physicaltherapy_12_0,
});
bounds_group.addLayer(layer_physicaltherapy_12);
map.addLayer(layer_physicaltherapy_12);
layersGroup_226.addLayer(layer_physicaltherapy_12);


function style_medicalhabilitation_13_0() {
    return {
        pane: 'pane_medicalhabilitation_13',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(216,177,140,1.0)',
        interactive: false,
    }
}
map.createPane('pane_medicalhabilitation_13');
map.getPane('pane_medicalhabilitation_13').style.zIndex = 413;
map.getPane('pane_medicalhabilitation_13').style['mix-blend-mode'] = 'normal';
var layer_medicalhabilitation_13 = new L.geoJson(json_medicalhabilitation_13, {
    attribution: '',
    interactive: false,
    dataVar: 'json_medicalhabilitation_13',
    layerName: 'layer_medicalhabilitation_13',
    pane: 'pane_medicalhabilitation_13',
    style: style_medicalhabilitation_13_0,
});
bounds_group.addLayer(layer_medicalhabilitation_13);
map.addLayer(layer_medicalhabilitation_13);
layersGroup_225.addLayer(layer_medicalhabilitation_13)

function style_222Building_14_0() {
    return {
        pane: 'pane_222Building_14',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(216,177,140,1.0)',
        interactive: false,
    }
}
map.createPane('pane_222Building_14');
map.getPane('pane_222Building_14').style.zIndex = 414;
map.getPane('pane_222Building_14').style['mix-blend-mode'] = 'normal';
var layer_222Building_14 = new L.geoJson(json_222Building_14, {
    attribution: '',
    interactive: false,
    dataVar: 'json_222Building_14',
    layerName: 'layer_222Building_14',
    pane: 'pane_222Building_14',
    style: style_222Building_14_0,
});
bounds_group.addLayer(layer_222Building_14);
map.addLayer(layer_222Building_14);
layersGroup_222.addLayer(layer_222Building_14);


function style_202_GF_15_0() {
    return {
        pane: 'pane_202_GF_15',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(216,177,140,1.0)',
        interactive: false
    }
}
map.createPane('pane_202_GF_15');
map.getPane('pane_202_GF_15').style.zIndex = 415;
map.getPane('pane_202_GF_15').style['mix-blend-mode'] = 'normal';
var layer_202_GF_15 = new L.geoJson(json_202_GF_15, {
    attribution: '',
    interactive: false,
    dataVar: 'json_202_GF_15',
    layerName: 'layer_202_GF_15',
    pane: 'pane_202_GF_15',
    style: style_202_GF_15_0
});
bounds_group.addLayer(layer_202_GF_15);
map.addLayer(layer_202_GF_15);


function style_markazKhedmahAltalebah_GF_16_0() {
    return {
        pane: 'pane_markazKhedmahAltalebah_GF_16',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_markazKhedmahAltalebah_GF_16');
map.getPane('pane_markazKhedmahAltalebah_GF_16').style.zIndex = 416;
map.getPane('pane_markazKhedmahAltalebah_GF_16').style['mix-blend-mode'] = 'normal';
var layer_markazKhedmahAltalebah_GF_16 = new L.geoJson(json_markazKhedmahAltalebah_GF_16, {
    attribution: '',
    interactive: false,
    dataVar: 'json_markazKhedmahAltalebah_GF_16',
    layerName: 'layer_markazKhedmahAltalebah_GF_16',
    pane: 'pane_markazKhedmahAltalebah_GF_16',
    style: style_markazKhedmahAltalebah_GF_16_0,
});
bounds_group.addLayer(layer_markazKhedmahAltalebah_GF_16);
map.addLayer(layer_markazKhedmahAltalebah_GF_16);
layersGroup_230.addLayer(layer_markazKhedmahAltalebah_GF_16);

function style_Building235_17_0() {
    return {
        pane: 'pane_Building235_17',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_Building235_17');
map.getPane('pane_Building235_17').style.zIndex = 417;
map.getPane('pane_Building235_17').style['mix-blend-mode'] = 'normal';
var layer_Building235_17 = new L.geoJson(json_Building235_17, {
    attribution: '',
    interactive: false,
    dataVar: 'json_Building235_17',
    layerName: 'layer_Building235_17',
    pane: 'pane_Building235_17',
    style: style_Building235_17_0,
});
bounds_group.addLayer(layer_Building235_17);
map.addLayer(layer_Building235_17);
layersGroup_235.addLayer(layer_Building235_17)

function style_building224_18_0() {
    return {
        pane: 'pane_building224_18',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(216,177,140,1.0)',
        interactive: false,
    }
}
map.createPane('pane_building224_18');
map.getPane('pane_building224_18').style.zIndex = 418;
map.getPane('pane_building224_18').style['mix-blend-mode'] = 'normal';
var layer_building224_18 = new L.geoJson(json_building224_18, {
    attribution: '',
    interactive: false,
    dataVar: 'json_building224_18',
    layerName: 'layer_building224_18',
    pane: 'pane_building224_18',
    style: style_building224_18_0,
});
bounds_group.addLayer(layer_building224_18);
map.addLayer(layer_building224_18);
layersGroup_224.addLayer(layer_building224_18);

function style_GF_Dentisry_19_0() {
    return {
        pane: 'pane_GF_Dentisry_19',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_GF_Dentisry_19');
map.getPane('pane_GF_Dentisry_19').style.zIndex = 419;
map.getPane('pane_GF_Dentisry_19').style['mix-blend-mode'] = 'normal';
var layer_GF_Dentisry_19 = new L.geoJson(json_GF_Dentisry_19, {
    attribution: '',
    interactive: false,
    dataVar: 'json_GF_Dentisry_19',
    layerName: 'layer_GF_Dentisry_19',
    pane: 'pane_GF_Dentisry_19',
    style: style_GF_Dentisry_19_0,
});
bounds_group.addLayer(layer_GF_Dentisry_19);
map.addLayer(layer_GF_Dentisry_19);
layersGroupGFDinstry.addLayer(layer_GF_Dentisry_19)
layersGroup_234.addLayer(layersGroupGFDinstry)
function style_FF_Dentistry_20_0() {
    return {
        pane: 'pane_FF_Dentistry_20',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_FF_Dentistry_20');
map.getPane('pane_FF_Dentistry_20').style.zIndex = 420;
map.getPane('pane_FF_Dentistry_20').style['mix-blend-mode'] = 'normal';
var layer_FF_Dentistry_20 = new L.geoJson(json_FF_Dentistry_20, {
    attribution: '',
    interactive: false,
    dataVar: 'json_FF_Dentistry_20',
    layerName: 'layer_FF_Dentistry_20',
    pane: 'pane_FF_Dentistry_20',
    style: style_FF_Dentistry_20_0,
});
bounds_group.addLayer(layer_FF_Dentistry_20);
layersGroupFFDinstry.addLayer(layer_FF_Dentistry_20)
layersGroup_234.addLayer(layersGroupFFDinstry)

function style_SF_Dentistry_21_0() {
    return {
        pane: 'pane_SF_Dentistry_21',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_SF_Dentistry_21');
map.getPane('pane_SF_Dentistry_21').style.zIndex = 421;
map.getPane('pane_SF_Dentistry_21').style['mix-blend-mode'] = 'normal';
var layer_SF_Dentistry_21 = new L.geoJson(json_SF_Dentistry_21, {
    attribution: '',
    interactive: false,
    dataVar: 'json_SF_Dentistry_21',
    layerName: 'layer_SF_Dentistry_21',
    pane: 'pane_SF_Dentistry_21',
    style: style_SF_Dentistry_21_0,
});
bounds_group.addLayer(layer_SF_Dentistry_21);
layersGroupSFDinstry.addLayer(layer_SF_Dentistry_21)
layersGroup_234.addLayer(layersGroupSFDinstry)


function style_libraryGF_22_0() {
    return {
        pane: 'pane_libraryGF_22',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_libraryGF_22');
map.getPane('pane_libraryGF_22').style.zIndex = 422;
map.getPane('pane_libraryGF_22').style['mix-blend-mode'] = 'normal';
var layer_libraryGF_22 = new L.geoJson(json_libraryGF_22, {
    attribution: '',
    interactive: false,
    dataVar: 'json_libraryGF_22',
    layerName: 'layer_libraryGF_22',
    pane: 'pane_libraryGF_22',
    style: style_libraryGF_22_0,
});
bounds_group.addLayer(layer_libraryGF_22);
map.addLayer(layer_libraryGF_22);
layersGroupGFlibrary.addLayer(layer_libraryGF_22);


function style_libraryGF_marker_23_0() {
    return {
        pane: 'pane_libraryGF_marker_23',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_libraryGF_marker_23_1(feature) {
    
    switch(String(feature.properties['tybe'])) {
        case 'exit':
            return {
                pane: 'pane_libraryGF_marker_23',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/running.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
        case 'disability':
            return {
                pane: 'pane_libraryGF_marker_23',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/disability_accessibility2.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
        case 'wc':
            return {
                pane: 'pane_libraryGF_marker_23',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/amenity_toilets.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
        default:
            return {
                pane: 'pane_libraryGF_marker_23',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/running.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
    
    }
   
}
map.createPane('pane_libraryGF_marker_23');
map.getPane('pane_libraryGF_marker_23').style.zIndex = 423;
map.getPane('pane_libraryGF_marker_23').style['mix-blend-mode'] = 'normal';
var layer_libraryGF_marker_23 = new L.geoJson.multiStyle(json_libraryGF_marker_23, {
    attribution: '',
    interactive: true,
    dataVar: 'json_libraryGF_marker_23',
    layerName: 'layer_libraryGF_marker_23',
    pane: 'pane_libraryGF_marker_23',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_libraryGF_marker_23_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_libraryGF_marker_23_1(feature));
    },
]});
bounds_group.addLayer(layer_libraryGF_marker_23);
map.addLayer(layer_libraryGF_marker_23);
layersGroupGFlibrary.addLayer(layer_libraryGF_marker_23);
layersGroup_203.addLayer(layersGroupGFlibrary);
function style_Floor1_library_24_0() {
    return {
        pane: 'pane_Floor1_library_24',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_Floor1_library_24');
map.getPane('pane_Floor1_library_24').style.zIndex = 424;
map.getPane('pane_Floor1_library_24').style['mix-blend-mode'] = 'normal';
var layer_Floor1_library_24 = new L.geoJson(json_Floor1_library_24, {
    attribution: '',
    interactive: false,
    dataVar: 'json_Floor1_library_24',
    layerName: 'layer_Floor1_library_24',
    pane: 'pane_Floor1_library_24',
    style: style_Floor1_library_24_0,
});
bounds_group.addLayer(layer_Floor1_library_24);
layersGroupFFlibrary.addLayer(layer_Floor1_library_24);



function style_Floor1_library_marker_25_0() {
    return {
        pane: 'pane_Floor1_library_marker_25',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: true,
    }
}
function style_Floor1_library_marker_25_1(feature) {
    switch(String(feature.properties['type'])) {
        case 'library':
            return {
                pane: 'pane_Floor1_library_marker_25',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/book-open.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
        case 'bathroom':
            return {
                pane: 'pane_Floor1_library_marker_25',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/amenity_toilets.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
        default:
            return {
                pane: 'pane_Floor1_library_marker_25',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/running.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
    
    }
  
}
map.createPane('pane_Floor1_library_marker_25');
map.getPane('pane_Floor1_library_marker_25').style.zIndex = 425;
map.getPane('pane_Floor1_library_marker_25').style['mix-blend-mode'] = 'normal';
var layer_Floor1_library_marker_25 = new L.geoJson.multiStyle(json_Floor1_library_marker_25, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Floor1_library_marker_25',
    layerName: 'layer_Floor1_library_marker_25',
    pane: 'pane_Floor1_library_marker_25',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Floor1_library_marker_25_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Floor1_library_marker_25_1(feature));
    },
]});
bounds_group.addLayer(layer_Floor1_library_marker_25);
layersGroupFFlibrary.addLayer(layer_Floor1_library_marker_25);
layersGroup_203.addLayer(layersGroupFFlibrary);




function style_librarySF_26_0() {
    return {
        pane: 'pane_librarySF_26',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_librarySF_26');
map.getPane('pane_librarySF_26').style.zIndex = 426;
map.getPane('pane_librarySF_26').style['mix-blend-mode'] = 'normal';
var layer_librarySF_26 = new L.geoJson(json_librarySF_26, {
    attribution: '',
    interactive: false,
    dataVar: 'json_librarySF_26',
    layerName: 'layer_librarySF_26',
    pane: 'pane_librarySF_26',
    style: style_librarySF_26_0,
});
bounds_group.addLayer(layer_librarySF_26);
layersGroupSFlibrary.addLayer(layer_librarySF_26);


function style_librarySF_marker_27_0() {
    return {
        pane: 'pane_librarySF_marker_27',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_librarySF_marker_27_1(feature) {

    switch(String(feature.properties['tybe'])) {
        case 'pray':
            return {
                pane: 'pane_librarySF_marker_27',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/mosque.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
        case 'bathroom':
            return {
                pane: 'pane_librarySF_marker_27',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/amenity_toilets.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
        default:
            return {
                pane: 'pane_librarySF_marker_27',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/running.png',
            iconSize: [16,16]
        }),
                interactive: false,
            }
            break;
    
    }
    
}
map.createPane('pane_librarySF_marker_27');
map.getPane('pane_librarySF_marker_27').style.zIndex = 427;
map.getPane('pane_librarySF_marker_27').style['mix-blend-mode'] = 'normal';
var layer_librarySF_marker_27 = new L.geoJson.multiStyle(json_librarySF_marker_27, {
    attribution: '',
    interactive: false,
    dataVar: 'json_librarySF_marker_27',
    layerName: 'layer_librarySF_marker_27',
    pane: 'pane_librarySF_marker_27',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_librarySF_marker_27_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_librarySF_marker_27_1(feature));
    },
]});
bounds_group.addLayer(layer_librarySF_marker_27);
layersGroupSFlibrary.addLayer(layer_librarySF_marker_27);
layersGroup_203.addLayer(layersGroupSFlibrary);



function style_GFjaz_28_0() {
    return {
        pane: 'pane_GFjaz_28',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_GFjaz_28');
map.getPane('pane_GFjaz_28').style.zIndex = 428;
map.getPane('pane_GFjaz_28').style['mix-blend-mode'] = 'normal';
var layer_GFjaz_28 = new L.geoJson(json_GFjaz_28, {
    attribution: '',
    interactive: false,
    dataVar: 'json_GFjaz_28',
    layerName: 'layer_GFjaz_28',
    pane: 'pane_GFjaz_28',
    style: style_GFjaz_28_0,
});
bounds_group.addLayer(layer_GFjaz_28);
map.addLayer(layer_GFjaz_28)
layersGroupGFjaz.addLayer(layer_GFjaz_28)


function style_GFjazmarker_29_0() {
    return {
        pane: 'pane_GFjazmarker_29',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_GFjazmarker_29_1() {
    return {
        pane: 'pane_GFjazmarker_29',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/running.png',
    iconSize: [16, 16]
}),
        interactive: false,
    }
}
map.createPane('pane_GFjazmarker_29');
map.getPane('pane_GFjazmarker_29').style.zIndex = 429;
map.getPane('pane_GFjazmarker_29').style['mix-blend-mode'] = 'normal';
var layer_GFjazmarker_29 = new L.geoJson.multiStyle(json_GFjazmarker_29, {
    attribution: '',
    interactive: false,
    dataVar: 'json_GFjazmarker_29',
    layerName: 'layer_GFjazmarker_29',
    pane: 'pane_GFjazmarker_29',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_GFjazmarker_29_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_GFjazmarker_29_1(feature));
    },
]});
bounds_group.addLayer(layer_GFjazmarker_29);
layersGroupGFjaz.addLayer(layer_GFjazmarker_29)
layersGroup_204.addLayer(layersGroupGFjaz);


function style_FFjaz_30_0() {
    return {
        pane: 'pane_FFjaz_30',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_FFjaz_30');
map.getPane('pane_FFjaz_30').style.zIndex = 430;
map.getPane('pane_FFjaz_30').style['mix-blend-mode'] = 'normal';
var layer_FFjaz_30 = new L.geoJson(json_FFjaz_30, {
    attribution: '',
    interactive: false,
    dataVar: 'json_FFjaz_30',
    layerName: 'layer_FFjaz_30',
    pane: 'pane_FFjaz_30',
    style: style_FFjaz_30_0,
});
bounds_group.addLayer(layer_FFjaz_30);
layersGroupFFjaz.addLayer(layer_FFjaz_30)


function style_FFjazmarker_31_0() {
    return {
        pane: 'pane_FFjazmarker_31',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_FFjazmarker_31_1() {
    return {
        pane: 'pane_FFjazmarker_31',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/running.png',
    iconSize: [16, 16]
}),
        interactive: false,
    }
}
map.createPane('pane_FFjazmarker_31');
map.getPane('pane_FFjazmarker_31').style.zIndex = 431;
map.getPane('pane_FFjazmarker_31').style['mix-blend-mode'] = 'normal';
var layer_FFjazmarker_31 = new L.geoJson.multiStyle(json_FFjazmarker_31, {
    attribution: '',
    interactive: false,
    dataVar: 'json_FFjazmarker_31',
    layerName: 'layer_FFjazmarker_31',
    pane: 'pane_FFjazmarker_31',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_FFjazmarker_31_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_FFjazmarker_31_1(feature));
    },
]});
bounds_group.addLayer(layer_FFjazmarker_31);
layersGroupFFjaz.addLayer(layer_FFjazmarker_31);
layersGroup_204.addLayer(layersGroupFFjaz);



function style_SFjaz_32_0() {
    return {
        pane: 'pane_SFjaz_32',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_SFjaz_32');
map.getPane('pane_SFjaz_32').style.zIndex = 432;
map.getPane('pane_SFjaz_32').style['mix-blend-mode'] = 'normal';
var layer_SFjaz_32 = new L.geoJson(json_SFjaz_32, {
    attribution: '',
    interactive: false,
    dataVar: 'json_SFjaz_32',
    layerName: 'layer_SFjaz_32',
    pane: 'pane_SFjaz_32',
    style: style_SFjaz_32_0,
});
bounds_group.addLayer(layer_SFjaz_32);
layersGroupSFjaz.addLayer(layer_SFjaz_32);



function style_SFjazmarker_33_0() {
    return {
        pane: 'pane_SFjazmarker_33',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_SFjazmarker_33_1() {
    return {
        pane: 'pane_SFjazmarker_33',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/running.png',
    iconSize: [16,16]
}),
        interactive: false,
    }
}
map.createPane('pane_SFjazmarker_33');
map.getPane('pane_SFjazmarker_33').style.zIndex = 433;
map.getPane('pane_SFjazmarker_33').style['mix-blend-mode'] = 'normal';
var layer_SFjazmarker_33 = new L.geoJson.multiStyle(json_SFjazmarker_33, {
    attribution: '',
    interactive: false,
    dataVar: 'json_SFjazmarker_33',
    layerName: 'layer_SFjazmarker_33',
    pane: 'pane_SFjazmarker_33',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_SFjazmarker_33_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_SFjazmarker_33_1(feature));
    },
]});
bounds_group.addLayer(layer_SFjazmarker_33);
layersGroupSFjaz.addLayer(layer_SFjazmarker_33);

layersGroup_204.addLayer(layersGroupSFjaz);

function style_GFclinic_34_0() {
    return {
        pane: 'pane_GFclinic_34',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_GFclinic_34');
map.getPane('pane_GFclinic_34').style.zIndex = 434;
map.getPane('pane_GFclinic_34').style['mix-blend-mode'] = 'normal';
var layer_GFclinic_34 = new L.geoJson(json_GFclinic_34, {
    attribution: '',
    interactive: false,
    dataVar: 'json_GFclinic_34',
    layerName: 'layer_GFclinic_34',
    pane: 'pane_GFclinic_34',
    style: style_GFclinic_34_0,
});
bounds_group.addLayer(layer_GFclinic_34);
map.addLayer(layer_GFclinic_34);
layersGroupGFclinic.addLayer(layer_GFclinic_34)

function style_GFclinicmarkers_35_0() {
    return {
        pane: 'pane_GFclinicmarkers_35',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_GFclinicmarkers_35_1(feature) {
    switch(String(feature.properties['tybe'])) {
        case 'health':
            return {
                pane: 'pane_GFclinicmarkers_35',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/health_hospital.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
        case 'bathroom':
            return {
                pane: 'pane_GFclinicmarkers_35',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/amenity_toilets.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
        default:
            return {
                pane: 'pane_GFclinicmarkers_35',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/running.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
    
    }
    
}
map.createPane('pane_GFclinicmarkers_35');
map.getPane('pane_GFclinicmarkers_35').style.zIndex = 435;
map.getPane('pane_GFclinicmarkers_35').style['mix-blend-mode'] = 'normal';
var layer_GFclinicmarkers_35 = new L.geoJson.multiStyle(json_GFclinicmarkers_35, {
    attribution: '',
    interactive: false,
    dataVar: 'json_GFclinicmarkers_35',
    layerName: 'layer_GFclinicmarkers_35',
    pane: 'pane_GFclinicmarkers_35',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_GFclinicmarkers_35_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_GFclinicmarkers_35_1(feature));
    },
]});
bounds_group.addLayer(layer_GFclinicmarkers_35);
map.addLayer(layer_GFclinicmarkers_35);
layersGroupGFclinic.addLayer(layer_GFclinicmarkers_35)
layersGroup_231.addLayer(layersGroupGFclinic)

function style_FFclinic_36_0() {
    return {
        pane: 'pane_FFclinic_36',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_FFclinic_36');
map.getPane('pane_FFclinic_36').style.zIndex = 436;
map.getPane('pane_FFclinic_36').style['mix-blend-mode'] = 'normal';
var layer_FFclinic_36 = new L.geoJson(json_FFclinic_36, {
    attribution: '',
    interactive: false,
    dataVar: 'json_FFclinic_36',
    layerName: 'layer_FFclinic_36',
    pane: 'pane_FFclinic_36',
    style: style_FFclinic_36_0,
});
bounds_group.addLayer(layer_FFclinic_36);
layersGroupFFclinic.addLayer(layer_FFclinic_36)

function style_FFclinicmarker_37_0() {
    return {
        pane: 'pane_FFclinicmarker_37',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_FFclinicmarker_37_1(feature) {
    switch(String(feature.properties['tybe'])) {
        case 'health':
            return {
                pane: 'pane_FFclinicmarker_37',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/health_hospital.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
        case 'bathroom':
            return {
                pane: 'pane_FFclinicmarker_37',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/amenity_toilets.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
        default:
            return {
                pane: 'pane_FFclinicmarker_37',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/running.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
    
    }
  
}
map.createPane('pane_FFclinicmarker_37');
map.getPane('pane_FFclinicmarker_37').style.zIndex = 437;
map.getPane('pane_FFclinicmarker_37').style['mix-blend-mode'] = 'normal';
var layer_FFclinicmarker_37 = new L.geoJson.multiStyle(json_FFclinicmarker_37, {
    attribution: '',
    interactive: false,
    dataVar: 'json_FFclinicmarker_37',
    layerName: 'layer_FFclinicmarker_37',
    pane: 'pane_FFclinicmarker_37',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_FFclinicmarker_37_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_FFclinicmarker_37_1(feature));
    },
]});
bounds_group.addLayer(layer_FFclinicmarker_37);
layersGroupFFclinic.addLayer(layer_FFclinicmarker_37)
layersGroup_231.addLayer(layersGroupFFclinic)


function style_SFclinic_38_0() {
    return {
        pane: 'pane_SFclinic_38',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_SFclinic_38');
map.getPane('pane_SFclinic_38').style.zIndex = 438;
map.getPane('pane_SFclinic_38').style['mix-blend-mode'] = 'normal';
var layer_SFclinic_38 = new L.geoJson(json_SFclinic_38, {
    attribution: '',
    interactive: false,
    dataVar: 'json_SFclinic_38',
    layerName: 'layer_SFclinic_38',
    pane: 'pane_SFclinic_38',
    style: style_SFclinic_38_0,
});
bounds_group.addLayer(layer_SFclinic_38);
layersGroupSFclinic.addLayer(layer_SFclinic_38);


function style_SFclinicmarker_39_0() {
    return {
        pane: 'pane_SFclinicmarker_39',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_SFclinicmarker_39_1(feature) {
    switch(String(feature.properties['tybe'])) {
        case 'health':
            return {
                pane: 'pane_SFclinicmarker_39',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/health_hospital.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
        case 'bathroom':
            return {
                pane: 'pane_SFclinicmarker_39',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/amenity_toilets.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
        default:
            return {
                pane: 'pane_SFclinicmarker_39',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/running.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
    
    }
  
}
map.createPane('pane_SFclinicmarker_39');
map.getPane('pane_SFclinicmarker_39').style.zIndex = 439;
map.getPane('pane_SFclinicmarker_39').style['mix-blend-mode'] = 'normal';
var layer_SFclinicmarker_39 = new L.geoJson.multiStyle(json_SFclinicmarker_39, {
    attribution: '',
    interactive: false,
    dataVar: 'json_SFclinicmarker_39',
    layerName: 'layer_SFclinicmarker_39',
    pane: 'pane_SFclinicmarker_39',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_SFclinicmarker_39_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_SFclinicmarker_39_1(feature));
    },
]});
bounds_group.addLayer(layer_SFclinicmarker_39);
layersGroupSFclinic.addLayer(layer_SFclinicmarker_39);
layersGroup_231.addLayer(layersGroupSFclinic);


function style_GFtahdiri_40_0() {
    return {
        pane: 'pane_GFtahdiri_40',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_GFtahdiri_40');
map.getPane('pane_GFtahdiri_40').style.zIndex = 440;
map.getPane('pane_GFtahdiri_40').style['mix-blend-mode'] = 'normal';
var layer_GFtahdiri_40 = new L.geoJson(json_GFtahdiri_40, {
    attribution: '',
    interactive: false,
    dataVar: 'json_GFtahdiri_40',
    layerName: 'layer_GFtahdiri_40',
    pane: 'pane_GFtahdiri_40',
    style: style_GFtahdiri_40_0,
});
bounds_group.addLayer(layer_GFtahdiri_40);
map.addLayer(layer_GFtahdiri_40);
layersGroup_205.addLayer(layer_GFtahdiri_40)


function style_GFtahdiri_markers_41_0() {
    return {
        pane: 'pane_GFtahdiri_markers_41',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: true,
    }
}
function style_GFtahdiri_markers_41_1(feature) {
    switch(String(feature.properties['type'])) {
        case 'disability':
            return {
                pane: 'pane_GFtahdiri_markers_41',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/disability_accessibility2.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
            default:
                return {
                    pane: 'pane_GFtahdiri_markers_41',
            rotationAngle: 0.0,
            rotationOrigin: 'center center',
            icon: L.icon({
                iconUrl: 'markers/running.png',
                iconSize: [16, 16]
            }),
                    interactive: true,
                }
                break;
    
    }
   
}
map.createPane('pane_GFtahdiri_markers_41');
map.getPane('pane_GFtahdiri_markers_41').style.zIndex = 441;
map.getPane('pane_GFtahdiri_markers_41').style['mix-blend-mode'] = 'normal';
var layer_GFtahdiri_markers_41 = new L.geoJson.multiStyle(json_GFtahdiri_markers_41, {
    attribution: '',
    interactive: true,
    dataVar: 'json_GFtahdiri_markers_41',
    layerName: 'layer_GFtahdiri_markers_41',
    pane: 'pane_GFtahdiri_markers_41',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_GFtahdiri_markers_41_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_GFtahdiri_markers_41_1(feature));
    },
]});
bounds_group.addLayer(layer_GFtahdiri_markers_41);
map.addLayer(layer_GFtahdiri_markers_41);


function style_F1tahdiri_42_0() {
    return {
        pane: 'pane_F1tahdiri_42',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_F1tahdiri_42');
map.getPane('pane_F1tahdiri_42').style.zIndex = 442;
map.getPane('pane_F1tahdiri_42').style['mix-blend-mode'] = 'normal';
var layer_F1tahdiri_42 = new L.geoJson(json_F1tahdiri_42, {
    attribution: '',
    interactive: false,
    dataVar: 'json_F1tahdiri_42',
    layerName: 'layer_F1tahdiri_42',
    pane: 'pane_F1tahdiri_42',
    style: style_F1tahdiri_42_0,
});
bounds_group.addLayer(layer_F1tahdiri_42);
layersGroup_205.addLayer(layer_F1tahdiri_42);


function style_F2tahdiri_43_0(feature) {
    switch(String(feature.properties['id'])) {
        case '1':
            return {
        pane: 'pane_F2tahdiri_43',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,191,1.0)',
        interactive: false,
    }
            break;
        default:
            return {
        pane: 'pane_F2tahdiri_43',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
            break;
    }
}
map.createPane('pane_F2tahdiri_43');
map.getPane('pane_F2tahdiri_43').style.zIndex = 443;
map.getPane('pane_F2tahdiri_43').style['mix-blend-mode'] = 'normal';
var layer_F2tahdiri_43 = new L.geoJson(json_F2tahdiri_43, {
    attribution: '',
    interactive: false,
    dataVar: 'json_F2tahdiri_43',
    layerName: 'layer_F2tahdiri_43',
    pane: 'pane_F2tahdiri_43',
    style: style_F2tahdiri_43_0,
});
bounds_group.addLayer(layer_F2tahdiri_43);
layersGroup_205.addLayer(layer_F2tahdiri_43);


function style_F1tahdiri_markers_44_0() {
    return {
        pane: 'pane_F1tahdiri_markers_44',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_F1tahdiri_markers_44_1() {
    return {
        pane: 'pane_F1tahdiri_markers_44',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/running.png',
    iconSize: [16, 16]
}),
        interactive: false,
    }
}
map.createPane('pane_F1tahdiri_markers_44');
map.getPane('pane_F1tahdiri_markers_44').style.zIndex = 444;
map.getPane('pane_F1tahdiri_markers_44').style['mix-blend-mode'] = 'normal';
var layer_F1tahdiri_markers_44 = new L.geoJson.multiStyle(json_F1tahdiri_markers_44, {
    attribution: '',
    interactive: false,
    dataVar: 'json_F1tahdiri_markers_44',
    layerName: 'layer_F1tahdiri_markers_44',
    pane: 'pane_F1tahdiri_markers_44',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_F1tahdiri_markers_44_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_F1tahdiri_markers_44_1(feature));
    },
]});
bounds_group.addLayer(layer_F1tahdiri_markers_44);



function style_F3tahdiri_45_0(feature) {
    switch(String(feature.properties['id'])) {
        case '1':
            return {
        pane: 'pane_F3tahdiri_45',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,191,1.0)',
        interactive: false,
    }
            break;
        default:
            return {
        pane: 'pane_F3tahdiri_45',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
            break;
    }
}
map.createPane('pane_F3tahdiri_45');
map.getPane('pane_F3tahdiri_45').style.zIndex = 445;
map.getPane('pane_F3tahdiri_45').style['mix-blend-mode'] = 'normal';
var layer_F3tahdiri_45 = new L.geoJson(json_F3tahdiri_45, {
    attribution: '',
    interactive: false,
    dataVar: 'json_F3tahdiri_45',
    layerName: 'layer_F3tahdiri_45',
    pane: 'pane_F3tahdiri_45',
    style: style_F3tahdiri_45_0,
});
bounds_group.addLayer(layer_F3tahdiri_45);
layersGroup_205.addLayer(layer_F3tahdiri_45);



function style_GFTV_46_0() {
    return {
        pane: 'pane_GFTV_46',
        opacity: 1,
        color: 'rgba(134,134,134,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_GFTV_46');
map.getPane('pane_GFTV_46').style.zIndex = 446;
map.getPane('pane_GFTV_46').style['mix-blend-mode'] = 'normal';
var layer_GFTV_46 = new L.geoJson(json_GFTV_46, {
    attribution: '',
    interactive: false,
    dataVar: 'json_GFTV_46',
    layerName: 'layer_GFTV_46',
    pane: 'pane_GFTV_46',
    style: style_GFTV_46_0,
});
bounds_group.addLayer(layer_GFTV_46);
map.addLayer(layer_GFTV_46);
layersGroupGFTV.addLayer(layer_GFTV_46)

function style_GFTV_markers_47_0() {
    return {
        pane: 'pane_GFTV_markers_47',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_GFTV_markers_47_1() {
    return {
        pane: 'pane_GFTV_markers_47',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/running.png',
            iconSize: [16, 16]
        }),
                interactive: false,
}
}
map.createPane('pane_GFTV_markers_47');
map.getPane('pane_GFTV_markers_47').style.zIndex = 447;
map.getPane('pane_GFTV_markers_47').style['mix-blend-mode'] = 'normal';
var layer_GFTV_markers_47 = new L.geoJson.multiStyle(json_GFTV_markers_47, {
    attribution: '',
    interactive: false,
    dataVar: 'json_GFTV_markers_47',
    layerName: 'layer_GFTV_markers_47',
    pane: 'pane_GFTV_markers_47',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_GFTV_markers_47_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_GFTV_markers_47_1(feature));
    },
]});
bounds_group.addLayer(layer_GFTV_markers_47);
map.addLayer(layer_GFTV_markers_47);
layersGroupGFTV.addLayer(layer_GFTV_markers_47);
layersGroup_239.addLayer(layersGroupGFTV);




function style_F1TV_48_0(feature) {
    switch(String(feature.properties['id'])) {
        case '1':
            return {
        pane: 'pane_F1TV_48',
        stroke: false, 
        fill: true,
        fillOpacity: 1,
        fillColor: '#ffff85',
        interactive: false,
    }
            break;
        default:
            return {
        pane: 'pane_F1TV_48',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: '#e1e1b7',
        interactive: false,
    }
            break;
    }
}
map.createPane('pane_F1TV_48');
map.getPane('pane_F1TV_48').style.zIndex = 448;
map.getPane('pane_F1TV_48').style['mix-blend-mode'] = 'normal';
var layer_F1TV_48 = new L.geoJson(json_F1TV_48, {
    attribution: '',
    interactive: false,
    dataVar: 'json_F1TV_48',
    layerName: 'layer_F1TV_48',
    pane: 'pane_F1TV_48',
    style: style_F1TV_48_0,
});
bounds_group.addLayer(layer_F1TV_48);
layersGroupF1TV.addLayer(layer_F1TV_48);



function style_F1TV_markers_49_0() {
    
    return {
        pane: 'pane_F1TV_markers_49',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_F1TV_markers_49_1() {
            return {
                pane: 'pane_F1TV_markers_49',
                rotationAngle: 0.0,
                rotationOrigin: 'center center',
                icon: L.icon({
                    iconUrl: 'markers/running.png',
                    iconSize: [16, 16]
                }),
                        interactive: false,
    }
           
}
map.createPane('pane_F1TV_markers_49');
map.getPane('pane_F1TV_markers_49').style.zIndex = 449;
map.getPane('pane_F1TV_markers_49').style['mix-blend-mode'] = 'normal';
var layer_F1TV_markers_49 = new L.geoJson.multiStyle(json_F1TV_markers_49, {
    attribution: '',
    interactive: false,
    dataVar: 'json_F1TV_markers_49',
    layerName: 'layer_F1TV_markers_49',
    pane: 'pane_F1TV_markers_49',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_F1TV_markers_49_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_F1TV_markers_49_1(feature));
    },
]});
bounds_group.addLayer(layer_F1TV_markers_49);
layersGroupF1TV.addLayer(layer_F1TV_markers_49)
layersGroup_239.addLayer(layersGroupF1TV);

function style_F2TV_50_0(feature) {
    switch(String(feature.properties['id'])) {
        case '1':
            return {
        pane: 'pane_F2TV_50',
        stroke: false, 
        fill: true,
        fillOpacity: 1,
        fillColor: '#ffff85',
        interactive: false,
    }
            break;
        default:
            return {
        pane: 'pane_F2TV_50',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
            break;
    }
}
map.createPane('pane_F2TV_50');
map.getPane('pane_F2TV_50').style.zIndex = 450;
map.getPane('pane_F2TV_50').style['mix-blend-mode'] = 'normal';
var layer_F2TV_50 = new L.geoJson(json_F2TV_50, {
    attribution: '',
    interactive: false,
    dataVar: 'json_F2TV_50',
    layerName: 'layer_F2TV_50',
    pane: 'pane_F2TV_50',
    style: style_F2TV_50_0,
});
bounds_group.addLayer(layer_F2TV_50);
layersGroupF2TV.addLayer(layer_F2TV_50)

function style_F2TV_markers_0_0() {
    return {
        pane: 'pane_F2TV_markers_0',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_F2TV_markers_0_1() {
    return {
        pane: 'pane_F2TV_markers_0',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/running.png',
    iconSize: [16, 16]
}),
        interactive: false,
    }
}
map.createPane('pane_F2TV_markers_0');
map.getPane('pane_F2TV_markers_0').style.zIndex = 451;
map.getPane('pane_F2TV_markers_0').style['mix-blend-mode'] = 'normal';
var layer_F2TV_markers_0 = new L.geoJson.multiStyle(json_F2TV_markers_0, {
    attribution: '',
    interactive: true,
    dataVar: 'json_F2TV_markers_0',
    layerName: 'layer_F2TV_markers_0',
    pane: 'pane_F2TV_markers_0',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_F2TV_markers_0_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_F2TV_markers_0_1(feature));
    },
]});
bounds_group.addLayer(layer_F2TV_markers_0);
layersGroupF2TV.addLayer(layer_F2TV_markers_0)
layersGroup_239.addLayer(layersGroupF2TV)


function style_F3TV_51_0(feature) {
    switch(String(feature.properties['id'])) {
        case '1':
            return {
        pane: 'pane_F3TV_51',
        stroke: false, 
        fill: true,
        fillOpacity: 1,
        fillColor: '#ffff85',
        interactive: false,
    }
            break;
        default:
            return {
        pane: 'pane_F3TV_51',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
            break;
    }
}
map.createPane('pane_F3TV_51');
map.getPane('pane_F3TV_51').style.zIndex = 451;
map.getPane('pane_F3TV_51').style['mix-blend-mode'] = 'normal';
var layer_F3TV_51 = new L.geoJson(json_F3TV_51, {
    attribution: '',
    interactive: false,
    dataVar: 'json_F3TV_51',
    layerName: 'layer_F3TV_51',
    pane: 'pane_F3TV_51',
    style: style_F3TV_51_0,
});
bounds_group.addLayer(layer_F3TV_51);
layersGroupF3TV.addLayer(layer_F3TV_51)



function style_F3TV_markers_52_0() {
    return {
        pane: 'pane_F3TV_markers_52',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_F3TV_markers_52_1() {
    return {
        pane: 'pane_F3TV_markers_52',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/running.png',
    iconSize: [16, 16]
}),
        interactive: false,
    }
}
map.createPane('pane_F3TV_markers_52');
map.getPane('pane_F3TV_markers_52').style.zIndex = 452;
map.getPane('pane_F3TV_markers_52').style['mix-blend-mode'] = 'normal';
var layer_F3TV_markers_52 = new L.geoJson.multiStyle(json_F3TV_markers_52, {
    attribution: '',
    interactive: false,
    dataVar: 'json_F3TV_markers_52',
    layerName: 'layer_F3TV_markers_52',
    pane: 'pane_F3TV_markers_52',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_F3TV_markers_52_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_F3TV_markers_52_1(feature));
    },
]});
bounds_group.addLayer(layer_F3TV_markers_52);
layersGroupF3TV.addLayer(layer_F3TV_markers_52)
layersGroup_239.addLayer(layersGroupF3TV)


function style_Layer_business1_53_0() {
    return {
        pane: 'pane_Layer_business1_53',
        opacity: 1,
        color: 'rgba(134,134,134,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_Layer_business1_53');
map.getPane('pane_Layer_business1_53').style.zIndex = 453;
map.getPane('pane_Layer_business1_53').style['mix-blend-mode'] = 'normal';
var layer_Layer_business1_53 = new L.geoJson(json_Layer_business1_53, {
    attribution: '',
    interactive: false,
    dataVar: 'json_Layer_business1_53',
    layerName: 'layer_Layer_business1_53',
    pane: 'pane_Layer_business1_53',
    style: style_Layer_business1_53_0,
});
bounds_group.addLayer(layer_Layer_business1_53);
map.addLayer(layer_Layer_business1_53);
layersGroupGFBusiness.addLayer(layer_Layer_business1_53)

function style_Layer_business1_marker_54_0() {
    return {
        pane: 'pane_Layer_business1_marker_54',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_Layer_business1_marker_54_1(feature) {
    switch(String(feature.properties['type'])) {
        case 'bathroom':
            return {
                pane: 'pane_Layer_business1_marker_54',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/amenity_toilets.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
        default:
            return {
                pane: 'pane_Layer_business1_marker_54',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/running.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
    
    }
   
}
map.createPane('pane_Layer_business1_marker_54');
map.getPane('pane_Layer_business1_marker_54').style.zIndex = 454;
map.getPane('pane_Layer_business1_marker_54').style['mix-blend-mode'] = 'normal';
var layer_Layer_business1_marker_54 = new L.geoJson.multiStyle(json_Layer_business1_marker_54, {
    attribution: '',
    interactive: false,
    dataVar: 'json_Layer_business1_marker_54',
    layerName: 'layer_Layer_business1_marker_54',
    pane: 'pane_Layer_business1_marker_54',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Layer_business1_marker_54_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Layer_business1_marker_54_1(feature));
    },
]});
bounds_group.addLayer(layer_Layer_business1_marker_54);
map.addLayer(layer_Layer_business1_marker_54);
layersGroupGFBusiness.addLayer(layer_Layer_business1_marker_54)
layersGroup_227.addLayer(layersGroupGFBusiness)


function style_LayerBuisness2_55_0() {
    return {
        pane: 'pane_LayerBuisness2_55',
        opacity: 1,
        color: 'rgba(134,134,134,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_LayerBuisness2_55');
map.getPane('pane_LayerBuisness2_55').style.zIndex = 455;
map.getPane('pane_LayerBuisness2_55').style['mix-blend-mode'] = 'normal';
var layer_LayerBuisness2_55 = new L.geoJson(json_LayerBuisness2_55, {
    attribution: '',
    interactive: false,
    dataVar: 'json_LayerBuisness2_55',
    layerName: 'layer_LayerBuisness2_55',
    pane: 'pane_LayerBuisness2_55',
    style: style_LayerBuisness2_55_0,
});
bounds_group.addLayer(layer_LayerBuisness2_55);
layersGroupFFBusiness.addLayer(layer_LayerBuisness2_55)

function style_LayerBuisness2_marker_56_0() {
    return {
        pane: 'pane_LayerBuisness2_marker_56',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_LayerBuisness2_marker_56_1(feature) {
    switch(String(feature.properties['type'])) {
        case 'bathroom':
            return {
                pane: 'pane_LayerBuisness2_marker_56',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/amenity_toilets.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
        default:
            return {
                pane: 'pane_LayerBuisness2_marker_56',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/running.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
    
    }
   
}
map.createPane('pane_LayerBuisness2_marker_56');
map.getPane('pane_LayerBuisness2_marker_56').style.zIndex = 456;
map.getPane('pane_LayerBuisness2_marker_56').style['mix-blend-mode'] = 'normal';
var layer_LayerBuisness2_marker_56 = new L.geoJson.multiStyle(json_LayerBuisness2_marker_56, {
    attribution: '',
    interactive: false,
    dataVar: 'json_LayerBuisness2_marker_56',
    layerName: 'layer_LayerBuisness2_marker_56',
    pane: 'pane_LayerBuisness2_marker_56',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_LayerBuisness2_marker_56_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_LayerBuisness2_marker_56_1(feature));
    },
]});
bounds_group.addLayer(layer_LayerBuisness2_marker_56);
layersGroupFFBusiness.addLayer(layer_LayerBuisness2_marker_56)
layersGroup_227.addLayer(layersGroupFFBusiness)


function style_LayerBusiness3_57_0() {
    return {
        pane: 'pane_LayerBusiness3_57',
        opacity: 1,
        color: 'rgba(134,134,134,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_LayerBusiness3_57');
map.getPane('pane_LayerBusiness3_57').style.zIndex = 457;
map.getPane('pane_LayerBusiness3_57').style['mix-blend-mode'] = 'normal';
var layer_LayerBusiness3_57 = new L.geoJson(json_LayerBusiness3_57, {
    attribution: '',
    interactive: false,
    dataVar: 'json_LayerBusiness3_57',
    layerName: 'layer_LayerBusiness3_57',
    pane: 'pane_LayerBusiness3_57',
    style: style_LayerBusiness3_57_0,
});
bounds_group.addLayer(layer_LayerBusiness3_57);
layersGroupSFBusiness.addLayer(layer_LayerBusiness3_57)
function style_LayerBusiness3_marker_58_0() {
    return {
        pane: 'pane_LayerBusiness3_marker_58',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_LayerBusiness3_marker_58_1() {
    return {
        pane: 'pane_LayerBusiness3_marker_58',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/running.png',
    iconSize: [16, 16]
}),
        interactive: false,
    }
}
map.createPane('pane_LayerBusiness3_marker_58');
map.getPane('pane_LayerBusiness3_marker_58').style.zIndex = 458;
map.getPane('pane_LayerBusiness3_marker_58').style['mix-blend-mode'] = 'normal';
var layer_LayerBusiness3_marker_58 = new L.geoJson.multiStyle(json_LayerBusiness3_marker_58, {
    attribution: '',
    interactive: false,
    dataVar: 'json_LayerBusiness3_marker_58',
    layerName: 'layer_LayerBusiness3_marker_58',
    pane: 'pane_LayerBusiness3_marker_58',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_LayerBusiness3_marker_58_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_LayerBusiness3_marker_58_1(feature));
    },
]});
bounds_group.addLayer(layer_LayerBusiness3_marker_58);
layersGroupSFBusiness.addLayer(layer_LayerBusiness3_marker_58)
layersGroup_227.addLayer(layersGroupSFBusiness)

function style_Gpharmacy_59_0() {
    return {
        pane: 'pane_Gpharmacy_59',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_Gpharmacy_59');
map.getPane('pane_Gpharmacy_59').style.zIndex = 459;
map.getPane('pane_Gpharmacy_59').style['mix-blend-mode'] = 'normal';
var layer_Gpharmacy_59 = new L.geoJson(json_Gpharmacy_59, {
    attribution: '',
    interactive: false,
    dataVar: 'json_Gpharmacy_59',
    layerName: 'layer_Gpharmacy_59',
    pane: 'pane_Gpharmacy_59',
    style: style_Gpharmacy_59_0,
});
bounds_group.addLayer(layer_Gpharmacy_59);
map.addLayer(layer_Gpharmacy_59);
layersGroupGFPharmacy.addLayer(layer_Gpharmacy_59)

function style_Gpharmacy_markers_60_0() {
    return {
        pane: 'pane_Gpharmacy_markers_60',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: true,
    }
}
function style_Gpharmacy_markers_60_1(feature) {
    switch(String(feature.properties['type'])) {
        case 'bathroom':
            return {
                pane: 'pane_Gpharmacy_markers_60',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/amenity_toilets.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
            case 'accessibility':
                return {
                    pane: 'pane_Gpharmacy_markers_60',
            rotationAngle: 0.0,
            rotationOrigin: 'center center',
            icon: L.icon({
                iconUrl: 'markers/disability_accessibility2.png',
                iconSize: [16, 16]
            }),
                    interactive: false,
                }
                break;
        default:
            return {
                pane: 'pane_Gpharmacy_markers_60',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/running.png',
            iconSize: [16, 16]
        }),
                interactive: true,
            }
            break;
    
    }
    
}
map.createPane('pane_Gpharmacy_markers_60');
map.getPane('pane_Gpharmacy_markers_60').style.zIndex = 460;
map.getPane('pane_Gpharmacy_markers_60').style['mix-blend-mode'] = 'normal';
var layer_Gpharmacy_markers_60 = new L.geoJson.multiStyle(json_Gpharmacy_markers_60, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Gpharmacy_markers_60',
    layerName: 'layer_Gpharmacy_markers_60',
    pane: 'pane_Gpharmacy_markers_60',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Gpharmacy_markers_60_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Gpharmacy_markers_60_1(feature));
    },
]});
bounds_group.addLayer(layer_Gpharmacy_markers_60);
map.addLayer(layer_Gpharmacy_markers_60);
layersGroupGFPharmacy.addLayer(layer_Gpharmacy_markers_60)
layersGroup_223.addLayer(layersGroupGFPharmacy);

function style_Fpharmacy_61_0() {
    return {
        pane: 'pane_Fpharmacy_61',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_Fpharmacy_61');
map.getPane('pane_Fpharmacy_61').style.zIndex = 461;
map.getPane('pane_Fpharmacy_61').style['mix-blend-mode'] = 'normal';
var layer_Fpharmacy_61 = new L.geoJson(json_Fpharmacy_61, {
    attribution: '',
    interactive: false,
    dataVar: 'json_Fpharmacy_61',
    layerName: 'layer_Fpharmacy_61',
    pane: 'pane_Fpharmacy_61',
    style: style_Fpharmacy_61_0,
});
bounds_group.addLayer(layer_Fpharmacy_61);
layersGroupFFPharmacy.addLayer(layer_Fpharmacy_61)


function style_Fpharmacy_markers_62_0() {
    return {
        pane: 'pane_Fpharmacy_markers_62',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_Fpharmacy_markers_62_1(feature) {
    switch(String(feature.properties['type'])) {
        case 'bathroom':
            return {
                pane: 'pane_Fpharmacy_markers_62',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/amenity_toilets.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
        case 'club':
            return {
                pane: 'pane_Fpharmacy_markers_62',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/fingerprint.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
            case 'pray':
                return {
                    pane: 'pane_Fpharmacy_markers_62',
            rotationAngle: 0.0,
            rotationOrigin: 'center center',
            icon: L.icon({
                iconUrl: 'markers/mosque.png',
                iconSize: [16, 16]
            }),
                    interactive: false,
                }
                break;
            default:
                return {
                    pane: 'pane_Fpharmacy_markers_62',
            rotationAngle: 0.0,
            rotationOrigin: 'center center',
            icon: L.icon({
                iconUrl: 'markers/running.png',
                iconSize: [16, 16]
            }),
                    interactive: false,
                }
                break;
    
    }

}
map.createPane('pane_Fpharmacy_markers_62');
map.getPane('pane_Fpharmacy_markers_62').style.zIndex = 462;
map.getPane('pane_Fpharmacy_markers_62').style['mix-blend-mode'] = 'normal';
var layer_Fpharmacy_markers_62 = new L.geoJson.multiStyle(json_Fpharmacy_markers_62, {
    attribution: '',
    interactive: false,
    dataVar: 'json_Fpharmacy_markers_62',
    layerName: 'layer_Fpharmacy_markers_62',
    pane: 'pane_Fpharmacy_markers_62',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Fpharmacy_markers_62_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Fpharmacy_markers_62_1(feature));
    },
]});
bounds_group.addLayer(layer_Fpharmacy_markers_62);
layersGroupFFPharmacy.addLayer(layer_Fpharmacy_markers_62)
layersGroup_223.addLayer(layersGroupFFPharmacy);


function style_Spharmacy_63_0() {
    return {
        pane: 'pane_Spharmacy_63',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,225,183,1.0)',
        interactive: false,
    }
}
map.createPane('pane_Spharmacy_63');
map.getPane('pane_Spharmacy_63').style.zIndex = 463;
map.getPane('pane_Spharmacy_63').style['mix-blend-mode'] = 'normal';
var layer_Spharmacy_63 = new L.geoJson(json_Spharmacy_63, {
    attribution: '',
    interactive: false,
    dataVar: 'json_Spharmacy_63',
    layerName: 'layer_Spharmacy_63',
    pane: 'pane_Spharmacy_63',
    style: style_Spharmacy_63_0,
});
bounds_group.addLayer(layer_Spharmacy_63);
layersGroupSFPharmacy.addLayer(layer_Spharmacy_63)


function style_Spharmacy_markers_64_0() {
    return {
        pane: 'pane_Spharmacy_markers_64',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_Spharmacy_markers_64_1(feature) {
    switch(String(feature.properties['type'])) {
        case 'club':
            return {
                pane: 'pane_Spharmacy_markers_64',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'markers/fingerprint.png',
            iconSize: [16, 16]
        }),
                interactive: false,
            }
            break;
            case 'pray':
                return {
                    pane: 'pane_Spharmacy_markers_64',
            rotationAngle: 0.0,
            rotationOrigin: 'center center',
            icon: L.icon({
                iconUrl: 'markers/mosque.png',
                iconSize: [16, 16]
            }),
                    interactive: false,
                }
                break;
            default:
                return {
                    pane: 'pane_Spharmacy_markers_64',
            rotationAngle: 0.0,
            rotationOrigin: 'center center',
            icon: L.icon({
                iconUrl: 'markers/running.png',
                iconSize: [16, 16]
            }),
                    interactive: false,
                }
                break;
    
    }
   
}
map.createPane('pane_Spharmacy_markers_64');
map.getPane('pane_Spharmacy_markers_64').style.zIndex = 464;
map.getPane('pane_Spharmacy_markers_64').style['mix-blend-mode'] = 'normal';
var layer_Spharmacy_markers_64 = new L.geoJson.multiStyle(json_Spharmacy_markers_64, {
    attribution: '',
    interactive: false,
    dataVar: 'json_Spharmacy_markers_64',
    layerName: 'layer_Spharmacy_markers_64',
    pane: 'pane_Spharmacy_markers_64',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Spharmacy_markers_64_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Spharmacy_markers_64_1(feature));
    },
]});
bounds_group.addLayer(layer_Spharmacy_markers_64);
layersGroupSFPharmacy.addLayer(layer_Spharmacy_markers_64)
layersGroup_223.addLayer(layersGroupSFPharmacy);


/////////markers layers///////////////////////////////////////////////////////////////////////

function style_exit_65_0() {
    return {
        pane: 'pane_exit_65',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/running.png',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_exit_65_1() {
    return {
        pane: 'pane_exit_65',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/running.png',
    iconSize: [16, 16]
}),
        interactive: false,
    }
}
map.createPane('pane_exit_65');
map.getPane('pane_exit_65').style.zIndex = 465;
map.getPane('pane_exit_65').style['mix-blend-mode'] = 'normal';
var layer_exit_65 = new L.geoJson.multiStyle(json_exit_65, {
    attribution: '',
    interactive: false,
    dataVar: 'json_exit_65',
    layerName: 'layer_exit_65',
    pane: 'pane_exit_65',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_exit_65_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_exit_65_1(feature));
    },
]});
bounds_group.addLayer(layer_exit_65);


function style_enterances_66_0() {
    return {
        pane: 'pane_enterances_66',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_enterances_66_1() {
    return {
        pane: 'pane_enterances_66',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/door-open.png',
    iconSize: [16, 16]
}),
        interactive: false,
    }
}
map.createPane('pane_enterances_66');
map.getPane('pane_enterances_66').style.zIndex = 466;
map.getPane('pane_enterances_66').style['mix-blend-mode'] = 'normal';
var layer_enterances_66 = new L.geoJson.multiStyle(json_enterances_66, {
    attribution: '',
    interactive: false,
    dataVar: 'json_enterances_66',
    layerName: 'layer_enterances_66',
    pane: 'pane_enterances_66',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_enterances_66_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_enterances_66_1(feature));
    },
]});
bounds_group.addLayer(layer_enterances_66);


function pop_parking_67(feature, layer) {
    var popupContent = '<div class="container">' +
    '<div class="row" style="text-align:right;">' +
        '<div class="col-12">' +
            '<div class="table">' +
                '<div class="row">' +
                    '<div style="font-weight: bold;" class="col-12 text-right">' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</div>' +
                '</div>' +
                '<div class="row">' +
                    '<div class="col-12 text-right">' + (feature.properties['Disc'] !== null ? autolinker.link(feature.properties['Disc'].toLocaleString()) : '') + '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>' +
'</div>';
    layer.bindPopup(popupContent, {maxHeight: 310});
}

function style_parking_67_0() {
    return {
        pane: 'pane_parking_67',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/amenity=parking.svg',
    iconSize: [1, 1]
}),
        interactive: true,
    }
}
function style_parking_67_1() {
    return {
        pane: 'pane_parking_67',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/amenity=parking.png',
    iconSize: [16, 16]
}),
        interactive: true,
    }
}
map.createPane('pane_parking_67');
map.getPane('pane_parking_67').style.zIndex = 467;
map.getPane('pane_parking_67').style['mix-blend-mode'] = 'normal';
var layer_parking_67 = new L.geoJson.multiStyle(json_parking_67, {
    attribution: '',
    interactive: true,
    dataVar: 'json_parking_67',
    layerName: 'layer_parking_67',
    pane: 'pane_parking_67',
    onEachFeature: pop_parking_67,
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_parking_67_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_parking_67_1(feature));
    },
]});
bounds_group.addLayer(layer_parking_67);



function style_prayer_68_0() {
    return {
        pane: 'pane_prayer_68',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/mosque.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_prayer_68_1() {
    return {
        pane: 'pane_prayer_68',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/mosque.png',
    iconSize: [16, 16]
}),
        interactive: false,
    }
}
map.createPane('pane_prayer_68');
map.getPane('pane_prayer_68').style.zIndex = 468;
map.getPane('pane_prayer_68').style['mix-blend-mode'] = 'normal';
var layer_prayer_68 = new L.geoJson.multiStyle(json_prayer_68, {
    attribution: '',
    interactive: false,
    dataVar: 'json_prayer_68',
    layerName: 'layer_prayer_68',
    pane: 'pane_prayer_68',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_prayer_68_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_prayer_68_1(feature));
    },
]});
bounds_group.addLayer(layer_prayer_68);


function style_decare_69_0() {
    return {
        pane: 'pane_decare_69',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/baby-carriage.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_decare_69_1() {
    return {
        pane: 'pane_decare_69',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/baby-carriage.png',
    iconSize: [16, 16]
}),
        interactive: false,
    }
}
map.createPane('pane_decare_69');
map.getPane('pane_decare_69').style.zIndex = 469;
map.getPane('pane_decare_69').style['mix-blend-mode'] = 'normal';
var layer_decare_69 = new L.geoJson.multiStyle(json_decare_69, {
    attribution: '',
    interactive: false,
    dataVar: 'json_decare_69',
    layerName: 'layer_decare_69',
    pane: 'pane_decare_69',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_decare_69_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_decare_69_1(feature));
    },
]});
bounds_group.addLayer(layer_decare_69);



function style_clubs_70_0() {
    return {
        pane: 'pane_clubs_70',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/fingerprint.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_clubs_70_1() {
    return {
        pane: 'pane_clubs_70',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/fingerprint.png',
    iconSize: [16, 16]
}),
        interactive: false,
    }
}
map.createPane('pane_clubs_70');
map.getPane('pane_clubs_70').style.zIndex = 470;
map.getPane('pane_clubs_70').style['mix-blend-mode'] = 'normal';
var layer_clubs_70 = new L.geoJson.multiStyle(json_clubs_70, {
    attribution: '',
    interactive: false,
    dataVar: 'json_clubs_70',
    layerName: 'layer_clubs_70',
    pane: 'pane_clubs_70',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_clubs_70_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_clubs_70_1(feature));
    },
]});
bounds_group.addLayer(layer_clubs_70);


function style_qiasExam_71_0() {
    return {
        pane: 'pane_qiasExam_71',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/pencil-alt.svg',
    iconSize: [1, 1]
}),
        interactive: true,
    }
}
function style_qiasExam_71_1() {
    return {
        pane: 'pane_qiasExam_71',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/pencil-alt.png',
    iconSize: [16, 16]
}),
        interactive: true,
    }
}
map.createPane('pane_qiasExam_71');
map.getPane('pane_qiasExam_71').style.zIndex = 471;
map.getPane('pane_qiasExam_71').style['mix-blend-mode'] = 'normal';
var layer_qiasExam_71 = new L.geoJson.multiStyle(json_qiasExam_71, {
    attribution: '',
    interactive: true,
    dataVar: 'json_qiasExam_71',
    layerName: 'layer_qiasExam_71',
    pane: 'pane_qiasExam_71',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_qiasExam_71_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_qiasExam_71_1(feature));
    },
]});
bounds_group.addLayer(layer_qiasExam_71);

function pop_shop_72(feature, layer) {
     var popupContent = '<div class="container">' +
    '<div style="text-align:right;" class="row">' +
        '<div class="col-12">' +
            '<div class="table ">' +
                '<div class="row">' +
                    '<div style="font-weight: bold;" class="col-12 text-right">' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</div>' +
                '</div>' +
                '<div class="row">' +
                    '<div class="col-12 text-right">' + (feature.properties['descrip'] !== null ? autolinker.link(feature.properties['descrip'].toLocaleString()) : '') + '</div>' +
                '</div>' +
                '<div class="row">' +
                    '<div class="col-12 text-right">' + (feature.properties['position'] !== null ? autolinker.link(feature.properties['position'].toLocaleString()) : '') + '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>' +
'</div>';

    layer.bindPopup(popupContent, {maxHeight: 310});
}

function style_shop_72_0() {
    return {
        pane: 'pane_shop_72',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/shopping-bag.svg',
    iconSize: [1, 1]
}),
        interactive: true,
    }
}
function style_shop_72_1() {
    return {
        pane: 'pane_shop_72',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/shopping-bag.png',
    iconSize: [16, 16]
}),
        interactive: true,
    }
}
map.createPane('pane_shop_72');
map.getPane('pane_shop_72').style.zIndex = 472;
map.getPane('pane_shop_72').style['mix-blend-mode'] = 'normal';
var layer_shop_72 = new L.geoJson.multiStyle(json_shop_72, {
    attribution: '',
    interactive: true,
    dataVar: 'json_shop_72',
    layerName: 'layer_shop_72',
    pane: 'pane_shop_72',
    onEachFeature: pop_shop_72,
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_shop_72_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_shop_72_1(feature));
    },
]});
bounds_group.addLayer(layer_shop_72);



function style_resturant_73_0() {
    return {
        pane: 'pane_resturant_73',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/food_restaurant.svg',
    iconSize: [1, 1]
}),
        interactive: true,
    }
}
function style_resturant_73_1() {
    return {
        pane: 'pane_resturant_73',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/food_restaurant.png',
    iconSize: [16, 16]
}),
        interactive: true,
    }
}
map.createPane('pane_resturant_73');
map.getPane('pane_resturant_73').style.zIndex = 473;
map.getPane('pane_resturant_73').style['mix-blend-mode'] = 'normal';
var layer_resturant_73 = new L.geoJson.multiStyle(json_resturant_73, {
    attribution: '',
    interactive: true,
    dataVar: 'json_resturant_73',
    layerName: 'layer_resturant_73',
    pane: 'pane_resturant_73',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_resturant_73_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_resturant_73_1(feature));
    },
]});
bounds_group.addLayer(layer_resturant_73);

function pop_coffee_74(feature, layer) {
    var popupContent = '<div class="container">' +
    '<div style="text-align:right;" class="row">' +
        '<div class="col-12">' +
            '<div class="table">' +
                '<div style="font-weight: bold;" class="row">' +
                    '<div class="col-12 text-right bf-light">' +
                        '<span class="font-weight-bold">' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</span>' +
                    '</div>' +
                '</div>' +
                '<div class="row">' +
                    '<div class="col-12 text-right">' + (feature.properties['Disc'] !== null ? autolinker.link(feature.properties['Disc'].toLocaleString()) : '') + '</div>' +
                '</div>' +
                '<div class="row">' +
                    '<div class="col-12 text-right">' + (feature.properties['position'] !== null ? autolinker.link(feature.properties['position'].toLocaleString()) : '') + '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>' +
'</div>';
    layer.bindPopup(popupContent, {maxHeight: 310});
}

function style_coffee_74_0() {
    return {
        pane: 'pane_coffee_74',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/food_cafe.svg',
    iconSize: [1, 1]
}),
        interactive: true,
    }
}
function style_coffee_74_1() {
    return {
        pane: 'pane_coffee_74',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/food_cafe.png',
    iconSize: [16, 16]
}),
        interactive: true,
    }
}
map.createPane('pane_coffee_74');
map.getPane('pane_coffee_74').style.zIndex = 474;
map.getPane('pane_coffee_74').style['mix-blend-mode'] = 'normal';
var layer_coffee_74 = new L.geoJson.multiStyle(json_coffee_74, {
    attribution: '',
    interactive: true,
    dataVar: 'json_coffee_74',
    layerName: 'layer_coffee_74',
    onEachFeature: pop_coffee_74,
    pane: 'pane_coffee_74',
    
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_coffee_74_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_coffee_74_1(feature));
    },
]});
bounds_group.addLayer(layer_coffee_74);



function style_bathroom_75_0() {
    return {
        pane: 'pane_bathroom_75',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/amenity_toilets.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_bathroom_75_1() {
    return {
        pane: 'pane_bathroom_75',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/amenity_toilets.png',
    iconSize: [16, 16]
}),
        interactive: false,
    }
}
map.createPane('pane_bathroom_75');
map.getPane('pane_bathroom_75').style.zIndex = 475;
map.getPane('pane_bathroom_75').style['mix-blend-mode'] = 'normal';
var layer_bathroom_75 = new L.geoJson.multiStyle(json_bathroom_75, {
    attribution: '',
    interactive: false,
    dataVar: 'json_bathroom_75',
    layerName: 'layer_bathroom_75',
    pane: 'pane_bathroom_75',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_bathroom_75_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_bathroom_75_1(feature));
    },
]});
bounds_group.addLayer(layer_bathroom_75);

function pop_library_76(feature, layer) {
    var popupContent = '<div class="container">' +
 '<table  class="table">' +
  '<tbody>' +
   '<div style="text-align:right; font-weight: bold;" class="row">' +  
    '<div class="col-12 text-right">' +
             (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '')  
    +'</div>' +    
   '</div>' +   
   '<div style="text-align:right;" class="row">' +   
    '<div class="col-12 text-right">' +  
         (feature.properties['Disc'] !== null ? autolinker.link(feature.properties['Disc'].toLocaleString()) : '')     
    +'</div>' + 
   '</div>' +    
   '<div style="text-align:right;" class="row">' +
    '<div class="col-12 text-right">' +
    '</div>' +
    '<div style="text-align:right;" class="col-12 text-right">' +
       (feature.properties['position'] !== null ? autolinker.link(feature.properties['position'].toLocaleString()) : '')
    +'</div>' +    
   '</div>' +    
  '</tbody>' +
 '</table>' +
'</div>';

    layer.bindPopup(popupContent, {maxHeight: 310});
}




function style_library_76_0() {
    return {
        pane: 'pane_library_76',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/book-open.svg',
    iconSize: [1, 1]
}),
        interactive: true,
    }
}
function style_library_76_1() {
    return {
        pane: 'pane_library_76',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/book-open.png',
    iconSize: [16, 16]
}),
        interactive: true,
    }
}
map.createPane('pane_library_76');
map.getPane('pane_library_76').style.zIndex = 476;
map.getPane('pane_library_76').style['mix-blend-mode'] = 'normal';
var layer_library_76 = new L.geoJson.multiStyle(json_library_76, {
    attribution: '',
    interactive: true,
    dataVar: 'json_library_76',
    layerName: 'layer_library_76',
    pane: 'pane_library_76',
    onEachFeature: pop_library_76,
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_library_76_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_library_76_1(feature));
    },
]});
bounds_group.addLayer(layer_library_76);


function style_health_77_0() {
    return {
        pane: 'pane_health_77',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/health_hospital.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_health_77_1() {
    return {
        pane: 'pane_health_77',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/health_hospital.png',
    iconSize: [16, 16]
}),
        interactive: false,
    }
}
map.createPane('pane_health_77');
map.getPane('pane_health_77').style.zIndex = 477;
map.getPane('pane_health_77').style['mix-blend-mode'] = 'normal';
var layer_health_77 = new L.geoJson.multiStyle(json_health_77, {
    attribution: '',
    interactive: false,
    dataVar: 'json_health_77',
    layerName: 'layer_health_77',
    pane: 'pane_health_77',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_health_77_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_health_77_1(feature));
    },
]});
bounds_group.addLayer(layer_health_77);

function pop_buses_78(feature, layer) {
    var popupContent = '<div class="container"> <table class="table"> <div class="row"> <div class="col" style="font-weight: bold; text-align:right;">مواقف حافلات</div> </div>\
<div class="row"> <div class="col" style="text-align:right;">لمزيد من المعلومات حول مواعيد انطلاق حافلات جامعة طيبة يرجى زيارة الرابط: <a href="https://taibahu.edu.sa/Pages/AR/News/NewsDetails.aspx?ID=7827" class="text-right">اضغط هنا </a></div> </div> </table></div>\
<div class="row"> <div class="col" style="text-align:right;">لمزيد من المعلومات حول  خط سير حافلات جامعة طيبة يرجى زيارة الرابط: <a href="https://www.taibahu.edu.sa/Pages/AR/News/NewsDetails.aspx?ID=6107" class="text-right">اضغط هنا </a></div> </div>\
<div class="row"> <div class="col" style="text-align:right;">لمزيد من المعلومات حول التسجيل في خدمة النقل الجامعي يرجى زيارة الرابط: <a href="https://www.taibahu.edu.sa/Pages/AR/News/NewsDetails.aspx?ID=5870" class="text-right">اضغط هنا </a></div> </div>'
    layer.bindPopup(popupContent, {maxHeight: 310});
}

function style_buses_78_0() {
    return {
        pane: 'pane_buses_78',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/bus-alt.svg',
    iconSize: [1, 1]
}),
        interactive: true,
    }
}
function style_buses_78_1() {
    return {
        pane: 'pane_buses_78',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/bus-alt.png',
    iconSize: [16, 16]
}),
        interactive: true,
    }
}
map.createPane('pane_buses_78');
map.getPane('pane_buses_78').style.zIndex = 478;
map.getPane('pane_buses_78').style['mix-blend-mode'] = 'normal';
var layer_buses_78 = new L.geoJson.multiStyle(json_buses_78, {
    attribution: '',
    interactive: true,
    dataVar: 'json_buses_78',
    layerName: 'layer_buses_78',
    pane: 'pane_buses_78',
    onEachFeature: pop_buses_78,
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_buses_78_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_buses_78_1(feature));
    },
]});
bounds_group.addLayer(layer_buses_78);



function style_accessibility_79_0() {
    return {
        pane: 'pane_accessibility_79',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_accessibility_79_1() {
    return {
        pane: 'pane_accessibility_79',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/disability_accessibility2.png',
    iconSize: [16, 16]
}),
        interactive: false,
    }
}
map.createPane('pane_accessibility_79');
map.getPane('pane_accessibility_79').style.zIndex = 479;
map.getPane('pane_accessibility_79').style['mix-blend-mode'] = 'normal';
var layer_accessibility_79 = new L.geoJson.multiStyle(json_accessibility_79, {
    attribution: '',
    interactive: false,
    dataVar: 'json_accessibility_79',
    layerName: 'layer_accessibility_79',
    pane: 'pane_accessibility_79',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_accessibility_79_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_accessibility_79_1(feature));
    },
]});
bounds_group.addLayer(layer_accessibility_79);



function style_gardens_80_0() {
    return {
        pane: 'pane_gardens_80',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/tree.svg',
    iconSize: [1, 1]
}),
        interactive: false,
    }
}
function style_gardens_80_1() {
    return {
        pane: 'pane_gardens_80',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/tree.png',
    iconSize: [16, 16]
}),
        interactive: false,
    }
}
map.createPane('pane_gardens_80');
map.getPane('pane_gardens_80').style.zIndex = 480;
map.getPane('pane_gardens_80').style['mix-blend-mode'] = 'normal';
var layer_gardens_80 = new L.geoJson.multiStyle(json_gardens_80, {
    attribution: '',
    interactive: false,
    dataVar: 'json_gardens_80',
    layerName: 'layer_gardens_80',
    pane: 'pane_gardens_80',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_gardens_80_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_gardens_80_1(feature));
    },
]});
bounds_group.addLayer(layer_gardens_80);


function style_ATM_81_0() {
    return {
        pane: 'pane_ATM_81',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/background_square_rounded.svg',
    iconSize: [1, 1]
}),
        interactive: true,
    }
}
function style_ATM_81_1() {
    return {
        pane: 'pane_ATM_81',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/bank.svg',
    iconSize: [16, 16]
}),
        interactive: true,
    }
}
map.createPane('pane_ATM_81');
map.getPane('pane_ATM_81').style.zIndex = 407;
map.getPane('pane_ATM_81').style['mix-blend-mode'] = 'normal';
var layer_ATM_81 = new L.geoJson.multiStyle(json_ATM_81, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ATM_81',
    layerName: 'layer_ATM_81',
    pane: 'pane_ATM_81',
    pointToLayers: [function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_ATM_81_0(feature));
    },function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_ATM_81_1(feature));
    },
]});
bounds_group.addLayer(layer_ATM_81);
///////////////////////End of creating layers and start add with zoom///////////////////////////////////////////////////////////////////////
map.on("zoomend", function() {
    if (map.getZoom() >= 20 ) {
        map.addLayer(layer_waitingBuilding_10);
    } else  {
        map.removeLayer(layer_waitingBuilding_10);
    }
    if (map.getZoom() >= 20) {
        map.addLayer(layer_sharedbuilding_11);
    } else  {
        map.removeLayer(layer_sharedbuilding_11);
    }
   if (map.getZoom() >= 20) {
        map.addLayer(layer_physicaltherapy_12);
    } else  {
        map.removeLayer(layer_physicaltherapy_12);
    }
    if (map.getZoom() >= 20) {
        map.addLayer(layer_medicalhabilitation_13);
    } else  {
        map.removeLayer(layer_medicalhabilitation_13);
    }
    if (map.getZoom() >= 20) {
        map.addLayer(layer_222Building_14);
    } else  {
        map.removeLayer(layer_222Building_14);
    }
    if (map.getZoom() >= 20) {
        map.addLayer(layer_202_GF_15);
    } else  {
        map.removeLayer(layer_202_GF_15);
    }
    if (map.getZoom() >= 20) {
        map.addLayer(layer_markazKhedmahAltalebah_GF_16);
    } else  {
        map.removeLayer(layer_markazKhedmahAltalebah_GF_16);
    }
    if (map.getZoom() >= 20) {
        map.addLayer(layer_Building235_17);
    } else  {
        map.removeLayer(layer_Building235_17);
    }
    if (map.getZoom() >= 20) {
        map.addLayer(layer_building224_18);
    } else  {
        map.removeLayer(layer_building224_18);
    }
    if (map.getZoom() >= 20) {
       map.addLayer(layer_GF_Dentisry_19);
    } else  {
        map.removeLayer(layer_GF_Dentisry_19);
    }
 
    if (map.getZoom() >= 20) {
        map.addLayer(layer_libraryGF_22);
    } else  {
        map.removeLayer(layer_libraryGF_22);
    }
    if (map.getZoom() >= 20) {
        map.addLayer(layer_libraryGF_marker_23);
    } else  {
        map.removeLayer(layer_libraryGF_marker_23);
    }
  
    if (map.getZoom() >= 20) {
        map.addLayer(layer_GFjaz_28);
    } else  {
        map.removeLayer(layer_GFjaz_28);
    }
    if (map.getZoom() >= 20) {
        map.addLayer(layer_GFjazmarker_29);
    } else  {
        map.removeLayer(layer_GFjazmarker_29);
    }
  
    if (map.getZoom() >= 20) {
        map.addLayer(layer_GFclinic_34);
    } else  {
        map.removeLayer(layer_GFclinic_34);
    }
    if (map.getZoom() >= 20) {
        map.addLayer(layer_GFclinicmarkers_35);
    } else  {
        map.removeLayer(layer_GFclinicmarkers_35);
    }

    if (map.getZoom() >= 20) {
        map.addLayer(layer_GFtahdiri_40);
    } else  {
        map.removeLayer(layer_GFtahdiri_40);
    }
    if (map.getZoom() >= 20) {
        map.addLayer(layer_GFtahdiri_markers_41);
    } else  {
        map.removeLayer(layer_GFtahdiri_markers_41);
    }
 
   if (map.getZoom() >= 20) {
        map.addLayer(layer_GFTV_46);
    } else  {
        map.removeLayer(layer_GFTV_46);
    }
    if (map.getZoom() >= 20) {
        map.addLayer(layer_GFTV_markers_47);
    } else  {
        map.removeLayer(layer_GFTV_markers_47);
    }
 
    if (map.getZoom() >= 20) {
        map.addLayer(layer_Layer_business1_53);
    } else  {
        map.removeLayer(layer_Layer_business1_53);
    }
    if (map.getZoom() >= 20) {
        map.addLayer(layer_Layer_business1_marker_54);
    } else  {
        map.removeLayer(layer_Layer_business1_marker_54);
    }
    if (map.getZoom() >= 20) {
        map.addLayer(layer_Gpharmacy_59);
    } else  {
        map.removeLayer(layer_Gpharmacy_59);
    }
    if (map.getZoom() >= 20) {
        map.addLayer(layer_Gpharmacy_markers_60);
    } else  {
        map.removeLayer(layer_Gpharmacy_markers_60);
    }

});






var layer_shops_6 = L.geoJson(json_shops_6, {
    onEachFeature: function(feature, layer) {
      var tooltipContent = feature.properties.name;
  
      // Check if the tooltip content is not null before binding the tooltip
      if (tooltipContent !== null && tooltipContent !== "") {
        // Bind the tooltip to the layer with permanent option set to true and additional options
        layer.bindTooltip(tooltipContent, {
          permanent: true,
          direction: "center",
          className: "css_shops_6",
          font: "bold"
        });
      }
    }
  }).addTo(map);
  
  // Add an event listener for zoomend event
  map.on("zoomend", function() {
    var currentZoom = map.getZoom();
    
    if (currentZoom >= 20) {
      map.addLayer(layer_shops_6);
      layer_shops_6.eachLayer(function(layer) {
        layer.openTooltip();
      });
    } else {
      map.removeLayer(layer_shops_6);
      layer_shops_6.eachLayer(function(layer) {
        layer.closeTooltip();
      });
    }
  });



var layer_Enterences_8 = L.geoJson(json_Enterences_8, {
    onEachFeature: function(feature, layer) {
      var tooltipContent = feature.properties.name;
  
      // Check if the tooltip content is not null before binding the tooltip
      if (tooltipContent !== null && tooltipContent !== "") {
        // Bind the tooltip to the layer with permanent option set to true and additional options
        layer.bindTooltip(tooltipContent, {
          permanent: true,
          direction: "center",
          className: "css_enterences_8",
          font: "bold"
        });
      }
    }
  }).addTo(map);
  
  // Add an event listener for zoomend event
  map.on("zoomend", function() {
    var currentZoom = map.getZoom();
    
    if (currentZoom <= 20) {
      map.addLayer(layer_Enterences_8);
      layer_Enterences_8.eachLayer(function(layer) {
        layer.openTooltip();
      });
    } else {
      map.removeLayer(layer_Enterences_8);
      layer_Enterences_8.eachLayer(function(layer) {
        layer.closeTooltip();
      });
    }
  });
  ////////////////////////////////////
  
  var layer_services_7 = L.geoJson(json_services_7, {
    onEachFeature: function(feature, layer) {
      var tooltipContent = feature.properties.id;
  
      // Check if the tooltip content is not null before binding the tooltip
      if (tooltipContent !== null && tooltipContent !== "") {
        // Bind the tooltip to the layer with permanent option set to true and additional options
        layer.bindTooltip(tooltipContent, {
          permanent: true,
          direction: "center",
          className: "css_services_7",
          font: "bold"
        });
      }
    }
  }).addTo(map);
  
  // Add an event listener for zoomend event
  map.on("zoomend", function() {
    var currentZoom = map.getZoom();
    
    if (currentZoom <= 20) {
      map.addLayer(layer_services_7);
      layer_services_7.eachLayer(function(layer) {
        layer.openTooltip();
      });
    } else {
      map.removeLayer(layer_services_7);
      layer_services_7.eachLayer(function(layer) {
        layer.closeTooltip();
      });
    }
  });
  
 // Function to bind tooltips to layer features by id

 var layer_buiding_9 = L.geoJson(json_buiding_9, {
    onEachFeature: function(feature, layer) {
      var tooltipContent = feature.properties.name;
  
      // Check if the tooltip content is not null before binding the tooltip
      if (tooltipContent !== null && tooltipContent !== "") {
        // Bind the tooltip to the layer with permanent option set to true and additional options
        layer.bindTooltip(tooltipContent, {
          permanent: true,
          direction: "center",
          className: "css_buiding_9",
          font: "bold"
        });
      }
    }
  }).addTo(map);
  
  // Add an event listener for zoomend event
  map.on("zoomend", function() {
    var currentZoom = map.getZoom();
    
    if (currentZoom <= 20) {
      map.addLayer(layer_buiding_9);
      layer_buiding_9.eachLayer(function(layer) {
        layer.openTooltip();
      });
    } else {
      map.removeLayer(layer_buiding_9);
      layer_buiding_9.eachLayer(function(layer) {
        layer.closeTooltip();
      });
    }
  });



  function bindTooltipsByNameForComplexStructure(layer,property) {
    layer.eachLayer(function(featureLayer) {
        featureLayer.eachLayer(function(featureLayer2){
            var tooltipContent = featureLayer2.feature.properties[property];
            if (tooltipContent) {
                var tooltip = L.tooltip({
                  permanent: true,
                  direction: "center",
                  className: "css_tooltips",
                  font: "bold"
                }).setContent(tooltipContent);
          
                featureLayer2.bindTooltip(tooltip);
              }
        })
        


    });
  }

  function bindTooltipsByNameOrId(layer, property) {
    layer.eachLayer(function(featureLayer) {
        console.log('Feature Layer:', featureLayer);
      var tooltipContent =featureLayer.feature.properties[property];
      console.log('Tooltip Content:', tooltipContent);
      if (tooltipContent) {
        var tooltip = L.tooltip({
          permanent: true,
          direction: "center",
          className: "css_tooltips",
          font: "bold"
        }).setContent(tooltipContent);
        
        featureLayer.bindTooltip(tooltip);
      }
    });
  }

  
 function unbindTooltipsComplex(layer) {
    layer.eachLayer(function(featureLayer) {
        featureLayer.eachLayer(function(featureLayer2){
            featureLayer2.unbindTooltip();
        })
        


    });
  }

  function unbindTooltips(layer) {
    layer.eachLayer(function(featureLayer) {
        featureLayer.unbindTooltip()
        
    });
  }



  
  bindTooltipsByNameOrId(layer_202_GF_15,"name");
  bindTooltipsByNameOrId(layer_markazKhedmahAltalebah_GF_16,"name");
  bindTooltipsByNameOrId(layer_Building235_17,"name");
  bindTooltipsByNameOrId(layer_waitingBuilding_10,"id");
  bindTooltipsByNameOrId(layer_sharedbuilding_11,"id");
  bindTooltipsByNameOrId(layer_222Building_14,"id");
  bindTooltipsByNameOrId(layer_building224_18,"id");
  bindTooltipsByNameOrId(layer_medicalhabilitation_13,"id");

  
  var baseMaps = {};
  L.control.layers(baseMaps,{'<img src="legend/ATM_81.png"style="float: left;margin: 0 5px 0 0; "/><b style=" margin: 0 0 0 15px ;">الصراف الآلي</b>'
  : layer_ATM_81,'<img src="legend/gardens_80.png"style="float: left;margin: 0 5px 0 0; "/><b style=" margin: 0 0 0 25px ;">الحدائق</b>'
  : layer_gardens_80,'<img src="legend/accessibility_79.png"style="float: left; margin: 0 5px 0 0;"/><b style="margin: 0 0 0 15px ;">أصحاب الهمم</b> '
  : layer_accessibility_79,'<img src="legend/buses_78.png"style="float: left; margin: 0 5px 0 0;"/><b style="margin: 0 0 0 10px;">مواقف الحافلات</b>':
   layer_buses_78,'<img src="legend/health_77.png"style="float: left; margin: 0 5px 0 0 ;"/><b style="margin: 0 0 0 13px;"> العناية الصحية</b> ':
    layer_health_77,'<img src="legend/library_76.png" style="float: left;margin: 0 5px 0 0; "/><b style="margin: 0 0 0 25px;"> المكتبات</b>':
     layer_library_76,'<img src="legend/bathroom_75.png"style="float: left; margin: 0 5px 0 0;"/><b style="margin: 0 0 0 17px;"> دورات المياه</b>':
      layer_bathroom_75,'<img src="legend/coffee_74.png " style="float: left; margin: 0 5px 0 0;"/><b style="margin: 0 0 0 25px ;"> المقاهي</b>':
       layer_coffee_74,'<img src="legend/resturant_73.png" style="float: left; margin: 0 5px 0 0; "/><b style=" margin: 0 0 0 25px ;"> المطاعم</b>':
        layer_resturant_73,'<img src="legend/shop_72.png" style="float: left; margin: 0 5px 0 0;"/><b style=" margin: 0 0 0 25px ;"> التسوق</b>':
         layer_shop_72,'<img src="legend/qiasExam_71.png" style="float: left; margin: 0 5px 0 0; "/><b style=" margin: 0 0 0 10px ;"> اختبارات قياس</b>':
          layer_qiasExam_71,'<img src="legend/clubs_70.png"style="float: left; margin: 0 5px 0 0;"/><b style=" margin: 0 0 0 5px ;"> النوادي الجامعية</b>'
          : layer_clubs_70,'<img src="legend/decare_69.png" style="float: left; margin: 0 5px 0 0;"/><b style=" margin: 0 0 0 25px ;"> الحضانة</b>':
           layer_decare_69,'<img src="legend/prayer_68.png"style="float: left; margin: 0 5px 0 0;"/><b style=" margin: 0 0 0 25px ;"> المصلى</b>':
            layer_prayer_68,'<img src="legend/parking_67.png" style="float: left; margin: 0 5px 0 0;"/><b style=" margin: 0 0 0 5px ;">  مواقف السيارات</b>':
             layer_parking_67,'<img src="legend/enterances_66.png"  style="float: left; margin: 0 5px 0 0;"/> <b style=" margin: 0 0 0 20px ;">البوابات</b> ':
              layer_enterances_66,'<img src="legend/exit_65.png" style="float: left; margin: 0 5px 0 0;"/><b style=" margin: 0 0 0 23px ;"> المخرج</b>':
               layer_exit_65,},{
  
  collapsed:false,
  
  }).addTo(map);
  setBounds();
  
  document.getElementsByClassName('leaflet-control-layers')[0].style.display="none";
  
  function openCategory(){
      const category = document.getElementsByClassName('leaflet-control-layers')[0];
      if(category.style.display === "none"){
      document.getElementsByClassName('leaflet-control-layers')[0].style.display="block";
      }else{
          document.getElementsByClassName('leaflet-control-layers')[0].style.display="none"
    }
  }
  
  var buttonsCheck=document.getElementsByClassName('leaflet-control-layers-selector');
  
  for(var i=0;i<buttonsCheck.length;i++){
      if(buttonsCheck.item(i).checked == true ){
          buttonsCheck.item(i).checked=false
      }
      buttonsCheck.item(i).style.text_align='right' ;
  }


 bindTooltipsByNameOrId(layer_physicaltherapy_12,"id");
