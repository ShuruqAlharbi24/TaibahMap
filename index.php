<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <link rel="stylesheet" href="css/leaflet.css"><link rel="stylesheet" href="css/L.Control.Locate.min.css">
        <link rel="stylesheet" href="css/qgis2web.css"><link rel="stylesheet" href="css/fontawesome-all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet-routing-machine/3.2.12/leaflet-routing-machine.css" />
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/leaflet-search.css">


        <!--THIS THE BOOTSTRAP LINK-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

        <!-- Arabic font links-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap" rel="stylesheet">

        <style>
        html, body, #map {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
            font-family:'Tajawal', sans-seri;
        }
        

        </style>
        <title>خريطة جامعة طيبة</title>
    </head>
    <body>
        
        <div id="map">
          <!--THE BUTTON IN ORDER (CATEGORY-PRINT-FEEDBACK-DIRECTION-LOGIN-SEARCH)-->
          <div class="bar" id="listOfButton">
            <button onclick="openCategory()"  id="category" class="open-button responsive" title="الاقسام"></button>
            <button onclick="window.print()" id="printMap" class="open-button responsive" title="طباعة"></button>
            <button onclick="openFeedback()" id="openFeedback" class="open-button responsive" title="ارسال تعليق"></button>
            <button onclick="openDirection()" id="openDirection" class="open-button responsive" title="الاتجاهات"></button>
            <button onclick="openLogin()" id="openLogin" class="open-button responsive" title="تسجيل الدخول"></button> 
            <button onclick="openSearch()" id="openSearch" class="open-button responsive" title="البحث"></button> 
          </div>

          <!--THE FEEDBACK HTML-->
          <div class="popup responsive" id="feedbackPopup" dir="rtl">
            <div class="card responsive">
            <form action="php/feedbackData.php" method="post" class="form-container responsive">
                <button type="button" class="cancel responsive" onclick="closeFeedback()">
                    <img style="height: 20px; width: 20px;" src="https://img.icons8.com/windows/1x/cancel.png" alt="">
                </button>
              
                   <h3 style="text-align: center;">سعداء بمعرفة اقتراحاتكم وتوصياتكم نسعى لإرضاءكم</h3>
               
          
              
                <label class="form-label responsive">ما نوع الخدمة التي تود التعليق عليها؟</label>
                <div class="row mt-2 responsive">
                  <div class="col-3 responsive">
                  <label class="form-label responsive" for="Choice1">المباني</label>
                  <input class="form-check-input responsive" type="radio" id="Choice1" name="feedbackType" value="buildings" checked/>
                  </div>  
                  <div class="col-4 responsive">
                  <label class="form-label responsive" for="Choice2">الفصول الدراسية</label>
                  <input class="form-check-input responsive" type="radio" id="Choice2" name="feedbackType" value="classrooms" />
                  </div>
                  <div class="col-1 responsive"></div>  
                  <div class="col-3 responsive">
                  <label class="form-label responsive" for="Choice3">المرافق</label>
                  <input class="form-check-input responsive" type="radio" id="Choice3" name="feedbackType" value="facilities" />
                  </div> 
                </div> 
          
                  <label class="form-label responsive" for="userEmail">تعليقك:</label>
                  <textarea class="form-control responsive" required name="message" rows="7" cols="30"></textarea>
          
                  <label class="form-label responsive" for="userEmail">البريد الالكتروني:</label>
                  <input class="form-control responsive" type="text" id="userEmail" name="userEmail" required> 
          
                
                <div class="row responsive">
                  <div class="col-4 responsive"></div>
                  <div class="col-4 responsive">
                  <button class="btn btn-primary form-control mt-4 responsive" type="submit">إرسال</button>
                  </div>
                  <div class="col-4 responsive"></div>
                </div>
             
              
            </form>
          </div>
          </div>
          <!--END OF THE FEEDBACK HTML-->

          <!--THE START OF THE LOGIN-->
          <div class="popup" id="loginPopup" dir="rtl">
            
                            <div class="card">
                              
                                <div class="card-header">
                                  <button type="button" class="cancel" onclick="closeLogin()">
                                    <img style="height: 20px; width: 20px;" src="https://img.icons8.com/windows/1x/cancel.png" alt="">
                                  </button>
                                <h3 style="text-align:center;">تسجيل الدخول لمنسوبي كلية علوم وهندسة الحاسب الآلي</h3>
                                </div>
                                <div style="overflow: hidden; " class="card-body" >
            
            
            <form  method="post" action="php/loginConnect.php">
              <div class="form-group ">
                <label class="form-label">الرقم الوظيفي</label>
                <input type="text" name="id" class="form-control mt-2" required placeholder="ادخل الرقم الوظيفي">
              </div>
              <div class="form-group">
                <label class="mt-4 md-4 form-label">كلمة المرور</label>
                <input type="password" name="password" class="form-control mt-2" required  placeholder="ادخل كلمة المرور">
              </div>
              <div class="row mt-4">
                   <div class="col-4"></div>
                   <div class="col-4">
                      <button type="submit" class=" form-control btn btn-primary btn-md "  > دخول</button>
                    </div>
                   <div class="col-4"></div>
              </div>
            </form>
            </div>
   
             </div>
            </div>
            <!--THE END OF THE LOGIN-->
            <!--THE START OF DIRECTION-->
            <div class="popup" id="openDirectionpopup">
            <div class="card">
            <div class="card-header">
            <h2 style="text-align:center;">الاتجاهات</h2>
            </div>
            <h6 style="text-align:center;" class=" mt-4">قم بتحريك الدبوس لتحديد موقع الانطلاق وموقع الوصول</h6>
            <div class="row mt-4">
                   <div class="col-4 "></div>
                   <div class="col-4">
            <button type="openDirectionpopup" class="mb-3 form-control btn btn-primary btn-md"  onclick="openDirectionpopup()" > اتجاه</button>
            </div>
            </div>
            </div>
            </div>
            <!--THE END OF DIRECTION-->
              
            <!--FOOTER--> 
            <footer id="footer">
                <img id="logo" style="width:100px ; height: 38px;" src="legend/logo2.png">
            </footer>


            <div id="popupContent">
             
            </div>
            
          </div>

            



        <script src="js/qgis2web_expressions.js"></script>
        <script src="js/leaflet.js"></script><script src="js/L.Control.Locate.min.js"></script>
        <script src="js/multi-style-layer.js"></script>
        <script src="js/leaflet.rotatedMarker.js"></script>
        <script src="js/leaflet.pattern.js"></script>
        <script src="js/leaflet-hash.js"></script>
        <script src="js/Autolinker.min.js"></script>
        <script src="js/rbush.min.js"></script>
        <script src="js/labelgun.min.js"></script>
        <script src="js/labels.js"></script>
        <script src="js/leaflet-search.js"></script>
        <script src="data/yellowBase_1.js"></script>
        <script src="data/underStructure_2.js"></script>
        <script src="data/boundry1_3.js"></script>
        <script src="data/boardingHouse_4.js"></script>
        <script src="data/garden_5.js"></script>
        <script src="data/shops_6.js"></script>
        <script src="data/services_7.js"></script>
        <script src="data/Enterences_8.js"></script>
        <script src="data/buiding_9.js"></script>
        <script src="data/waitingBuilding_10.js"></script>
        <script src="data/sharedbuilding_11.js"></script>
        <script src="data/physicaltherapy_12.js"></script>
        <script src="data/medicalhabilitation_13.js"></script>
        <script src="data/222Building_14.js"></script>
        <script src="data/202_GF_15.js"></script>
        <script src="data/markazKhedmahAltalebah_GF_16.js"></script>
        <script src="data/Building235_17.js"></script>
        <script src="data/building224_18.js"></script>
        <script src="data/GF_Dentisry_19.js"></script>
        <script src="data/FF_Dentistry_20.js"></script>
        <script src="data/SF_Dentistry_21.js"></script>
        <script src="data/libraryGF_22.js"></script>
        <script src="data/libraryGF_marker_23.js"></script>
        <script src="data/Floor1_library_24.js"></script>
        <script src="data/Floor1_library_marker_25.js"></script>
        <script src="data/librarySF_26.js"></script>
        <script src="data/librarySF_marker_27.js"></script>
        <script src="data/GFjaz_28.js"></script>
        <script src="data/GFjazmarker_29.js"></script>
        <script src="data/FFjaz_30.js"></script>
        <script src="data/FFjazmarker_31.js"></script>
        <script src="data/SFjaz_32.js"></script>
        <script src="data/SFjazmarker_33.js"></script>
        <script src="data/GFclinic_34.js"></script>
        <script src="data/GFclinicmarkers_35.js"></script>
        <script src="data/FFclinic_36.js"></script>
        <script src="data/FFclinicmarker_37.js"></script>
        <script src="data/SFclinic_38.js"></script>
        <script src="data/SFclinicmarker_39.js"></script>
        <script src="data/GFtahdiri_40.js"></script>
        <script src="data/GFtahdiri_markers_41.js"></script>
        <script src="data/F1tahdiri_42.js"></script>
        <script src="data/F2tahdiri_43.js"></script>
        <script src="data/F1tahdiri_markers_44.js"></script>
        <script src="data/F3tahdiri_45.js"></script>
        <script src="data/GFTV_46.js"></script>
        <script src="data/GFTV_markers_47.js"></script>
        <script src="data/F1TV_48.js"></script>
        <script src="data/F1TV_markers_49.js"></script>
        <script src="data/F2TV_50.js"></script>
        <script src="data/F2TV_markers_0.js"></script>
        <script src="data/F3TV_51.js"></script>
        <script src="data/F3TV_markers_52.js"></script>
        <script src="data/Layer_business1_53.js"></script>
        <script src="data/Layer_business1_marker_54.js"></script>
        <script src="data/LayerBuisness2_55.js"></script>
        <script src="data/LayerBuisness2_marker_56.js"></script>
        <script src="data/LayerBusiness3_57.js"></script>
        <script src="data/LayerBusiness3_marker_58.js"></script>
        <script src="data/Gpharmacy_59.js"></script>
        <script src="data/Gpharmacy_markers_60.js"></script>
        <script src="data/Fpharmacy_61.js"></script>
        <script src="data/Fpharmacy_markers_62.js"></script>
        <script src="data/Spharmacy_63.js"></script>
        <script src="data/Spharmacy_markers_64.js"></script>
        <script src="data/exit_65.js"></script>
        <script src="data/enterances_66.js"></script>
        <script src="data/parking_67.js"></script>
        <script src="data/prayer_68.js"></script>
        <script src="data/decare_69.js"></script>
        <script src="data/clubs_70.js"></script>
        <script src="data/qiasExam_71.js"></script>
        <script src="data/shop_72.js"></script>
        <script src="data/resturant_73.js"></script>
        <script src="data/coffee_74.js"></script>
        <script src="data/bathroom_75.js"></script>
        <script src="data/library_76.js"></script>
        <script src="data/health_77.js"></script>
        <script src="data/buses_78.js"></script>
        <script src="data/accessibility_79.js"></script>
        <script src="data/gardens_80.js"></script>
        <script src="data/ATM_81.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-routing-machine/3.2.12/leaflet-routing-machine.min.js"></script>
        <script src="js/main.js"></script>



        <script>
                //HANDLE FEEDBACK OPEN AND CLOSE
                function openFeedback(){
                  var checkIfOpen = document.getElementById("feedbackPopup"); 
                  if(checkIfOpen.style.display === "none"){
                    document.getElementById("feedbackPopup").style.display = "block";
                    document.getElementById("loginPopup").style.display = "none";
                    document.getElementById("openDirectionpopup").style.display = "none";
                  }else{
                    document.getElementById("feedbackPopup").style.display = "none";
                  }
                }
                function closeFeedback(){
                    document.getElementById("feedbackPopup").style.display = "none";
                }


                //HANDLE LOGIN OPEN AND CLOSE
                function openLogin(){
                    var checkIfOpen = document.getElementById("loginPopup"); 
                  if(checkIfOpen.style.display === "none"){
                    document.getElementById("loginPopup").style.display = "block";
                    document.getElementById("feedbackPopup").style.display = "none";
                    document.getElementById("openDirectionpopup").style.display = "none";

                  }else{
                    document.getElementById("loginPopup").style.display = "none";
                  }
                    
                }
                function closeLogin(){
                    document.getElementById("loginPopup").style.display = "none";
                }

                //HANDLE DIRECTION OPEN AND CLOSE
                function openDirection(){
                  var checkIfOpen = document.getElementById("openDirectionpopup"); 
                  if(checkIfOpen.style.display === "block"){
                     document.getElementById("openDirectionpopup").style.display = "none";
                  }else{
                     document.getElementById("openDirectionpopup").style.display = "block";
                     document.getElementById("loginPopup").style.display = "none";
                     document.getElementById("feedbackPopup").style.display = "none";
                  }
                }

                
                
                map.setView([24.489100647544756, 39.55083, -0.09], 19);
                // create a custom reset button control
                var resetButton = L.Control.extend({
                  options: {
                  position: 'topleft' // set the position of the control
                },onAdd: function (map) {
                        // create the button element
                        var button = L.DomUtil.create('button', 'resetButton');
                        button.innerHTML = "";
                        button.setAttribute('title', 'إعادة الضبط');
                        button.style.background = "white";
                        button.style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/128/545/545661.png")';
                        button.style.backgroundRepeat = "no-repeat";
                        button.style.backgroundPosition = "center center";
                        button.style.backgroundSize = "18px";
                        button.style.width = '25px';
                        button.style.height = '25px';
                        button.style.borderRadius =  '2px';
                        button.style.border =  '0.5px solid #F5F5F5';
                        button.style.boxShadow = "0px 0px 8px gray";
                        // add a click event listener to the button
                        button.onclick = function() {
                          map.setView([24.489100647544756, 39.55083, -0.09], 19);
                          setTimeout(function() {
                            location.reload();    
                          }, 1000); 
                        }
                        return button;
                }
              });
              // add the reset button control to the map
              map.addControl(new resetButton());




              //CHANGE ZOOM OUT BUTTON CSS
              var buttonMinus = document.getElementsByClassName('leaflet-control-zoom-out')[0];
              buttonMinus.innerHTML = "";
              buttonMinus.setAttribute('title', 'تصغير');
              buttonMinus.style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/128/1665/1665663.png")';
              buttonMinus.style.backgroundRepeat = "no-repeat";
              buttonMinus.style.backgroundPosition = "center center";
              buttonMinus.style.backgroundSize = "18px";
              buttonMinus.style.width = '26px';
              buttonMinus.style.height = '26px';
              buttonMinus.style.borderRadius =  '4px';
              buttonMinus.style.border =  '1px solid #b3b3b3';
              //CHANGE ZOOM IN BUTTON CSS
              var buttonPlus = document.getElementsByClassName('leaflet-control-zoom-in')[0];
              buttonPlus.innerHTML = "";
              buttonPlus.setAttribute('title', 'تكبير');
              buttonPlus.style.backgroundImage = 'url("https://cdn-icons-png.flaticon.com/128/1665/1665629.png")';
              buttonPlus.style.backgroundRepeat = "no-repeat";
              buttonPlus.style.backgroundPosition = "center center";
              buttonPlus.style.backgroundSize = "18px";
              buttonPlus.style.width = '26px';
              buttonPlus.style.height = '26px';
              buttonPlus.style.borderRadius =  '4px';
              buttonPlus.style.border =  '1px solid #b3b3b3';







              
            //START OF THE SEARCH 
            function searchMultipleLayers(layers, searchTerm, searchProperties) {
    var results = [];
    var counter = 0; // initialize the counter variable
    
    // Loop through the provided layers
    for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        
        // Loop through the provided search properties
        for (var j = 0; j < searchProperties.length; j++) {
            var searchProperty = searchProperties[j];
            
            // Search for the searchTerm within the current layer and property
            layer.eachLayer(function (feature) {
                var propertyValue = feature.feature.properties[searchProperty];
                if (propertyValue && propertyValue.toLowerCase().includes(searchTerm.toLowerCase())) {
                    var bounds = feature.getBounds();
                    var oldStyle = {fillColor: feature.options.fillColor, weight: feature.options.weight, color: feature.options.color };
                    results.push({ feature: feature, layer: layer, bounds: bounds, oldStyle: oldStyle });
                    feature.setStyle({ fillColor: '#F5B041', color: '#D35400' , weight: 10 });
                }
            });
        }
    }

    // Check if there are any search results
    if (results.length === 0) {
        return "No results found.";
    }

    // Reset the style of all features to their original styles after 2 seconds
    var interval = setInterval(function() {
        // Loop through the results and change the colors
        for (var i = 0; i < results.length; i++) {
            var feature = results[i].feature;
            var oldStyle = results[i].oldStyle;
            if (counter % 2 == 0) { // change the colors every other time
                feature.setStyle({ fillColor: '#F5B041', color: '#D35400' , weight: 10 });
            } else {
                feature.setStyle(oldStyle);
            }
        }
        counter++; // increment the counter variable
        if (counter >= 5) { // stop the interval after 6 iterations
            clearInterval(interval);
            // Reset the style of all features to their original styles
            for (var i = 0; i < results.length; i++) {
                var feature = results[i].feature;
                var oldStyle = results[i].oldStyle;
                feature.setStyle(oldStyle);
            }
        }
    }, 1000); 

    // Return the search results
    return results;
} 
    
     // Create the search input and button
     var searchInput = L.DomUtil.create('input', 'search-input');
     var searchButton = L.DomUtil.create('button', 'search-button fa fa-search');
    
     // Create the search control
     var searchControl = L.control({ position: 'topright' });

     searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      searchButton.click();
    }
  });
    
     // Event handler for search button click
     // initialize search index to 0
     var searchTerm = ''; // initialize search term to an empty string
