import React,{ useState } from 'react';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Cp.css';
import {}from "react-router";
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Dom.css'
import {Link} from "react-router-dom";
import axios from 'axios';
import elogo from'/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';

function Dom() {

    
    return (

        <><div className="bg">
            <h1 className='name1'>Commercial waste</h1>
          
            <a href='/'> <img className='img1' src={elogo} alt='logo1'/></a>
            <h2 className='name2'>Information </h2>
        </div><div>
        <main className="dombox">

<form>
    <h3 className="pick">Enter the Weights(in Kilograms) </h3>

    <div className="inputBox">
        <label htmlFor="Name">Food Waste</label>
        <input type="text" name="Name" id="Name"
            required />
    </div>
    <div className="inputBox">
        <label htmlFor="Name">Plastic Waste</label>
        <input type="text" name="Name" id="Name"
            required />
    </div>
    <div className="inputBox">
        <label htmlFor="Name">Textile Waste</label>
        <input type="text" name="Name" id="Name"
            required />
    </div>





    <Link classname="Link1" to="/Pay" ><button type="submit" name="" style={{ alignContent: "center" }}>Save</button></Link>

    <Link className="link1" to="/" style={{ float: "center" }}><span className="login-span">Back to Home</span></Link>

</form>
</main>
              
            </div></>
        
    );
}

export default Dom;

