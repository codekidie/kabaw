
function delete_plant(plant_pic)
{

 var query = firebase.database().ref("plants").orderByKey();
    query.once("value")
      .then(function(snapshot) {

        snapshot.forEach(function(childSnapshot) {
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          plant_img = childData.plant_profile_pic;

          if (plant_img == plant_pic) {
                var storage = firebase.storage();
                var storageRef = storage.ref();
                var desertRef = storageRef.child('plant_profiles/'+plant_pic);
                // Delete the file
                desertRef.delete().then(function() {
                      firebase.database().ref("plants").child(key).remove().then(function() {
                          Materialize.toast('Plant Deleted Success!', 4000);
                          getplants();
                      });
                }).catch(function(error) {
                  // Uh-oh, an error occurred!
                   console.log(error);

                });
          }
      });
    });
}


$('.modal-close').click(function(){
    $('#plant_name').val("");
    $('#date_planted').val("");
    $('#plant_file').val("");
})

