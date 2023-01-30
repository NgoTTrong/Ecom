import React from 'react'
import "./Login.css"
import { BsBackspace } from 'react-icons/bs'

const Login = (props) => {
    const {
        setLogin,
        setRegister
      } = props;
  return (
    <div className="login-wrap">
        <BsBackspace className="back-home" onClick={()=>{setLogin(false);setRegister(false)}}/>
        <section className="container-login forms">
            <div className="form login">
                <div className="form-content">
                    <header>Login</header>
                    <form action="/">
                        <div className="field input-field">
                            <input type="email" placeholder="Email" className="input"/>
                        </div>

                        <div className="field input-field">
                            <input type="password" placeholder="Password" className="password"/>
                            <i className='bx bx-hide eye-icon'></i>
                        </div>

                        <div className="form-link">
                            <a href="/" className="forgot-pass">Forgot password?</a>
                        </div>

                        <div className="field button-field">
                            <button>Login</button>
                        </div>
                    </form>

                    <div className="form-link">
                        <span>Don't have an account? <a href="/#" className="link signup-link" onClick={()=>{setLogin(false);setRegister(true)}}>Signup</a></span>
                    </div>
                </div>

                <div className="line"></div>

                <div className="media-options">
                    <a href="/" className="field facebook">
                        <span>Login with Facebook</span>
                    </a>
                </div>

                <div className="media-options">
                    <a href="/" className="field google">
                        <span>Login with Google</span>
                    </a>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Login