var searchResults = []; // initialize search results to an empty array
var searchIndex = 0; // initialize search index to 0

L.DomEvent.on(searchButton, 'click', function () {
  
  // get the search term from the search input field
  var newSearchTerm = searchInput.value;
  
  // if the new search term is different from the previous one, reset the search results and index
  if (newSearchTerm !== searchTerm) {
    searchTerm = newSearchTerm;
    searchResults = [];
    searchIndex = 0;
  }
  
  // if there are no search results, or we have gone through all of them, perform a new search
  if (searchResults.length === 0 || searchIndex >= searchResults.length) {
    // search for the term in multiple layers, using the 'name' and 'id' properties
    searchResults = searchMultipleLayers(
      [layer_buiding_9,layer_Enterences_8,layer_shops_6,layer_services_7,layer_GFjaz_28,
      layer_FFjaz_30,layer_SFjaz_32,layer_libraryGF_22,layer_Floor1_library_24,layer_librarySF_26,
      layer_222Building_14,layer_GFTV_46,layer_F1TV_48,layer_F2TV_50,layer_F3TV_51,layer_GFtahdiri_40,layer_waitingBuilding_10]
       ,searchTerm,['name','id']
    );
    
    // if there are search results, zoom to the first result and add its layer to the map
    if (searchResults.length > 0) {
      var currentResultBounds = searchResults[0].bounds;
      var currentResultLayer = searchResults[0].layer;
      map.fitBounds(currentResultBounds);
      map.addLayer(currentResultLayer);
      
      // increment the search index
      searchIndex = 1;
    }
  } else {
    // if there are more search results, zoom to the next result and add its layer to the map
    var currentResultBounds = searchResults[searchIndex].bounds;
    var currentResultLayer = searchResults[searchIndex].layer;
    map.fitBounds(currentResultBounds);
    map.addLayer(currentResultLayer);
    
    // increment the search index
    searchIndex++;
  }
});




     
    
     searchControl.onAdd = function () {
     var container = L.DomUtil.create('div', 'search-container');
     container.appendChild(searchInput);
     container.appendChild(searchButton);
     container.style.display="none";
     return container;
     };
    
     searchControl.addTo(map);
 //END OF THE SEARCH











 function openSearch(){
      var searchButton = document.getElementsByClassName('search-container')[0];
      var firstChild = searchButton.querySelector(':first-child');
      var secondChild = searchButton.children[1];;

      if(searchButton.style.display === "none"){
        searchButton.style.display = "block";
      }else{
        searchButton.style.display = "none";
      }
      searchButton.setAttribute('dir', 'rtl');
      searchButton.style.top = '0';
      searchButton.style.left = '50%';
      searchButton.style.position = 'fixed';
      searchButton.style.transform = 'translateX(-50%)';


      firstChild.style.boxShadow = "0px 0px 8px gray";
      firstChild.style.height = '33px';
      firstChild.style.width = '200px';
      firstChild.style.marginLeft = '5px';
      firstChild.style.border = '1px solid lightgray';
      firstChild.style.borderRadius = '30px';
      firstChild.setAttribute('placeholder', 'ما الذي تبحث عنه...');
      firstChild.style.fontSize = "16px";
      firstChild.style.padding = "10px";

      secondChild.style.backgroundColor = '#007bff';
      secondChild.style.border = 'none';
      secondChild.style.borderRadius = '30px';
      secondChild.style.color = '#fff';
      secondChild.style.height = '33px';
      secondChild.style.width = '33px';
      secondChild.style.boxShadow = "0px 0px 8px gray";}





              
 
        </script>


    </body>
</html>