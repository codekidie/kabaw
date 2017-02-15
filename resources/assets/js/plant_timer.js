
function generateTimer()
{
  var date = new Date();
  currentDate = date.getDate();     // Get current date
  month       = date.getMonth() + 1; // current month
  year        = date.getFullYear();
  hour = date.getHours();
  min  = date.getMinutes();
  sec  = date.getSeconds();
  // var datetime = month+" "+hour+":"+min +":"+sec;
  var datetime = date;


  $('#current_datetimer').html(datetime);

 }

  setInterval(generateTimer, 1000);  