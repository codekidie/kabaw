@extends('layouts.app')

@section('content')

<div id="login-page" class="row">
    <div class="col s12 z-depth-4 card-panel">
      <form class="login-form" method="POST" action="{{ url('/register') }}">
        {{ csrf_field() }}
        <div class="row">
          <div class="input-field col s12 center">
            <h4>Register</h4>
            <p class="center">Join to our community now !</p>
          </div>
        </div>
        <div class="row margin">
            @if ($errors->has('name'))
                <span class="help-block">
                    <strong>{{ $errors->first('name') }}</strong>
                </span>
            @endif          <div class="input-field col s12">
            <input type="text" class="form-control" name="name" value="{{ old('name') }}" required autofocus placeholder="full name">
            <label class="center-align">Full Name</label>
          </div>
        </div>
        <div class="row margin">
            @if ($errors->has('email'))
                <span class="help-block">
                    <strong>{{ $errors->first('email') }}</strong>
                </span>
            @endif
          <div class="input-field col s12">
            <input id="email"  type="email" class="form-control" name="email" value="{{ old('email') }}" required placeholder="email">
            <label for="email" class="center-align">Email</label>
          </div>
        </div>
        <div class="row margin">
           @if ($errors->has('password'))
                <span class="help-block">
                    <strong>{{ $errors->first('password') }}</strong>
                </span>
            @endif
          <div class="input-field col s12">
            <input id="password" type="password" class="form-control" name="password" required placeholder="password">
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row margin">

            @if ($errors->has('password_confirmation'))
                <span class="help-block">
                    <strong>{{ $errors->first('password_confirmation') }}</strong>
                </span>
            @endif

          <div class="input-field col s12">
            <input id="password-again" type="password" class="form-control" name="password_confirmation" required placeholder="confirm password">
            <label for="password-again">Password again</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
         
               <button type="submit" class="btn waves-effect waves-light col s12"> Register </button>

          </div>
          <div class="input-field col s12">
            <p class="margin center medium-small sign-up">Already have an account? <a href="{{ url('/login') }}">Login</a></p>
          </div>
        </div>
      </form>
    </div>
  </div>

@endsection
