// /*
// * Trending line chart
// */
// //var randomScalingFactor = function(){ return Math.round(Math.random()*10)};
// var data = {
// 	labels : ["JAN","FEB","MAR","APR","MAY","JUNE","JULY"],
// 	datasets : [
// 		{
// 			label: "First dataset",
// 			fillColor : "rgba(128, 222, 234, 0.6)",
// 			strokeColor : "#ffffff",
// 			pointColor : "#00bcd4",
// 			pointStrokeColor : "#ffffff",
// 			pointHighlightFill : "#ffffff",
// 			pointHighlightStroke : "#ffffff",
// 			data: [1, 5, 2, 4, 8, 5, 8]
// 		}
// 	]
// };


// var interval;

// $(function randomName() {
//     interval = setInterval(update, 1000);  
//     interval2 = setInterval(update2, 1000);  
// });

// $("#plotinterval").on("change", function(){
//     clearInterval(interval);
//     clearInterval(interval2);
//     Materialize.toast('<span> Data interval changed to '+$(this).val()+' </span>', 3500);
//     interval = setInterval(update, $(this).val());
//     interval2 = setInterval(update2, $(this).val());
// });

// var nReloads = 0;
// var min = 1;
// var max = 10;
// var l =0;
// var trendingLineChart;
// function update() {
// 	nReloads++;

// 	var y = Math.floor(Math.random() * (max - min + 1)) + min;
// 	trendingLineChart.addData([y], data.labels[l]);
// 	trendingLineChart.removeData();
// 	l++;
// 	if( l == data.labels.length)
// 	{ l = 0;}
// }


// var nReloads = 0;
// var min = 1;
// var max = 10;
// var l =0;
// var trendingLineChart2;
// function update2() {
// 	nReloads++;

// 	var y = Math.floor(Math.random() * (max - min + 1)) + min;
// 	trendingLineChart2.addData([y], data.labels[l]);
// 	trendingLineChart2.removeData();
// 	l++;
// 	if( l == data.labels.length)
// 		{ l = 0;}
// }


// window.onload = function(){
// 	var trendingLineChart = document.getElementById("trending-line-chart").getContext("2d");
// 	var trendingLineChart2 = document.getElementById("trending-line-chart2").getContext("2d");
	
// 	window.trendingLineChart = new Chart(trendingLineChart).Line(data, {		
// 		scaleShowGridLines : true,///Boolean - Whether grid lines are shown across the chart		
// 		scaleGridLineColor : "rgba(255,255,255,0.4)",//String - Colour of the grid lines		
// 		scaleGridLineWidth : 1,//Number - Width of the grid lines		
// 		scaleShowHorizontalLines: true,//Boolean - Whether to show horizontal lines (except X axis)		
// 		scaleShowVerticalLines: false,//Boolean - Whether to show vertical lines (except Y axis)		
// 		bezierCurve : true,//Boolean - Whether the line is curved between points		
// 		bezierCurveTension : 0.4,//Number - Tension of the bezier curve between points		
// 		pointDot : true,//Boolean - Whether to show a dot for each point		
// 		pointDotRadius : 5,//Number - Radius of each point dot in pixels		
// 		pointDotStrokeWidth : 2,//Number - Pixel width of point dot stroke		
// 		pointHitDetectionRadius : 20,//Number - amount extra to add to the radius to cater for hit detection outside the drawn point		
// 		datasetStroke : true,//Boolean - Whether to show a stroke for datasets		
// 		datasetStrokeWidth : 3,//Number - Pixel width of dataset stroke		
// 		datasetFill : true,//Boolean - Whether to fill the dataset with a colour				
// 		animationSteps: 15,// Number - Number of animation steps		
// 		animationEasing: "easeOutQuart",// String - Animation easing effect			
// 		tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
// 		scaleFontSize: 12,// Number - Scale label font size in pixels		
// 		scaleFontStyle: "normal",// String - Scale label font weight style		
// 		scaleFontColor: "#fff",// String - Scale label font colour
// 		tooltipEvents: ["mousemove", "touchstart", "touchmove"],// Array - Array of string names to attach tooltip events		
// 		tooltipFillColor: "rgba(255,255,255,0.8)",// String - Tooltip background colour		
// 		tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
// 		tooltipFontSize: 12,// Number - Tooltip label font size in pixels
// 		tooltipFontColor: "#000",// String - Tooltip label font colour		
// 		tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
// 		tooltipTitleFontSize: 14,// Number - Tooltip title font size in pixels		
// 		tooltipTitleFontStyle: "bold",// String - Tooltip title font weight style		
// 		tooltipTitleFontColor: "#000",// String - Tooltip title font colour		
// 		tooltipYPadding: 8,// Number - pixel width of padding around tooltip text		
// 		tooltipXPadding: 16,// Number - pixel width of padding around tooltip text		
// 		tooltipCaretSize: 10,// Number - Size of the caret on the tooltip		
// 		tooltipCornerRadius: 6,// Number - Pixel radius of the tooltip border		
// 		tooltipXOffset: 10,// Number - Pixel offset from point x to tooltip edge
// 		responsive: true
// 		});

