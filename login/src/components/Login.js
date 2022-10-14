import React from 'react'
import './Logincss.css'
// import { withRouter } from 'react-router-dom';
export default function Login() {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form" className="img-fluid" />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <form>

                      {/* <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" ></i>
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div> */}

                      <h5 className="text" >Login to your account</h5>

                      <div className='input-container-email'>
                        <label for="name"> Email </label>
                        <input type="email" name="email" id="name" placeholder='Enter your email address '/>
                      </div>

                      <div className='input-container-password'>
                        <label for="password">Password </label>
                        <input type ="password" name ="password" id="name" placeholder='Enter your password'/>
                      </div>

                      <div className='input-container-rememberme'>
                        <div class="input-group">
                          <div class="custom-checkbox custom-control col-6">
                            <input type="checkbox" name="remember" id="remember" class="custom-control-input"/>
                            <label for="remember" class="custom-control-label">Remember Me</label>
                          </div>
                          <label for="forgot-password" class="col-6">
                            <a href="forgot.html" class="forget ml-6">Forgot Password?</a>
                          </label>
                        </div>
                        {/* <input type="checkbox"/>
                        <span className='rememberme' name="rememberme"> Remember Me !
                        <h6> <a href="/">Forgot Password ?</a> </h6></span>
                         */}
                      </div>

                      <div className='row d-flex  justify-content-center align-content-center'>
                        
                          <button type="submit" className='btn-login col-3'>Login</button>
                      </div>

                      <div className="container-signup">
                        <div class ="input-group">
                          <div className='col-4' >
                            New to platform?

                          </div>
                          <div className='col-8 justify-content-center align-content-center'>
                            <button type="signup" name ="signup" className="signup">Sign Up</button>
                          </div>
                        </div>
                      </div>
                       
                      {/* <a href="/" className="small text-muted">Terms of use.</a>
                      <a href="/" className="small text-muted">Privacy policy</a> */}
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>
    
    
  )
}

