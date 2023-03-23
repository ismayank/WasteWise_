import React,{ useState } from 'react';
import './Pickup.css';
import {}from "react-router";
import {Link} from "react-router-dom";
import axios from 'axios';
import pickt from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pick1.jpeg';



function Pickup() {

const [name, setname] = useState('');
const [ph_no, setph_no] = useState('');


const handlechange = () =>
{if (name.length !== 0 &&ph_no.length !== 0 ) {
    const url = 'http://localhost/add.php'

    let fData = new FormData();
    fData.append('name', name);
    fData.append('ph_no', ph_no);
    

    axios.post(url, fData)
        .then(response => alert(response.data))
        .catch(error => alert(error));
}

}
    
    return (

        <><div className="sign">
            <img className='img1r' src={pickt} alt='logo1' />
        </div><div>
                <main className="box">

                    <form>
                    <h3 className="pick">Pickup Details</h3>

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
                        <button type="submit" onClick={handlechange} name="" style={{ alignContent: "center" }}>Save</button>

                        <Link className="link" to="/" style={{ float: "center" }}><span className="login-span">Back to Home</span></Link>
        
                    </form>
                </main>
                
            </div></>
        
    );
}

export default Pickup;

