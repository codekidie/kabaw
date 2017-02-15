
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'kabaw.io') }}</title>


    <link href="{!! asset('/resources/assets/material/css/materialize.css') !!}" media="all" type="text/css" rel="stylesheet" media="screen,projection">

    <link href="{!! asset('/resources/assets/material/css/style.css') !!}" media="all" type="text/css" rel="stylesheet" media="screen,projection">

    <link href="{!! asset('/resources/assets/material/css/page-center.css') !!}" media="all" type="text/css" rel="stylesheet" media="screen,projection">

    <!-- Custome CSS-->        
    <link href="{!! asset('/resources/assets/material/css/custom-style.css') !!}" media="all" type="text/css" rel="stylesheet" media="screen,projection">    

    
  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
    <!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
            

</head>