// 	window.trendingLineChart2 = new Chart(trendingLineChart2).Line(data, {		
// 	scaleShowGridLines : true,///Boolean - Whether grid lines are shown across the chart		
// 	scaleGridLineColor : "rgba(255,255,255,0.4)",//String - Colour of the grid lines		
// 	scaleGridLineWidth : 1,//Number - Width of the grid lines		
// 	scaleShowHorizontalLines: true,//Boolean - Whether to show horizontal lines (except X axis)		
// 	scaleShowVerticalLines: false,//Boolean - Whether to show vertical lines (except Y axis)		
// 	bezierCurve : true,//Boolean - Whether the line is curved between points		
// 	bezierCurveTension : 0.4,//Number - Tension of the bezier curve between points		
// 	pointDot : true,//Boolean - Whether to show a dot for each point		
// 	pointDotRadius : 5,//Number - Radius of each point dot in pixels		
// 	pointDotStrokeWidth : 2,//Number - Pixel width of point dot stroke		
// 	pointHitDetectionRadius : 20,//Number - amount extra to add to the radius to cater for hit detection outside the drawn point		
// 	datasetStroke : true,//Boolean - Whether to show a stroke for datasets		
// 	datasetStrokeWidth : 3,//Number - Pixel width of dataset stroke		
// 	datasetFill : true,//Boolean - Whether to fill the dataset with a colour				
// 	animationSteps: 15,// Number - Number of animation steps		
// 	animationEasing: "easeOutQuart",// String - Animation easing effect			
// 	tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
// 	scaleFontSize: 12,// Number - Scale label font size in pixels		
// 	scaleFontStyle: "normal",// String - Scale label font weight style		
// 	scaleFontColor: "#fff",// String - Scale label font colour
// 	tooltipEvents: ["mousemove", "touchstart", "touchmove"],// Array - Array of string names to attach tooltip events		
// 	tooltipFillColor: "rgba(255,255,255,0.8)",// String - Tooltip background colour		
// 	tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
// 	tooltipFontSize: 12,// Number - Tooltip label font size in pixels
// 	tooltipFontColor: "#000",// String - Tooltip label font colour		
// 	tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label		
// 	tooltipTitleFontSize: 14,// Number - Tooltip title font size in pixels		
// 	tooltipTitleFontStyle: "bold",// String - Tooltip title font weight style		
// 	tooltipTitleFontColor: "#000",// String - Tooltip title font colour		
// 	tooltipYPadding: 8,// Number - pixel width of padding around tooltip text		
// 	tooltipXPadding: 16,// Number - pixel width of padding around tooltip text		
// 	tooltipCaretSize: 10,// Number - Size of the caret on the tooltip		
// 	tooltipCornerRadius: 6,// Number - Pixel radius of the tooltip border		
// 	tooltipXOffset: 10,// Number - Pixel offset from point x to tooltip edge
// 	responsive: true
// 	});
// };
