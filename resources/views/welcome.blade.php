<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="kabaw" />
    <meta name="description" content="Kabaw.io" />
    <meta name="keywords" content="Kabaw" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <!-- SITE TITLE -->
    <title>Kabaw</title>

    <!-- FAVICON -->
    <link rel="icon" href="resources/assets/landingpage/assets/images/favicon.ico">
    
    <!-- WEB FONTS -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:100,300,400,600,700' rel='stylesheet' type='text/css'>
   
    <!-- STYLESHEETS -->
    <link rel="stylesheet" href="{!! asset('resources/assets/landingpage/assets/css/style.css') !!}">
    <link rel="stylesheet" href="{!! asset('resources/assets/landingpage/assets/fonts/flaticon.css') !!}">
    <link rel="stylesheet" href="{!! asset('resources/assets/landingpage/assets/css/responsive.css') !!}">
    
</head>

<body> 
    
    <!-- PRELOADER -->
    <div id="preloader"><img src="resources/assets/landingpage/assets/images/logo.png" alt=""></div>

    <!-- MAIN NAV -->
    <a id="main-nav" href="#sidr"><span class="flaticon-menu9"></span></a>
    <div id="sidr" class="sidr">
        
        <!-- MAIN NAV LOGO -->
        <a href="#" id="menu-logo"><img src="resources/assets/landingpage/assets/images/menu-logo.png" alt=""></a>
        
        <!-- MAIN NAV LINKS -->
        <ul>
            <li><a href="#Home" ><span class="icons flaticon-house3"></span>Home</a>
            </li>
            <li><a href="#Features" ><span class="icons flaticon-drawer1"></span>Features</a>
            </li>
            <li><a href="#About" ><span class="icons flaticon-cursor7"></span>About</a>
            </li>
            <li><a href="#Video" ><span class="icons flaticon-key9"></span>Video</a>
            </li>
            <!-- <li><a href="#Clients" ><span class="icons flaticon-comment2"></span>Clients</a> -->
            <!-- </li> -->
            <!-- <li><a href="#Screenshots" ><span class="icons flaticon-camera19"></span>Screenshots</a> -->
            <!-- </li> -->

         
            </li>
        </ul>
        <!-- END MAIN NAV LINKS -->
    </div>
    <!-- END MAIN NAV -->
    
    <!-- PAGE LOGO -->
    <div class="wrap">
        <div id="logo">
            <a href="#"><img src="resources/assets/landingpage/assets/images/logo.png" alt=""> </a>
        </div>
    </div>
    <!-- END PAGE LOGO -->

    <!-- LANDING PAGE CONTENT -->
    <div id="fullpage">
        
        <!-- RIGHT HAND & PHONE MOCK-UP IMAGES -->
        <div class="wrap">
            <div class="section-image"> 
            <!-- Home IMAGE --><img src="resources/assets/landingpage/assets/images/1.jpg" alt="">
            <!-- Features IMAGE --><img src="resources/assets/landingpage/assets/images/2.jpg" alt="">
            <!-- About IMAGE --><img src="resources/assets/landingpage/assets/images/3.jpg" alt="">
            <!-- Video IMAGE --><img src="resources/assets/landingpage/assets/images/4.jpg" alt="">
            <!-- Clients IMAGE -->    <!-- <img src="resources/assets/landingpage/assets/images/5.jpg" alt=""> -->
            <!-- Screenshots IMAGE --> <!-- <img src="resources/assets/landingpage/assets/images/2.jpg" alt=""> -->
            <!-- Contact IMAGE --><img src="resources/assets/landingpage/assets/images/1.jpg" alt="">
            </div>
            <div id="hand"></div>
        </div>
        <!-- END RIGHT HAND & PHONE MOCK-UP -->
        

        <!-- SECTION HOME -->
        <div class="section " id="section0">
            <div class="wrap">
                <div class="box">
                    <!-- SECTION HOME CONTENT -->
                    <h1>Kabaw</h1>
                    <p> is an agri-tech company focused on sustainable farm solutions through IoT innovations and big data analytics helping farmers maximize crop yields and better food security to the region.</p>
                    @if (Route::has('login'))
                    <a href="{{ url('/login') }}"  class="simple-button">Login</a>
    
                    <a href="{{ url('/register') }}"  class="simple-button">Register</a>
                    @endif
                    <!-- END SECTION HOME CONTENT -->
                </div>
            </div>
        </div>
        <!-- END SECTION HOME -->

        <!-- SECTION FEATURES -->
        <div class="section " id="section1">
            <div class="wrap">
                <div class="box">
                    <!-- SECTION FEATURES CONTENT -->
                    <h2><strong>Amazing</strong> Features</h2>
                    <p>Yield More?</p>
                    <ul class="features">
                        <li><a class="tooltip" href="#"><span class="icon flaticon-desktop1"></span> Crop Management<span class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner"><span class="icon flaticon-desktop1"></span>Kabaw management lets you plan, monitor and analyze all activities on your farms easily. It reduces human error, and ultimately improves farm-management decisions.</span></span></span></a> </li>

                        <li><a class="tooltip" href="#"><span class="icon flaticon-desktop1"></span>Growing Analytics & Reports<span class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner"><span class="icon flaticon-desktop1"></span>We work on digital interfaces with one eye on the user and the other on the developers.</span></span></span></a> </li>


                        <li><a class="tooltip" href="#"><span class="icon flaticon-desktop1"></span> Accessible Farm Monitoring<span class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner"><span class="icon flaticon-desktop1"></span>Understand your Farm conditions anywhere, any time and get notified if your attention is needed.</span></span></span></a> </li>
                    </ul>
                    <ul class="features">
                        <li><a class="tooltip" href="#"><span class="icon flaticon-desktop1"></span> Farm Recommendations<span class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner"><span class="icon flaticon-desktop1"></span>Information and knowledge received from the plant provide growers with immediate feedback of their actions, enabling prompt reaction, leading to better crop management decisions.</span></span></span></a> </li>
                    </ul>
                    <!-- END SECTION FEATURES CONTENT -->
                </div>
            </div>
        </div>
        <!-- END SECTION FEATURES -->

        <!-- SECTION ABOUT -->
        <div class="section" id="section2">
            <div class="wrap">
                <div class="box">
                    <!-- SECTION ABOUT CONTENT -->
                    <h2>About <strong>Kabaw</strong></h2>
                    <div class="tabs tabs-style-linemove">
                        <!-- TABS LINKS -->
                        <nav>
                            <ul>
                                <li><a href="#section-linemove-1"><span class="icon flaticon-laptop3"></span><span> Monitor</span></a>
                                </li>
                                <li><a href="#section-linemove-2"><span class="icon flaticon-laptop3"></span><span> Analyze</span></a>
                                </li>
                                <li><a href="#section-linemove-3"><span class="icon flaticon-laptop3"></span><span> Control</span></a>
                                </li>
                               
                            </ul>
                        </nav>
                        <!-- END TABS LINKS -->

                        <!-- TABS CONTENT -->
                        <div class="content-wrap">
                           
                            <!-- TAB 1 -->
                            <section id="section-linemove-1">
                                <h4><span class="icon flaticon-laptop3"></span> Monitor</h4>
                                <p>it monitors the environmental condition of the crop by measuring the heat levels, light intensity, relative humidity, soil moisture and all other important parameters and remotely connected to an app allowing them to do real-time remote monitoring and get notified if their attention is needed. ​</p>
                            </section>

                             <!-- TAB 2 -->
                            <section id="section-linemove-2">
                                <h4><span class="icon flaticon-laptop3"></span> Analyze</h4>
                                <p>The data gathered will be analyzed so that the farmer/farm in-charge can see a clearer picture of what’s going on the field providing them the needed data tools like historical trends, statistics and recommendations based on analytics for a smarter way of improving their crops growth.</p>
                                
                            </section>

                            <!-- TAB 3 -->
                            <section id="section-linemove-3">
                                 <h4><span class="icon flaticon-laptop3"></span> Control</h4>
                                <p>It automatically controls crop heat stress when equipped with pre-installed irrigation systems on the field and other automation components like sprinklers, exhaust fans and growing lights used inside a greenhouses.</p>
                            </section>
                        </div>
                         <!-- END TABS CONTENT -->                            

                    <!-- END SECTION ABOUT -->
                    </div>
                </div>
            </div>
        </div>
        <!-- END SECTION ABOUT -->


        <!-- SECTION VIDEO -->
        <div class="section" id="section3">
            <div class="wrap">
                <div class="box">
                    <!-- SECTION VIDEO CONTENT -->
                    <h2> <strong>Video</strong> presentation</h2>
                    <div class="video-presentation">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/nR4hEWs5JHk" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <!-- END SECTION VIDEO CONTENT-->
                </div>
            </div>
        </div>
        <!-- END SECTION VIDEO -->



        <!-- SECTION SCREENSHOTS -->
        <!-- <div class="section" id="section5">
            <div class="wrap">
                <div class="box">
                    <div class="fp-tableCell screenshots-content">
                        --> <!-- SECTION SCREENSHOTS CONTENT -->
                       <!--  <h2>Screenshots</h2>
                        <ul class="features">
                            <li><a class="tooltip"><span class="icon flaticon-camera19"></span> Present your app with Kabaw screenshots</a> </li>
                            <li><a class="tooltip"><span class="icon flaticon-arrow96"></span> Change images using side arrows or caption bullets</a> </li>
                            <li><a class="tooltip"><span class="icon flaticon-laptop3"></span> Navigate using keyboard arrows to change screenshots</a> </li>
                        </ul> -->
                         <!-- END SECTION SCREENSHOTS CONTENT -->
                   <!--  </div>
                   
                </div>
                <div class="screenshots-wrapper"> -->

                    <!-- SECTION SCREENSHOTS IMAGES -->
