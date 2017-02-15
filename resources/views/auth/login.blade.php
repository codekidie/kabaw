@extends('layouts.app')

@section('content')


                     <div id="login-page" class="row">
                       <div class="col s12 z-depth-4 card-panel">
                        <form  method="POST" action="{{ url('/login') }}" class="login-form">
                        {{ csrf_field() }}
                   
                        <div class="row">
                          <div class="input-field col s12 center">
                            <img src="http://kabaw.io/resources/assets/landingpage/assets/images/logo.png" alt="" class="circle responsive-img valign ">
                            <p class="center login-form-text">Kabaw.io</p>
                          </div>
                        </div>
                        <div class="row margin">
                          <div class="input-field col s12">
                            @if ($errors->has('email'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                            <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>
                            <label for="username" class="center-align">Email</label>
                          </div>
                        </div>
                        <div class="row margin">
                          <div class="input-field col s12">
                              @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                              @endif
                            <input id="password" type="password" class="form-control" name="password" required>
                            <label for="password">Password</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                                     <button type="submit" class="btn waves-effect waves-light col s12">
                                        Login
                                    </button>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s6 m6 l6">
                            <p class="margin medium-small"><a href="{{ url('/register') }}">Register Now!</a></p>
                          </div>
                          <div class="input-field col s6 m6 l6">
                              <p class="margin right-align medium-small"><a href="{{ url('/password/reset') }}">Forgot password ?</a></p>
                          </div>          
                        </div>

                      </form>
                </div>
              </div>
            
@endsection
