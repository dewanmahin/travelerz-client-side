import React from 'react';
import login_img from '../../images/login.png'
import gglImg from '../../images/gmail.png'
import './Login.css'
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const {logInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        logInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div className="login">
            <div className="container">
                <div className="login-box row align-items-center">
                    <div className="col-lg-6 col-12">
                        <img src={login_img} alt="" />
                    </div>
                    <div className="login-area col-lg-6 col-12">
                        <h2>For more access, Login</h2>
                        <div onClick={handleGoogleLogin} className="ggl-btn d-flex align-items-center justify-content-center mb-5"><img src={gglImg} alt="" /> <span className="ms-2">Login with Google</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;