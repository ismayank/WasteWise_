import React,{ useState } from 'react';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Track.css';
import {}from "react-router";
import {Link} from "react-router-dom";
import axios from 'axios';
import elogo from'/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';

function Track() {

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

        <><div className="bgt">
            <a href='/'> <img className='img7r' src={elogo} alt='logo1'/></a>
           
            
        </div><div>
                <main className="box1">
                    <form>
                    <h3 className="pick1">Track</h3>
                        <div className="inputBox1">
                            <label htmlFor="Name">Name</label>
                            <input type="text" value={name} onChange={(e) => setname(e.target.value)} name="Name" id="Name"
                                required />
                        </div>
                        <div className="inputBox1">
                            <label htmlFor="phone"> Phone number</label>
                            <input type="phone" value={ph_no} onChange={(e) => setph_no(e.target.value)} name="phone no" id="phone no"

                                required />
                        </div>
                        <button type="submit1" onClick={handlechange} name="" style={{ alignContent: "center" }}>Save</button>

                        <Link className="link" to="/" style={{ float: "center" }}><span className="login-span">Back to Home</span></Link>
        
                    </form>
                </main>
            </div></>
        
    );
}

export default Track;

