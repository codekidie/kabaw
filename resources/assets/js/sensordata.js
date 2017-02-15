

   client = new Paho.MQTT.Client("m12.cloudmqtt.com",35269, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
    useSSL: true,
    userName: "wygeuuhq",
    password: "6lDZbaCywdmn",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);

  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    client.subscribe("b8:27:eb:b9:6f:96/ENQ");
   // message = new Paho.MQTT.Message("Hello CloudMQTT");
   // message.destinationName = "/cloudmqtt";
   
  }

  function doFail(e){
    console.log(e);
  }

  function pubLish(topics,message)
  {
    message = new Paho.MQTT.Message(message);
    message.destinationName = topics;
     client.send(message); 
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }


var data = {
   labels: [0,0,0,0,0,0,0,0,0,0,0,0],
  datasets : [
    {
      label: "First dataset",
      fillColor : "rgba(128, 222, 234, 0.6)",
      strokeColor : "#ffffff",
      pointColor : "#00bcd4",
      pointStrokeColor : "#ffffff",
      pointHighlightFill : "#ffffff",
      pointHighlightStroke : "#ffffff",
      data: [0,0,0,0,0,0,0,0,0,0,0,10]
    }
  ]
};


var lxoption = {
   labels: [0,0,0,0,0,0,0,0,0,0,0,0],
  datasets : [
    {
      label: "First dataset",
      fillColor : "rgba(128, 222, 234, 0.6)",
      strokeColor : "#ffffff",
      pointColor : "#00bcd4",
      pointStrokeColor : "#ffffff",
      pointHighlightFill : "#ffffff",
      pointHighlightStroke : "#ffffff",
      data: [0,0,0,0,0,0,0,0,0,0,0,10]
    }
  ]
};


var ahoption = {
   labels: [0,0,0,0,0,0,0,0,0,0,0,0],
  datasets : [
    {
      label: "First dataset",
      fillColor : "rgba(128, 222, 234, 0.6)",
      strokeColor : "#ffffff",
      pointColor : "#00bcd4",
      pointStrokeColor : "#ffffff",
      pointHighlightFill : "#ffffff",
      pointHighlightStroke : "#ffffff",
      data: [0,0,0,0,0,0,0,0,0,0,0,10]
    }
  ]
};


