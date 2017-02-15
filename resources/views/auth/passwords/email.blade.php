@extends('layouts.app')

<!-- Main Content -->
@section('content')
    
                @if (session('status'))
                    <div class="alert alert-success">
                        {{ session('status') }}
                    </div>
                @endif

                <div id="login-page" class="row">
                <div class="col s12 z-depth-4 card-panel">
                  <form class="login-form" role="form" method="POST" action="{{ url('/password/email') }}">
                        {{ csrf_field() }}
                    <div class="row">
                      <div class="input-field col s12 center">
                        <h4>Reset Password</h4>
                        <p class="center">You can reset your password</p>
                      </div>
                    </div>
                    <div class="row margin">
                      <div class="input-field col s12">
                        <input type="email" class="form-control" name="email" value="{{ old('email') }}" required>
                        <label for="username" class="center-align active">Email</label>
                      </div>
                    </div>
               
                    <div class="row">
                      <div class="input-field col s12">
                       <button type="submit" class="btn waves-effect waves-light col s12">  Send Password Reset Link</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              
                
@endsection
