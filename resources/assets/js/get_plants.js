
function getplants()
{

 var query = firebase.database().ref("plants").orderByKey();
    query.once("value")
      .then(function(snapshot) {
        var plantdata = '';
        snapshot.forEach(function(childSnapshot) {
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          var  img = childData.plant_profile_pic; 

          var storage = firebase.storage();
          var storageRef = storage.ref();
          var plantRef = storageRef.child('plant_profiles/'+img);

         
          plantRef.getDownloadURL().then(function(url) {
                plantdata += "<img src='"+url+"' class='plant_profile_pic'>";
                plantdata += "<h3 class='plant_name_style'>"+childData.plant_name+"</h3>";

                plantdata += '<center><a class="btn-floating waves-effect waves-light red" onclick="delete_plant(\''+childData.plant_profile_pic+'\')"><i class="mdi-content-clear"></i></a></center>';

                
                plantdata += '<div class="row">';
                    plantdata += '<div class="col s6 m6 l6 center-align">';
                        plantdata += '<div class="flight-info">';


                                plantdata += '<p class="small"><span class="grey-text text-lighten-4">Wind Speed:</span> <span class="windspeeddata"></span></p>';

                                plantdata += '<p class="small"><span class="grey-text text-lighten-4">Air temperature:</span> <span class="atdata"></span> &#8451;</p>';
                          
                          plantdata += '</div>';
                      plantdata += '</div>';
                     plantdata += ' <div class="col s6 m6 l6 center-align flight-state-two">';
                         plantdata += ' <div class="flight-info">';


                              plantdata += ' <p class="small"><span class="grey-text text-lighten-4">Air Humidity:</span> <span class="ahdata"></span></p>';

                              plantdata += '<p class="small"><span class="grey-text text-lighten-4">Light intensity:</span> <span class="lxdata"></span></p>';


                          plantdata += '</div>';
                     plantdata += ' </div>';
                  plantdata += '</div>';
                $('#populate_plant_data').html(plantdata);

          }).catch(function(error) {

          });

      });
    });
}
getplants();
