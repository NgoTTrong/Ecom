import React from 'react'
import "./Register.css"
import { BsBackspace } from 'react-icons/bs'
const Register = (props) => {
    const {
        setLogin,
        setRegister
      } = props;
  return (
    <div className="signup-wrap">
         <section className="container-signup forms">
            <BsBackspace className="back-home" onClick={()=>{setLogin(false);setRegister(false)}}/>
            <div className="form signup">
                        <div className="form-content">
                            <header>Signup</header>
                            <form action="/">
                                <div className="field input-field">
                                    <input type="email" placeholder="Email" className="input"/>
                                </div>

                                <div className="field input-field">
                                    <input type="password" placeholder="Create password" className="password"/>
                                </div>

                                <div className="field input-field">
                                    <input type="password" placeholder="Confirm password" className="password"/>
                                    <i className='bx bx-hide eye-icon'></i>
                                </div>

                                <div className="field button-field">
                                    <button>Signup</button>
                                </div>
                            </form>

                            <div className="form-link">
                                <span>Already have an account? <a href="/#" className="link login-link" onClick={()=>{setLogin(true);setRegister(false)}}>Login</a></span>
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

export default Register
