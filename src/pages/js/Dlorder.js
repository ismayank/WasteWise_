import React, { useState } from 'react';
import axios from 'axios';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Eddb.css';
import { Link } from "react-router-dom";
import { } from "react-router";
import elogo from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';


function Dlorder() {
  const [o_id, seto_id] = useState('');

  const handleDelete = () => {
    const url = 'http://localhost/orderdel.php';

    let fData = new FormData();
    fData.append('o_id', o_id);

    axios.post(url, fData)
      .then(response => alert(response.data))
      .catch(error => alert(error));
  };

  return (


    <><div className="signt1">
    
      <a href='/'> <img className='img7r' src={elogo} alt='logo1' /></a>
    </div><div>
        <main className="pbox9">

          <form>
            <h3 className="pick">Delete Details</h3>

            <div className='inputBox'>
              <label htmlFor="name">Enter the Order ID:</label>
              <input type="text" id="name" value={o_id} onChange={(e) => seto_id(e.target.value)}  />
            </div>

        
            <Link className='link' to ='/Dbmenu'><button type="submit" onClick={handleDelete} name="" style={{ alignContent: "center" }}>Delete Record</button></Link>

          </form>
        </main>

      </div></>




  );
}

export default Dlorder;