<!--                     <div class="slide" id="slide1" data-anchor="slide1"> <img src="resources/assets/landingpage/assets/images/screen1.jpg" alt=""> </div>
                    <div class="slide" id="slide2" data-anchor="slide2"> <img src="resources/assets/landingpage/assets/images/screen2.jpg" alt=""> </div>
                    <div class="slide" id="slide3" data-anchor="slide3"> <img src="resources/assets/landingpage/assets/images/screen3.jpg" alt=""> </div>
                    <div class="slide" id="slide4" data-anchor="slide4"> <img src="resources/assets/landingpage/assets/images/1.jpg" alt=""> </div> -->
                    <!-- END SECTION SCREENSHOTS IMAGES -->
            <!--     </div>
            </div>
        </div> -->
        <!-- END SECTION SCREENSHOTS -->



    <!-- SOCIAL ICONS -->
    <div class="wrap">
        <div id="social-icons">
            <ul>
                <li><a href=""><i class="flaticon-facebook6"></i></a> </li>
                <li><a href=""><i class="flaticon-social19"></i></a> </li>
                <li><a href=""><i class="flaticon-google16"></i></a> </li>
                <li><a href=""><i class="flaticon-social40"></i></a> </li>
                <li><a href=""><i class="flaticon-social7"></i></a> </li>
                <li><a href=""><i class="flaticon-logo3"></i></a> </li>
            </ul>
        </div>
    </div>
    <!-- END SOCIAL ICONS -->


        <!-- SCRIPTS -->
        <!-- JQUERY -->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js'></script>
        <script src="{!! asset('resources/assets/landingpage/assets/js/jquery.fullPage.js') !!}"></script>
        <script src="{!! asset('resources/assets/landingpage/assets/js/cbpFWTabs.js') !!}"></script>
        <script src="{!! asset('resources/assets/landingpage/assets/js/jquery.sidr.min.js') !!}"></script>
        <script src="{!! asset('resources/assets/landingpage/assets/js/scripts.js') !!}"></script>

<script>
  window.intercomSettings = {
    app_id: "xky7yxfp"
  };
</script>
<script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/xky7yxfp';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>

</body>

</html>
