import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home";


    const { signInUsingGoogle} = useAuth();

    const logInWithGoogle = () => {
        signInUsingGoogle(redirect_url, history)
    }
    return (
        <div className="register text-center bg-Light">
            <div>
                <div>
                    <h2 className='text-center'>Log In With</h2>
                </div>
                <button onClick={logInWithGoogle} className="btn btn-outline-secondary mx-5 fs-4 w-25 rounded-pill mt-2 text-start"><i className="fab fa-google"></i> Google Log In</button>
            </div>
            <div className="p-4">
                <Link to="/register" >Don't have an account?? signup now</Link>
            </div>
        </div>
    );
};

export default Login;