var atoption = {
   labels: [0,0,0,0,0,0,0,0,0,0,0,0],
  datasets : [
    {
      label: "First dataset",
      fillColor : "rgba(128, 222, 234, 0.6)",
      strokeColor : "#ffffff",
      pointColor : "#00bcd4",
      pointStrokeColor : "#ffffff",
      pointHighlightFill : "#ffffff",
      pointHighlightStroke : "#ffffff",
      data: [0,0,0,0,0,0,0,0,0,0,0,10]
    }
  ]
};

 window.onload = function(){
          var winddata = document.getElementById("winddata").getContext("2d");
          window.winddata = new Chart(winddata).Line(data, {    
          scaleShowGridLines : true,///Boolean - Whether grid lines are shown across the chart    
          scaleGridLineColor : "rgba(255,255,255,0.4)",//String - Colour of the grid lines    
          scaleGridLineWidth : 1,//Number - Width of the grid lines   
          scaleShowHorizontalLines: true,//Boolean - Whether to show horizontal lines (except X axis)   
          scaleShowVerticalLines: false,//Boolean - Whether to show vertical lines (except Y axis)    
          bezierCurve : true,//Boolean - Whether the line is curved between points    
          bezierCurveTension : 0.4,//Number - Tension of the bezier curve between points    
          pointDot : true,//Boolean - Whether to show a dot for each point    
          pointDotRadius : 5,//Number - Radius of each point dot in pixels    
          pointDotStrokeWidth : 2,//Number - Pixel width of point dot stroke    
          pointHitDetectionRadius : 20,//Number - amount extra to add to the radius to cater for hit detection outside the drawn point    
          datasetStroke : true,//Boolean - Whether to show a stroke for datasets    
          datasetStrokeWidth : 3,//Number - Pixel width of dataset stroke   
          datasetFill : true,//Boolean - Whether to fill the dataset with a colour
          animationSteps: 15,// Number - Number of animation steps    
          animationEasing: "easeOutQuart",// String - Animation easing effect     
          tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label    
          scaleFontSize: 12,// Number - Scale label font size in pixels   
          scaleFontStyle: "normal",// String - Scale label font weight style    
          scaleFontColor: "#000",// String - Scale label font colour
          tooltipEvents: ["mousemove", "touchstart", "touchmove"],// Array - Array of string names to attach tooltip events   
          tooltipFillColor: "rgba(255,255,255,0.8)",// String - Tooltip background colour   
          tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label    
          tooltipFontSize: 12,// Number - Tooltip label font size in pixels
          tooltipFontColor: "#000",// String - Tooltip label font colour    
          tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label    
          tooltipTitleFontSize: 14,// Number - Tooltip title font size in pixels    
          tooltipTitleFontStyle: "bold",// String - Tooltip title font weight style   
          tooltipTitleFontColor: "#000",// String - Tooltip title font colour   
          tooltipYPadding: 8,// Number - pixel width of padding around tooltip text   
          tooltipXPadding: 16,// Number - pixel width of padding around tooltip text    
          tooltipCaretSize: 10,// Number - Size of the caret on the tooltip   
          tooltipCornerRadius: 6,// Number - Pixel radius of the tooltip border   
          tooltipXOffset: 10,// Number - Pixel offset from point x to tooltip edge
          responsive: true,
          maintainAspectRatio: false,
          });

          var lxdata = document.getElementById("lxdata").getContext("2d");
          window.lxdata = new Chart(lxdata).Line(lxoption, {    
          scaleShowGridLines : true,///Boolean - Whether grid lines are shown across the chart    
          scaleGridLineColor : "rgba(255,255,255,0.4)",//String - Colour of the grid lines    
          scaleGridLineWidth : 1,//Number - Width of the grid lines   
          scaleShowHorizontalLines: true,//Boolean - Whether to show horizontal lines (except X axis)   
          scaleShowVerticalLines: false,//Boolean - Whether to show vertical lines (except Y axis)    
          bezierCurve : true,//Boolean - Whether the line is curved between points    
          bezierCurveTension : 0.4,//Number - Tension of the bezier curve between points    
          pointDot : true,//Boolean - Whether to show a dot for each point    
          pointDotRadius : 5,//Number - Radius of each point dot in pixels    
          pointDotStrokeWidth : 2,//Number - Pixel width of point dot stroke    
          pointHitDetectionRadius : 20,//Number - amount extra to add to the radius to cater for hit detection outside the drawn point    
          datasetStroke : true,//Boolean - Whether to show a stroke for datasets    
          datasetStrokeWidth : 3,//Number - Pixel width of dataset stroke   
          datasetFill : true,//Boolean - Whether to fill the dataset with a colour
          animationSteps: 15,// Number - Number of animation steps    
          animationEasing: "easeOutQuart",// String - Animation easing effect     
          tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label    
          scaleFontSize: 12,// Number - Scale label font size in pixels   
          scaleFontStyle: "normal",// String - Scale label font weight style    
          scaleFontColor: "#000",// String - Scale label font colour
          tooltipEvents: ["mousemove", "touchstart", "touchmove"],// Array - Array of string names to attach tooltip events   
          tooltipFillColor: "rgba(255,255,255,0.8)",// String - Tooltip background colour   
          tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label    
          tooltipFontSize: 12,// Number - Tooltip label font size in pixels
          tooltipFontColor: "#000",// String - Tooltip label font colour    
          tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label    
          tooltipTitleFontSize: 14,// Number - Tooltip title font size in pixels    
          tooltipTitleFontStyle: "bold",// String - Tooltip title font weight style   
          tooltipTitleFontColor: "#000",// String - Tooltip title font colour   
          tooltipYPadding: 8,// Number - pixel width of padding around tooltip text   
          tooltipXPadding: 16,// Number - pixel width of padding around tooltip text    
          tooltipCaretSize: 10,// Number - Size of the caret on the tooltip   
          tooltipCornerRadius: 6,// Number - Pixel radius of the tooltip border   
          tooltipXOffset: 10,// Number - Pixel offset from point x to tooltip edge
          responsive: true,
          maintainAspectRatio: false,
          });



          var ahdata = document.getElementById("ahdata").getContext("2d");
          window.ahdata = new Chart(ahdata).Line(ahoption, {    
          scaleShowGridLines : true,///Boolean - Whether grid lines are shown across the chart    
          scaleGridLineColor : "rgba(255,255,255,0.4)",//String - Colour of the grid lines    
          scaleGridLineWidth : 1,//Number - Width of the grid lines   
          scaleShowHorizontalLines: true,//Boolean - Whether to show horizontal lines (except X axis)   
          scaleShowVerticalLines: false,//Boolean - Whether to show vertical lines (except Y axis)    
          bezierCurve : true,//Boolean - Whether the line is curved between points    
          bezierCurveTension : 0.4,//Number - Tension of the bezier curve between points    
          pointDot : true,//Boolean - Whether to show a dot for each point    
          pointDotRadius : 5,//Number - Radius of each point dot in pixels    
          pointDotStrokeWidth : 2,//Number - Pixel width of point dot stroke    
          pointHitDetectionRadius : 20,//Number - amount extra to add to the radius to cater for hit detection outside the drawn point    
          datasetStroke : true,//Boolean - Whether to show a stroke for datasets    
          datasetStrokeWidth : 3,//Number - Pixel width of dataset stroke   
          datasetFill : true,//Boolean - Whether to fill the dataset with a colour
          animationSteps: 15,// Number - Number of animation steps    
          animationEasing: "easeOutQuart",// String - Animation easing effect     
          tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label    
          scaleFontSize: 12,// Number - Scale label font size in pixels   
          scaleFontStyle: "normal",// String - Scale label font weight style    
          scaleFontColor: "#000",// String - Scale label font colour
          tooltipEvents: ["mousemove", "touchstart", "touchmove"],// Array - Array of string names to attach tooltip events   
          tooltipFillColor: "rgba(255,255,255,0.8)",// String - Tooltip background colour   
          tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label    
          tooltipFontSize: 12,// Number - Tooltip label font size in pixels
          tooltipFontColor: "#000",// String - Tooltip label font colour    
          tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label    
          tooltipTitleFontSize: 14,// Number - Tooltip title font size in pixels    
          tooltipTitleFontStyle: "bold",// String - Tooltip title font weight style   
          tooltipTitleFontColor: "#000",// String - Tooltip title font colour   
          tooltipYPadding: 8,// Number - pixel width of padding around tooltip text   
          tooltipXPadding: 16,// Number - pixel width of padding around tooltip text    
          tooltipCaretSize: 10,// Number - Size of the caret on the tooltip   
          tooltipCornerRadius: 6,// Number - Pixel radius of the tooltip border   
          tooltipXOffset: 10,// Number - Pixel offset from point x to tooltip edge
          responsive: true,
          maintainAspectRatio: false,
          });



          var atdata = document.getElementById("atdata").getContext("2d");
          window.atdata = new Chart(atdata).Line(atoption, {    
          scaleShowGridLines : true,///Boolean - Whether grid lines are shown across the chart    
          scaleGridLineColor : "rgba(255,255,255,0.4)",//String - Colour of the grid lines    
          scaleGridLineWidth : 1,//Number - Width of the grid lines   
          scaleShowHorizontalLines: true,//Boolean - Whether to show horizontal lines (except X axis)   
          scaleShowVerticalLines: false,//Boolean - Whether to show vertical lines (except Y axis)    
          bezierCurve : true,//Boolean - Whether the line is curved between points    
          bezierCurveTension : 0.4,//Number - Tension of the bezier curve between points    
          pointDot : true,//Boolean - Whether to show a dot for each point    
          pointDotRadius : 5,//Number - Radius of each point dot in pixels    
          pointDotStrokeWidth : 2,//Number - Pixel width of point dot stroke    
          pointHitDetectionRadius : 20,//Number - amount extra to add to the radius to cater for hit detection outside the drawn point    
          datasetStroke : true,//Boolean - Whether to show a stroke for datasets    
          datasetStrokeWidth : 3,//Number - Pixel width of dataset stroke   
          datasetFill : true,//Boolean - Whether to fill the dataset with a colour
          animationSteps: 15,// Number - Number of animation steps    
          animationEasing: "easeOutQuart",// String - Animation easing effect     
          tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label    
          scaleFontSize: 12,// Number - Scale label font size in pixels   
          scaleFontStyle: "normal",// String - Scale label font weight style    
          scaleFontColor: "#000",// String - Scale label font colour
          tooltipEvents: ["mousemove", "touchstart", "touchmove"],// Array - Array of string names to attach tooltip events   
          tooltipFillColor: "rgba(255,255,255,0.8)",// String - Tooltip background colour   
          tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label    
          tooltipFontSize: 12,// Number - Tooltip label font size in pixels
          tooltipFontColor: "#000",// String - Tooltip label font colour    
          tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label    
          tooltipTitleFontSize: 14,// Number - Tooltip title font size in pixels    
          tooltipTitleFontStyle: "bold",// String - Tooltip title font weight style   
          tooltipTitleFontColor: "#000",// String - Tooltip title font colour   
          tooltipYPadding: 8,// Number - pixel width of padding around tooltip text   
          tooltipXPadding: 16,// Number - pixel width of padding around tooltip text    
          tooltipCaretSize: 10,// Number - Size of the caret on the tooltip   
          tooltipCornerRadius: 6,// Number - Pixel radius of the tooltip border   
          tooltipXOffset: 10,// Number - Pixel offset from point x to tooltip edge
          responsive: true,
          maintainAspectRatio: false,
          });
  }        


 var x = [];
 var y = [];
 var limit =0;
 var winddata;
 var lxdata;
 var ahdata;
 var atdata;
  // called when a message arrives
  function onMessageArrived(message) {
               ss = message.payloadString;
               var obj = JSON.parse(ss)
                   console.log(obj);
              
               if ('CENTRALDEVICE_SENSOR' in obj) {
                   var wind = obj.CENTRALDEVICE_SENSOR.WD;
                   var time = obj.CENTRALDEVICE_SENSOR.TS;
                   var date = obj.CENTRALDEVICE_SENSOR.DS;
                   var AH = obj.CENTRALDEVICE_SENSOR.AH;
                   var LX = obj.CENTRALDEVICE_SENSOR.LX;
                   var RG = obj.CENTRALDEVICE_SENSOR.RG;
                   var AT = obj.CENTRALDEVICE_SENSOR.AT;
                  

                    winddata.addData([wind], time);
                    winddata.removeData();

                    lxdata.addData([LX], time);
                    lxdata.removeData();

                    ahdata.addData([AH], time);
                    ahdata.removeData();

                    atdata.addData([AT], time);
                    atdata.removeData();
               

                  $(".windspeeddata").text(wind);
                  $(".ahdata").text(AH);
                  $(".lxdata").text(LX);
                  $(".rgdata").text(RG);
                  $(".atdata").text(AT);
          } // End if

     } // End message arrive
     








