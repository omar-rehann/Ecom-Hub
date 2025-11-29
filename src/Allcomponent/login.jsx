import "../styles/all.css"
import { Link } from "react-router-dom";


const Login= () => {
  return (
    <div className="login position-relative min-vh-100">
      <section className="bg-danger bg-opacity-25" style={{ backgroundColor: '#9A616D' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-xl-10">
              <div className="card shadow-lg" style={{ borderRadius: '1rem', overflow: 'hidden' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid h-100 w-100"
                      style={{ objectFit: 'cover', borderRadius: '1rem 0 0 1rem' }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                          Sign into your account
                        </h5>

                        {/* الإيميل */}
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            placeholder=" "
                            required
                          />
                          <label className="form-label" htmlFor="form2Example17">
                            Email address
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            placeholder=" "
                            required
                          />
                          <label className="form-label" htmlFor="form2Example27">
                            Password
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            type="submit"
                            className="btn btn-dark btn-lg w-100"
                          >
                            Login
                          </button>
                        </div>

                        <div className="text-center text-md-start">
                          <a href="#!" className="small text-muted text-decoration-none">
                            Forgot password?
                          </a>
                          <p className="mb-4 mt-3" style={{ color: '#393f81' }}>
                            Don't have an account?{' '}
                           
                  <Link to="/register" >Register</Link>
                            
                          </p>
                          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
                            <a href="#!" className="small text-muted text-decoration-none">
                              Terms of use.
                            </a>
                            <a href="#!" className="small text-muted text-decoration-none">
                              Privacy policy
                            </a>
                          </div>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;