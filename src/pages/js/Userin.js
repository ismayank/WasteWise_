import React, { useState } from 'react';

import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Cp.css';
import elogo from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';
import { Link } from "react-router-dom";
import axios from 'axios';


function Userin() {
    const [name, setName] = useState('');
    const [phno, setPhno] = useState('');
    const [add, setAdd] = useState('');
   
    const [nameError, setNameError] = useState('');
    const [phnoError, setPhnoError] = useState('');
    const [addError, setAddError] = useState('');
  

    const handlechange = (e) => {
        e.preventDefault();

        // Reset previous error messages
        setNameError('');
        setPhnoError('');
        setAddError('');
        

        // Check if all fields are filled
        if (name.trim() === '') {
            setNameError('Please enter your name.');
            return;
        }

        if (phno.trim() === '') {
            setPhnoError('Please enter your phone number.');
            return;
        }

        if (add.trim() === '') {
            setAddError('Please enter your address.');
            return;
        }

      

        // Check phone number format
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phno)) {
            setPhnoError('Please enter a valid 10-digit phone number.');
            return;
        }


        const url = 'http://localhost/delivery.php';

        const fData = new FormData();
        fData.append('name', name);
        fData.append('phno', phno);
        fData.append('add', add);
        

        axios
            .post(url, fData)
            .then(response => {
                alert(response.data);
                // Navigate to "Cate" page
                window.location.href = "/Pay";
            })
            .catch(error => {
                alert(error);
                // Redirect to current page
                window.location.href = "/";
            });
    }


    return (

        <><div className="sign">
            {/* <img className='img6r' src={pickt} alt='logo1' /> */}
            <a href='/'> <img className='img7r' src={elogo} alt='logo1'/></a>
        </div><div>
                <main className="pbox">

                    <form>
                        <h3 className="pick">Delivery Details</h3>
                        
                        <div className="inputBox">
                            <label htmlFor="Name">Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="Name" id="Name"
                                required />
                        </div>
                        {nameError && <p className="error">{nameError}</p>}
                        <div className="inputBox">
                            <label htmlFor="phone"> Phone number</label>
                            <input type="phone" value={phno} onChange={(e) => setPhno(e.target.value)} name="phone no" id="phone no"

                                required />
                        </div>
                        {phnoError && <p className="error">{phnoError}</p>}
                        <div className="inputBox">
                            <label htmlFor="Address"> Address</label>
                            <input type="text" value={add} onChange={(e) => setAdd(e.target.value)} name="address" id="address"

                                required />
                        </div>
                        {addError && <p className="error">{addError}</p>}
                      

                        <Link className="Link" to="/Pay" ><button type="submit" onClick={handlechange} name="" style={{ alignContent: "center" }}>Pay</button></Link>

                        <Link className="link" to="/" style={{ float: "center" }}><span className="login-span">Back to Home</span></Link>

                    </form>
                </main>

            </div></>

    );
}

export default Userin;

































// import React, { useState } from 'react';
// import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Pickup.css';
// import { Link, useNavigate } from "react-router-dom";
// import elogo from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';
// import axios from 'axios';

// function Pickup() {
//   const navigate = useNavigate();

//   const [name, setName] = useState('');
//   const [phno, setPhno] = useState('');
//   const [add, setAdd] = useState('');
//   const [date, setDate] = useState('');
//   const [error, setError] = useState('');

//   const handlechange = () => {
//     if (name.trim() === '' || phno.trim() === '' || add.trim() === '' || date.trim() === '') {
//       setError('Please fill in all fields');
//       return;
//     }

//     if (!validatePhoneNumber(phno)) {
//       setError('Invalid phone number');
//       return;
//     }

//     const today = new Date().toISOString().split('T')[0];
//     if (date < today) {
//       setError('Invalid date');
//       return;
//     }

//     const url = 'http://localhost/pickadd.php';

//     let fData = new FormData();
//     fData.append('name', name);
//     fData.append('phno', phno);
//     fData.append('add', add);
//     fData.append('date', date);

//     axios
//       .post(url, fData)
//       .then(response => {
//         alert(response.data);
//         navigate('/Cate');
//       })
//       .catch(error => alert(error));
//   };
//   const validatePhoneNumber = (phoneNumber) => {
//     const phoneRegex = /^\d{10}$/;
//     return phoneRegex.test(phoneNumber);
//   }

