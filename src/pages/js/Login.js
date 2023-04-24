import React,{ useState } from 'react';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/User.css';
import {}from "react-router";
import {Link} from "react-router-dom";
import axios from 'axios';
import elogo from'/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';

function Login() {

const [email, setemail] = useState('');
const [pass, setpass] = useState('');


const handlechange = () =>
{if (email.length !== 0 &&pass.length !==0 ) {
    const url = 'http://localhost/auth.php'

    let fData = new FormData();
    fData.append('email', email);
    fData.append('pass', pass);

    axios.post(url, fData)
      .then(response => {
        alert(response.data);
        setemail('');
        setpass('');
      })
      .catch(error => alert(error));
}





}
    
    return (

        <><div className="sign">
            <a href='/'> <img className='img7r' src={elogo} alt='logo1'/></a>
        </div><div>
                <main className="box1">
                    <form>
                    <h3 className="pick">Login your Details</h3>
                        <div className="inputBox">
                            <label htmlFor="Name">Email </label>
                            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} name="email" id="email"
                                required />
                        </div>
                    
                        <div className="inputBox">
                            <label htmlFor="phone"> Password</label>
                            <input type="password" value={pass} onChange={(e) => setpass(e.target.value)} name="password" id="password"

                                required />
                        </div>
                        <Link className='link' to ='/Dash'><button type="submit" onClick={handlechange} name="" style={{ alignContent: "center" }}>Login</button></Link>

                        <Link className="link" to="/Register" style={{ float: "center" }}><span className="login-span">Don't have an account?</span></Link>
        
                    </form>
                </main>
            </div></>
        
    );
}

export default Login;

