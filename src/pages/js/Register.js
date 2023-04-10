import React,{ useState } from 'react';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Register.css';
import {}from "react-router";
import {Link} from "react-router-dom";
import axios from 'axios';
import elogo from'/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';

function Register() {

    const [name, setname] = useState('');
    const [ph_no, setph_no] = useState('');
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    
    
    const handlechange = () =>
    {if (name.length !== 0 &&ph_no.length !== 0 ) {
        const url = 'http://localhost/add.php'
    
        let fData = new FormData();
        fData.append('name', name);
        fData.append('ph_no', ph_no);
        fData.append('pass', pass);
        fData.append('email', email);

        axios.post(url, fData)
            .then(response => alert(response.data))
            .catch(error => alert(error));
    }
    
    }
    
    return (

        <><div className="sign1">
          
            <a href='/'> <img className='img7r' src={elogo} alt='logo1'/></a>
        </div><div>
                <main className="box2">
                    <form>
                    <h3 className="pick">Register your Details</h3>
                        <div className="inputBox">
                            <label htmlFor="Name">Name</label>
                            <input type="text" value={name} onChange={(e) => setname(e.target.value)} name="Name" id="Name"
                                required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="phone"> Phone number</label>
                            <input type="phone" value={ph_no} onChange={(e) => setph_no(e.target.value)} name="phone no" id="phone no"

                                required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="Name">Email iD</label>
                            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} name="email" id="email"
                                required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="phone"> Password</label>
                            <input type="password" value={pass} onChange={(e) => setpass(e.target.value)} name="password" id="password"

                                required />
                        </div>
                        <Link classname="Link" to="/Cp1" ><button type="submit" onClick={handlechange} name="" style={{ alignContent: "center" }}>Register</button></Link>

                        <Link className="link" to="/User" style={{ float: "center" }}><span className="login-span">Already have an account</span></Link>
        
                    </form>
                </main>
            </div></>
        
    );
}

export default Register;

