import React,{ useState } from 'react';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Cp.css';
import {}from "react-router";
import {Link} from "react-router-dom";
import axios from 'axios';
import elogo from'/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';

function Cp2() {

    
    return (

        <><div className="sign1">
          
            <a href='/'> <img className='img7r' src={elogo} alt='logo1'/></a>
        </div><div>
                <main className="box4">
                <form>
                    <h3 className="pick2">Payment Successful.</h3>
                      

                        {/* <Link className="link2" to="/Track" style={{ float: "center" }}><span className="login-span">Track Now</span></Link>  */}
        
                    </form>
                
                </main>
            </div></>
        
    );
}

export default Cp2;

