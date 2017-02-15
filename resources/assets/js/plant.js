   var uploader = $('#uploader').hide();

 $("#submit_plant").on("click", function(e){
          var file = $('#plant_file').prop('files')[0];
          var uploader = $('#uploader');
          var plant_name       = $('#plant_name').val();
          var date_planted     = $('#date_planted').val();
          var warning_date = '';
          var warning_name = '';

           if (date_planted == "") {
                     uploader.hide();
                warning_date += '<div id="card-alert" class="card orange lighten-5">';
                warning_date += '      <div class="card-content orange-text">';
                warning_date += '        <p>WARNING : Date planted is required</p>';
                warning_date += '      </div>';
                warning_date += '   </div>';
                $('#date_planted_warning').html(warning_date);    
           }


           if(plant_name == "")
           {
                     uploader.hide();
                warning_name += '<div id="card-alert" class="card orange lighten-5">';
                warning_name += '      <div class="card-content orange-text">';
                warning_name += '        <p>WARNING : Plant name is required</p>';
                warning_name += '      </div>';
                warning_name += '   </div>';
                $('#plant_warning').html(warning_name);

           } 

           if (plant_name != "" &&  date_planted != "") {
          uploader.show();
          var uuid = guid();
          var storageRef = firebase.storage().ref('plant_profiles/'+uuid);
          var task = storageRef.put(file);



          task.on('state_changed',

              function progress(snapshot){
                   var   percentage = (snapshot.bytesTransferred /  snapshot.totalBytes) * 100;
                        uploader.show();
                        uploader.css({'width': percentage+"%"});

                          console.log(percentage+"%");
                      },

                      function error(err){

                      },
                      
                      function complete(){

                          var db = firebase.database();
                          var ref = db.ref("plants");
                          var newPlant = ref.push();

                          var plant_name       = $('#plant_name').val();
                          var date_planted     = $('#date_planted').val();
                         

                          newPlant.set({
                            plant_profile_pic : uuid,
                            plant_name        : plant_name,
                            date_planted      : date_planted,
                            user_id          : 'test_userid'
                          });

                          uploader.hide();

                          var success_uploaded = '';
                          success_uploaded       += '<div id="card-alert" class="card green lighten-5">';
                          success_uploaded       += '      <div class="card-content green-text">';
                          success_uploaded       += '        <p>Success : Plant uploaded to the server!</p>';
                          success_uploaded       += '      </div>';
                          success_uploaded       += '   </div>';
                          $('#success_uploaded').html(success_uploaded);
                          getplants();


                      }

                  );      

           }

      
  });