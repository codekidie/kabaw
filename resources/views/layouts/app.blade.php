
@include('layouts.header')
    
@if (!Auth::guest())
<body>
    <!-- Start Page Loading -->
    <div id="loader-wrapper">
        <div id="loader"></div>        
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
    </div>
    <!-- End Page Loading -->

    <!-- //////////////////////////////////////////////////////////////////////////// -->

    <!-- START HEADER -->
        <header id="header" class="page-topbar">
        <!-- start header nav-->
        <div class="navbar-fixed">
            <nav class="navbar-color">
                <div class="nav-wrapper">
                    <ul class="left">                      
                      <li><h1 class="logo-wrapper"><a href="#" class="brand-logo darken-1">
                        <img src="{!! asset('/resources/assets/material/images/materialize-logo.png') !!}" alt="Logo">
                      </a> <span class="logo-text">Kabaw</span></h1></li>
                    </ul>
                    <div class="header-search-wrapper hide-on-med-and-down">
                        <i class="mdi-action-search"></i>
                        <input type="text" name="Search" class="header-search-input z-depth-2" placeholder="Explore Kabaw">
                    </div>
                    <ul class="right hide-on-med-and-down">
                    
                        </li>

                        <li><a href="{{ url('/logout') }}"  onclick="event.preventDefault();
                                     document.getElementById('logout-form').submit();" class="waves-effect waves-block waves-light"><i class="mdi-action-exit-to-app"></i></a>

                       
                           <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                                {{ csrf_field() }}
                            </form>

                        </li>                        
                        
                     
                        </li>
                    </ul>
                    <!-- translation-button -->
                    
                    <!-- notifications-dropdown -->
                    
                </div>
            </nav>
        </div>
        <!-- end header nav-->
    </header>
    <!-- END HEADER -->

    <!-- //////////////////////////////////////////////////////////////////////////// -->

    <!-- START MAIN -->
    <div >
        <!-- START WRAPPER -->
        <div class="wrapper">
            <!-- START CONTENT -->
            <section id="content">
                <!--start container-->
                <div class="container">
                    <!--chart dashboard start-->
                    <div id="chart-dashboard">
                        <div class="row">
                          @yield('content')                 
                        </div>
                    </div>
                    <!--chart dashboard end-->

                  

                    <!-- //////////////////////////////////////////////////////////////////////////// -->

                  

                    <!-- Floating Action Button -->
                    <div class="fixed-action-btn" style="bottom: 45px; ">
                        <a class="btn-floating btn-large teal">
                          <i class="large mdi-action-settings"></i>
                        </a>
                        <ul>
                          <li><a href="#addPlant" class="btn-floating red modal-trigger"><i class="large mdi-content-add-circle-outline"></i></a></li>


                          <li><a href="#addTimer" class="btn-floating yellow darken-1 modal-trigger"><i class="large mdi-image-timer"></i></a></li>

                          <li><a href="app-calendar.html" class="btn-floating green"><i class="large mdi-editor-insert-invitation"></i></a></li>

                          <li><a href="app-email.html" class="btn-floating blue"><i class="large mdi-communication-email"></i></a></li>
                        </ul>
                    </div>
                    <!-- Floating Action Button -->

                    <!-- Modals -->
                    <div id="addTimer" class="modal modal-fixed-footer" style="z-index: 1003; display: none; opacity: 0; transform: scaleX(0.7); top: 84.5924px;">
                      <div class="modal-content">
                        <label>Plot Interval</label>
                         <select class="initialized" id="plotinterval">
                          <option value="" disabled="" selected="">Choose your option</option>
                          <option value="1000">1 secs</option>
                          <option value="5000">5 secs</option>
                          <option value="10000">10 secs</option>
                          <option value="15000">15 secs</option>
                        </select>
                      </div>
                      <div class="modal-footer green lighten-4">
                        <a href="#" class="waves-effect waves-red btn-flat modal-action modal-close">Close</a>
                      </div>
                    </div>
                    <!-- End Modal -->

                    <!-- Add Plant Modals -->
                    <div id="addPlant" class="modal modal-fixed-footer" style="z-index: 1003; display: none; opacity: 0; transform: scaleX(0.7); top: 84.5924px;">
                      <div class="modal-content">
                        <div class="col s12 m12 l6">
                              <h4 class="header2">Add New Plant</h4>
                              <div id="success_uploaded"></div>

                              <div class="progress">
                                <div class="determinate"  id="uploader" style="width:0%;"></div>
                              </div>
                              <!-- <progress value="0" max="100" id="uploader">0%</progress> -->
                              <div class="row" id="plantwrapper">
                                  <div class="row">
                                      <input type="file" name="filename" id="plant_file">
                                  </div>
                                  <div class="row">
                                    <div id="plant_warning"></div>
                                    
                                    <div class="input-field col s12">
                                      <input id="plant_name" value="" name="plant_name" type="text">
                                      <label for="plant_name" class="active">Plant Name</label>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div id="date_planted_warning"></div>

                                    <div class="input-field col s12">
                                      <input type="date" id="date_planted" name="date_planted">
                                      <label for="datetime" class="active">Date Planted</label>
                                    </div>
                                  </div>
                                    
                                  
                              </div>
                          </div>
                      </div>
                      <div class="modal-footer green lighten-4">
                        <a href="#" class="waves-effect waves-red btn-flat modal-action modal-close">Close</a>
                        <button class="btn cyan waves-effect waves-light right" id="submit_plant" name="action">Submit
                                          <i class="mdi-content-send right"></i>
                                        </button>
                      </div>
                    </div>
                    <!-- End Modal -->




                </div>
                <!--end container-->
            </section>
            <!-- END CONTENT -->

            <!-- //////////////////////////////////////////////////////////////////////////// -->

            <!-- START RIGHT SIDEBAR NAV-->
            <aside id="right-sidebar-nav">
                <ul id="chat-out" class="side-nav rightside-navigation">
                    <li class="li-hover">
                    <a href="#" data-activates="chat-out" class="chat-close-collapse right"><i class="mdi-navigation-close"></i></a>
                    <div id="right-search" class="row">
                        <form class="col s12">
                            <div class="input-field">
                                <i class="mdi-action-search prefix"></i>
                                <input id="icon_prefix" type="text" class="validate">
                                <label for="icon_prefix">Search</label>
                            </div>
                        </form>
                    </div>
                    </li>
                    <li class="li-hover">
                        <ul class="chat-collapsible" data-collapsible="expandable">
                        <li>
                            <div class="collapsible-header teal white-text active"><i class="mdi-social-whatshot"></i>Recent Activity</div>
                            <div class="collapsible-body recent-activity">
                                <div class="recent-activity-list chat-out-list row">
                                    <div class="col s3 recent-activity-list-icon"><i class="mdi-action-add-shopping-cart"></i>
                                    </div>
                                    <div class="col s9 recent-activity-list-text">
                                        <a href="#">just now</a>
                                        <p>Lorem ipselum.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                      
                        
                        </ul>
                    </li>
                </ul>
            </aside>
            <!-- LEFT RIGHT SIDEBAR NAV-->

        </div>
        <!-- END WRAPPER -->

    </div>
    <!-- END MAIN -->



    <!-- //////////////////////////////////////////////////////////////////////////// -->

    <!-- START FOOTER -->
    <footer class="page-footer" style="padding-left:0px !important;">
        <div class="container">
            <div class="row">
               
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                Copyright © 2017 kabaw.io . All rights reserved</span>
            </div>
        </div>
    </footer>
    <!-- END FOOTER -->
             
                      
 @else
