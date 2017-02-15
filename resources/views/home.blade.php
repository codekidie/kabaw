@extends('layouts.app')

@section('content')

     
             


<div class="col s12 m6 l4">
    <div id="flight-card" class="card">
        <div class="card-header teal darken-2">
            <div class="card-title">
                <h4 class="flight-card-title">My Farm</h4>
                <p class="flight-card-date" id="current_datetimer"></p>
            </div>
        </div>
        <div class="card-content-bg white-text">
            <div class="card-content">
                            <div id="populate_plant_data"></div>
              
            </div>
        </div>
    </div>
</div>   

<h5>Wind Speed</h5>
<div id="plotcontainer">
<canvas id="winddata" height="70"></canvas>
</div>

<br>

<h5>Light Intensity</h5>
<div id="plotcontainer">
<canvas id="lxdata" height="70"></canvas>
</div>


<br>

<h5>Air Humidity</h5>
<div id="plotcontainer">
<canvas id="ahdata" height="70"></canvas>
</div>



<br>

<h5>Air Temperature</h5>
<div id="plotcontainer">
<canvas id="atdata" height="70"></canvas>
</div>

<br style="clear:both;">



@endsection
