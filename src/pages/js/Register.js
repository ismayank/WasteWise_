import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import elogo from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Register.css'

function Register() {
    const [name, setName] = useState('');
    const [ph_no, setPhNo] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        if (name.trim() === '' || ph_no.trim() === '' || email.trim() === '' || pass.trim() === '') {
            setError('Please fill in all the fields.');
            return;
        }

        if (!validatePhoneNumber(ph_no)) {
            setError('Invalid phone number. Please enter a valid phone number.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Invalid email address. Please enter a valid email address.');
            return;
        }

        const url = 'http://localhost/add.php';

        const formData = new FormData();
        formData.append('name', name);
        formData.append('ph_no', ph_no);
        formData.append('pass', pass);
        formData.append('email', email);

        axios
            .post(url, formData)
            .then(response => {
                alert(response.data);
                navigate('/Cp1');
            })
            .catch(error => alert(error));
    };

    const validatePhoneNumber = phoneNumber => {
        const phoneNumberRegex = /^\d{10}$/;
        return phoneNumberRegex.test(phoneNumber);
    };

    const validateEmail = email => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <>
            <div className="sign1">
                <a href="/">
                    <img className="img7r" src={elogo} alt="logo1" />
                </a>
            </div>
            <div>
                <main className="box2">
                    <form>
                        <h3 className="pick">Register your Details</h3>
                        {error && <p className="error">{error}</p>}
                        <div className="inputBox">
                            <label htmlFor="Name">Name</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} name="Name" id="Name" required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="phone">Phone number</label>
                            <input type="tel" value={ph_no} onChange={e => setPhNo(e.target.value)} name="phone" id="phone" required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="email">Email iD</label>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" id="email" required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={pass} onChange={e => setPass(e.target.value)} name="password" id="password" required />
                        </div>


                        <Link className="Link" ><button type="submit" onClick={handleRegister} name="" style={{ alignContent: "center" }}>Save</button></Link>
                        <Link className="link" to="/Login" style={{ float: 'center' }}>
                            <span className="login-span">Already have an account</span>
                        </Link>
                    </form>
                </main>

            </div></>

    );
}

export default Register;

