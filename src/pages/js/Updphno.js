import React, { useState } from 'react';
import axios from 'axios';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Updb.css';
import { Link } from "react-router-dom";
import { } from "react-router";
import elogo from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';// Import the CSS file for styling

function Updphno() {
  const [ph_no, setph_no] = useState('');
  const [email, setEmail] = useState('');

  const handleUpdate = () => {
    const url = 'http://localhost/updatephno.php';

    let formData = new FormData();
    formData.append('ph_no', ph_no);
    formData.append('email', email);

    axios.post(url, formData)
      .then(response => alert(response.data))
      .catch(error => alert(error));
  };

  return (


    <><div className="signt1">
    
      <a href='/'> <img className='img7r' src={elogo} alt='logo1' /></a>
    </div><div>
        <main className="pbox2">

          <form>
            <h3 className="pick">Update Details</h3>
            <div className="inputBox">
                            <label htmlFor="Name">Email iD</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email"
                                required />
                        </div>

            <div className='inputBox'>
              <label htmlFor="name">New ph_noword:</label>
              <input type="text" id="name" value={ph_no} onChange={(e) => setph_no(e.target.value)} />
            </div>

           
        
            <Link className='link' to ='/Dbmenu'><button type="submit" onClick={handleUpdate} name="" style={{ alignContent: "center" }}>Update Record</button></Link>

          </form>
        </main>

      </div></>


   
  );
}

export default Updphno;