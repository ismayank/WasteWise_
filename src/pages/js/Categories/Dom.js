import React,{ useState } from 'react';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Cp.css';
import {}from "react-router";
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Dom.css'
import {Link} from "react-router-dom";
import axios from 'axios';
import elogo from'/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';

function Dom() {
    
    const [food, setfood] = useState('');
    const [plastic, setplastic] = useState('');
    const [textile, settextile] = useState('');
    const [glass, setglass] = useState('');
    const [metal, setmetal] = useState('');
    const [paper, setpaper] = useState('');


    const handlechange = () => {
        if (food.length !== 0 && plastic.length !== 0 && textile.length !== 0 && glass.length != 0 && metal.length !=0 && paper.length !=0) {
            const url = 'http://localhost/dmsadd.php'

            let fData = new FormData();
            fData.append('food', food);
            fData.append('plastic', plastic);
            fData.append('textile', textile);
            fData.append('glass', glass);
            fData.append('metal', metal);
            fData.append('paper', paper);



            axios.post(url, fData)
                .then(response => alert(response.data))
                .catch(error => alert(error));
        }

    }


    
    return (

        <><div className="bg">
            <h1 className='name1'>Domestic waste</h1>
          
            <a href='/'> <img className='img1' src={elogo} alt='logo1'/></a>
            <h2 className='name2'>Information </h2>
        </div><div>
        <main className="dombox">

<form>
    <h3 className="pick">Enter the Weights(in Kilograms) </h3>

    <div className="inputBox">
        <label htmlFor="Name">Food Waste</label>
        <input type="text" value={food} onChange={(e) => setfood(e.target.value)} name="Name" id="Name"
            required />
    </div>
    <div className="inputBox">
        <label htmlFor="Name">Plastic Waste</label>
        <input type="text" value={plastic} onChange={(e) => setplastic(e.target.value)} name="Name" id="Name"
            required />
    </div>
    <div className="inputBox">
        <label htmlFor="Name">Textile Waste</label>
        <input type="text" value={textile} onChange={(e) => settextile(e.target.value)} name="Name" id="Name"
            required />
    </div>
    <div className="inputBox">
        <label htmlFor="Name">Glass Waste</label>
        <input type="text" value={glass} onChange={(e) => setglass(e.target.value)} name="Name" id="Name"
            required />
    </div>
    <div className="inputBox">
        <label htmlFor="Name">Metal Waste</label>
        <input type="text" value={metal} onChange={(e) => setmetal(e.target.value)} name="Name" id="Name"
            required />
     </div>
     <div className="inputBox">
        <label htmlFor="Name">Paper Waste</label>
        <input type="text" value={paper} onChange={(e) => setpaper(e.target.value)} name="Name" id="Name"
            required />
      </div>             





    <Link classname="Link1" to="/Pay" ><button type="submit" onClick={handlechange}  name="" style={{ alignContent: "center" }}>Save</button></Link>

    <Link className="link1" to="/" style={{ float: "center" }}><span className="login-span">Back to Home</span></Link>

</form>
</main>
              
            </div></>
        
    );
}

export default Dom;

