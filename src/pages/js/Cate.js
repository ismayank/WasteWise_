import React,{ useState } from 'react';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Cp.css';
import {}from "react-router";
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Cate.css'
import {Link} from "react-router-dom";
import axios from 'axios';
import elogo from'/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';

function Cate() {

    
    return (

        <><div className="bg">
            <h1 className='name1'>Categories</h1>
          
            <a href='/'> <img className='img1' src={elogo} alt='logo1'/></a>
            <a className='pc1' href="/Dom">Domestic Waste</a>
            <a className='pc1' href="/ind">Industrial Waste</a>
            <a className='pc1' href="/Comm">Commercial Waste</a>
            <a className='pc1' href="/Health">HealthCare Waste</a>
            <a className='pc1' href="/Agri">Agriculture Waste</a>

        </div><div>
              
            </div></>
        
    );
}

export default Cate;

