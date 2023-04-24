import React,{ useState } from 'react';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/User.css';
import {}from "react-router";
import {Link} from "react-router-dom";
import axios from 'axios';
import elogo from'/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';

function Userin() {

    const [name, setname] = useState('');
    const [phno, setphno] = useState('');
    const [add, setadd] = useState('');
    const [date, setdate] = useState('');


    const handlechange = () => {
        if (name.length !== 0 && phno.length !== 0 && add.length !== 0 && date.length != 0) {
            const url = 'http://localhost/deladd.php'

            let fData = new FormData();
            fData.append('name', name);
            fData.append('phno', phno);
            fData.append('add', add);
            fData.append('date', date);



            axios.post(url, fData)
                .then(response => alert(response.data))
                .catch(error => alert(error));
        }

    }

    return (

        <><div className="sign">
            {/* <img className='img6r' src={pickt} alt='logo1' /> */}
            <a href='/'> <img className='img7r' src={elogo} alt='logo1'/></a>
        </div><div>
                <main className="pbox">

                    <form>
                        <h3 className="pick">Enter Details for the delivery</h3>

                        <div className="inputBox">
                            <label htmlFor="Name">Name</label>
                            <input type="text" value={name} onChange={(e) => setname(e.target.value)} name="Name" id="Name"
                                required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="phone"> Phone number</label>
                            <input type="phone" value={phno} onChange={(e) => setphno(e.target.value)} name="phone no" id="phone no"

                                required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="Address"> Address</label>
                            <input type="text" value={add} onChange={(e) => setadd(e.target.value)} name="address" id="address"

                                required />
                        </div>
                        {/* <div className="inputBox">
                            <label htmlFor="date"> Date</label>
                            <input type="date" value={date} onChange={(e) => setdate(e.target.value)} name="date" id="date"

                                required />
                        </div> */}


                     







                        <Link classname="Link" to="/Pay" ><button type="submit" onClick={handlechange} name="" style={{ alignContent: "center" }}>Pay</button></Link>

                        {/* <Link className="link" to="/" style={{ float: "center" }}><span className="login-span">Back to Home</span></Link> */}

                    </form>
                </main>

            </div></>
    );

}

export default Userin;