@include('layouts.header_guest')

 <body class="cyan">
  <!-- Start Page Loading -->
  <div id="loader-wrapper">
      <div id="loader"></div>        
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
  </div>
  <!-- End Page Loading -->
 <!-- Login Form -->
        @yield('content')
 @endif   



    <!-- jQuery Library -->
    <script type="text/javascript" src="{{ URL::asset('resources/assets/material/js/jquery-1.11.2.min.js') }}"></script>    
    <!--materialize js-->
    <script type="text/javascript" src="{{ URL::asset('resources/assets/material/js/materialize.js') }}"></script>
    <!--scrollbar-->
    <script type="text/javascript" src="{{ URL::asset('resources/assets/material/js/plugins/perfect-scrollbar/perfect-scrollbar.min.js') }}"></script>
    

    <!-- chartist -->
    <script type="text/javascript" src="{{ URL::asset('resources/assets/material/js/plugins/chartist-js/chartist.min.js') }}"></script>   

    <!-- chartjs -->
    <script type="text/javascript" src="{{ URL::asset('resources/assets/material/js/plugins/chartjs/chart.min.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('resources/assets/material/js/plugins/chartjs/chart-script.js') }}"></script>
    
    <!--plugins.js - Some Specific JS codes for Plugin Settings-->
    <script type="text/javascript" src="{{ URL::asset('resources/assets/material/js/plugins.js') }}"></script>
    <!-- <script src="https://cdn.plot.ly/plotly-latest.min.js"></script> -->
    <script src="https://www.gstatic.com/firebasejs/3.5.0/firebase.js"></script>
    <script type="text/javascript" src="{{ URL::asset('resources/assets/js/mqttws31.min.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('resources/assets/js/sensordata.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('resources/assets/js/guid.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('resources/assets/js/plant_timer.js') }}"></script>

    <script>
      var config = {
        apiKey: "AIzaSyCr1jm2sncTyjbYeKfIU0UXaM-Sr41UbD8",
        authDomain: "cloudfarm-20ab1.firebaseapp.com",
        databaseURL: "https://cloudfarm-20ab1.firebaseio.com",
        storageBucket: "cloudfarm-20ab1.appspot.com",
        messagingSenderId: "246634199974"
      };
      firebase.initializeApp(config);
    </script>
    <script type="text/javascript" src="{{ URL::asset('resources/assets/js/plant.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('resources/assets/js/get_plants.js') }}"></script>
    <script type="text/javascript" src="{{ URL::asset('resources/assets/js/delete_plants.js') }}"></script>
    

</body>
</html>
