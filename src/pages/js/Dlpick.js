import React, { useState } from 'react';
import axios from 'axios';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Eddb.css';
import { Link } from "react-router-dom";
import { } from "react-router";
import elogo from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';


function Dlpick() {
  const [pid, setpid] = useState('');

  const handleDelete = () => {
    const url = 'http://localhost/pickdel.php';

    let fData = new FormData();
    fData.append('pid', pid);

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
              <label htmlFor="name">pid:</label>
              <input type="text" id="name" value={pid} onChange={(e) => setpid(e.target.value)} />
            </div>

        
            <Link className='link' to ='/Dbmenu'><button type="submit" onClick={handleDelete} name="" style={{ alignContent: "center" }}>Delete Record</button></Link>

          </form>
        </main>

      </div></>




  );
}

export default Dlpick;
