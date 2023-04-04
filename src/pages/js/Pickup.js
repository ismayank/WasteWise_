import React from 'react';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Pickup.css';
import {Link} from "react-router-dom";
import pickt from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-Group.svg';
import elogo from'/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';


function Pickup() {

// const [name, setname] = useState('');
// const [ph_no, setph_no] = useState('');
// const [add, setadd] = useState('');


// const handlechange = () =>
// {if (name.length !== 0 &&ph_no.length !== 0 ) {
//     const url = 'http://localhost/add.php'

//     let fData = new FormData();
//     fData.append('name', name);
//     fData.append('ph_no', ph_no);

    

//     axios.post(url, fData)
//         .then(response => alert(response.data))
//         .catch(error => alert(error));
// }

// }
    
    return (

        <><div className="sign">
            <img className='img6r' src={pickt} alt='logo1' />
            <img className='img7r' src={elogo} alt='logo1'/>
        </div><div>
                <main className="box">

                    <form>
                    <h3 className="pick">Pickup Details</h3>

                        <div className="inputBox">
                            <label htmlFor="Name">Name</label>
                            <input type="text"  name="Name" id="Name"
                                required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="phone"> Phone number</label>
                            <input type="phone" name="phone no" id="phone no"

                                required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="Address"> address</label>
                            <input type="text" name="address" id="address"

                                required />
                        </div>





                        <button type="submit"  name="" style={{ alignContent: "center" }}>Save</button>

                        <Link className="link" to="/" style={{ float: "center" }}><span className="login-span">Back to Home</span></Link>
        
                    </form>
                </main>
                
            </div></>
        
    );
}

export default Pickup;

