import React,{ useState } from 'react';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Cp.css';
import {}from "react-router";
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Cate.css'
import elogo from'/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';

function Cate() {

    
    return (

        <><div className="bg">
            <h1 className='name1'>Payment Page</h1>
          
            <a href='/'> <img className='img1' src={elogo} alt='logo1'/></a>

            <h1 className='tp'> Total payment to be done</h1>
            <a className='pc1' href="/Cp2"> Pay through Card</a>
            <a className='pc1' href="/Cp2"> Pay through UPI</a>
            <a className='pc1' href="/Cp2"> Pay through Netbanking</a>
            <a className='pc1' href="/Cp2"> Pay through COD</a>
            <a className='pc1' href="/Cp2"> Pay Later</a>

        </div><div>

              
            </div>


            
            
            
            </>
        
    );
}

export default Cate;