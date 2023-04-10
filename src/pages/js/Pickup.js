import React, { useState } from 'react';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Pickup.css';
import { Link } from "react-router-dom";
import { } from "react-router";
import pickt from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-Group.svg';
import elogo from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';
import axios from 'axios';

function Pickup() {

    const [name, setname] = useState('');
    const [phno, setphno] = useState('');
    const [add, setadd] = useState('');


    const handlechange = () => {
        if (name.length !== 0 && phno.length !== 0 && add.length !== 0) {
            const url = 'http://localhost/pickadd.php'

            let fData = new FormData();
            fData.append('name', name);
            fData.append('phno', phno);
            fData.append('add', add);



            axios.post(url, fData)
                .then(response => alert(response.data))
                .catch(error => alert(error));
        }

    }

    return (

        <><div className="sign">
            {/* <img className='img6r' src={pickt} alt='logo1' /> */}
            <a href='/'> <img className='img7r' src={elogo} alt='logo1'/></a>
        </div><div>
                <main className="pbox">

                    <form>
                        <h3 className="pick">Pickup Details</h3>

                        <div className="inputBox">
                            <label htmlFor="Name">Name</label>
                            <input type="text" value={name} onChange={(e) => setname(e.target.value)} name="Name" id="Name"
                                required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="phone"> Phone number</label>
                            <input type="phone" value={phno} onChange={(e) => setphno(e.target.value)} name="phone no" id="phone no"

                                required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="Address"> Address</label>
                            <input type="text" value={add} onChange={(e) => setadd(e.target.value)} name="address" id="address"

                                required />
                        </div>





                        <Link classname="Link" to="/Cp2" ><button type="submit" onClick={handlechange} name="" style={{ alignContent: "center" }}>Save</button></Link>

                        <Link className="link" to="/" style={{ float: "center" }}><span className="login-span">Back to Home</span></Link>

                    </form>
                </main>

            </div></>

    );
}

export default Pickup;

