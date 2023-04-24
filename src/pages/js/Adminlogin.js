import React,{ useState } from 'react';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Adminlogin.css';
import {}from "react-router";
import {Link} from "react-router-dom";
import axios from 'axios';
import elogo from'/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';


function Adminlogin() {

const [email, setemail] = useState('');
const [ph_no, setph_no] = useState('');


const handlechange = () =>
{if (email.length !== 0 &&ph_no.length !== 0 ) {
    const url = ''

    let fData = new FormData();
    fData.append('email', email);
    fData.append('ph_no', ph_no);
    

    axios.post(url, fData)
        .then(response => alert(response.data))
        .catch(error => alert(error));
}

}
    
    return (

        <><div className="sign">
            <a href='/'> <img className='img7r' src={elogo} alt='logo1'/></a>
        </div><div>
                <main className="box3">
                    <form>
                    <h3 className="pick">Admin Login</h3>
                        <div className="inputBox">
                            <label htmlFor="Name">Email</label>
                            <input type="text" value={email} onChange={(e) => setemail(e.target.value)} name="email" id="email"
                                required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="phone"> Phone number</label>
                            <input type="phone" value={ph_no} onChange={(e) => setph_no(e.target.value)} name="phone no" id="phone no"

                                required />
                        </div>
                        <Link className="link1" to="/Dbmenu"><button type="submit" onClick={handlechange} name="" style={{ alignContent: "center" }}>Save</button></Link>  

                        <Link className="link1" to="/" style={{ float: "center" }}><span className="login-span">Back to Home</span></Link>
        
                    </form>
                </main>
            </div></>
        
    );
}

export default Adminlogin;

