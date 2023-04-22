import React,{ useState } from 'react';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Cp.css';
import {}from "react-router";
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Dash.css'
import {Link} from "react-router-dom";
import axios from 'axios';
import elogo from'/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';

function Dash() {

    
    return (

        <><div className="bg">
            <h1 className='name1'>HI MAYANK !</h1>
          
            <a href='/'> <img className='img1' src={elogo} alt='logo1'/></a>
            <a className='pc' href="/Pickup">Pickup Schedule</a>
        </div><div>
              
            </div></>
        
    );
}

export default Dash;

