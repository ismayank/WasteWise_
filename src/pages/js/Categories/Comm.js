import React,{ useState } from 'react';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Cp.css';
import {}from "react-router";
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Comm.css'
import {Link} from "react-router-dom";
import axios from 'axios';
import elogo from'/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';

function Comm() {

    const [biodegradable, setbiodegradable] = useState('0');
    const [chemical, setchemical] = useState('0');
    const [electrical, setelectrical] = useState('0');
    const [demolition, setdemolition] = useState('0');

    const handlechange = () => {
        if (biodegradable.length !== 0 && chemical.length !== 0 && electrical.length !== 0 && demolition.length != 0 ) {
            const url = 'http://localhost/commadd.php'

            let fData = new FormData();
            fData.append('biodegradable', biodegradable);
            fData.append('chemical', chemical);
            fData.append('electrical', electrical);
            fData.append('demolition', demolition);
            

            axios.post(url, fData)
                .then(response => alert(response.data))
                .catch(error => alert(error));
        }
    }

    
    return (

        <><div className="bg">
            <h1 className='name1'>Commercial waste</h1>
          
            <a href='/'> <img className='img1' src={elogo} alt='logo1'/></a>
            
        </div><div>
        <main className="dombox3">

<form>
    <h3 className="pick">Enter the Weights(in Kilograms) </h3>

    <div className="inputBox">
        <label htmlFor="Name">Biodegradable Waste</label>
        <input type="text" value={biodegradable} onChange={(e) => setbiodegradable(e.target.value)} name="Name" id="Name"
            required />
    </div>
    <div className="inputBox">
        <label htmlFor="Name">Chemical Waste</label>
        <input type="text" value={chemical} onChange={(e) => setchemical(e.target.value)} name="Name" id="Name"
            required />
    </div>
    <div className="inputBox">
        <label htmlFor="Name">Electrical Waste</label>
        <input type="text" value={electrical} onChange={(e) => setelectrical(e.target.value)} name="Name" id="Name"
            required />
    </div>
    <div className="inputBox">
        <label htmlFor="Name">Demolition Waste</label>
        <input type="text" value={demolition} onChange={(e) => setdemolition(e.target.value)} name="Name" id="Name"
            required />
    </div>
    





    <Link className="Link" to="/Pay" ><button type="submit" onClick={handlechange} name="" style={{ alignContent: "center" }}>Save</button></Link>

    <Link className="link1" to="/" style={{ float: "center" }}><span className="login-span">Back to Home</span></Link>

</form>
</main>
              
            </div></>
        
    );
}

export default Comm;

