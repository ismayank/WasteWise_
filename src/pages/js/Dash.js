import React, { useState } from 'react';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Cp.css';
import { } from "react-router";
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Dash.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import elogo from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';

function Dash() {


    return (

        <><div className="bg">
            <h1 className='name1'>HI USER !</h1>
            <p className='ds1'>Welcome to our comprehensive website where you can easily track your garbage collection,
             schedule pickups, and explore our diverse range of products on our dedicated products page.</p>

            <a href='/'> <img className='imgl' src={elogo} alt='logo1' /></a>
            <a className='pc' href="/Pickup">Pickup Schedule</a>
            <p className='ds1' >
                Experience hassle-free waste collection with our convenient doorstep pickup service. 
                We understand the importance of proper waste disposal, so we've made it easier than ever to schedule a pickup.
                 Simply book a pickup slot on our website, and our dedicated team will arrive at your doorstep at the scheduled time. 
                 Whether it's recyclable materials, electronic waste, or household items, we handle it all. 
                 Our trained professionals ensure safe and eco-friendly disposal methods, 
                 so you can have peace of mind knowing your waste is being managed responsibly.
                  Don't let waste pile-up let us take care of it for you. Join us in creating a cleaner and greener future. 
                  Schedule your pickup today!</p>

                  <a className='pc1' href="/Order"> Products</a>

                  <p className='ds1' >
                  Embrace sustainability with our diverse range of eco-friendly products, thoughtfully crafted from recycled materials. From fashion-forward accessories to functional home essentials, each item combines style and conscience. Make a conscious choice for the planet while enjoying unique designs and join us in making a lasting impact through sustainable shopping. Explore our collection and discover the joy of eco-conscious living today.
                  </p>
                  <a className='pc1' href="/Track"> Track</a>

                  <p className='ds1'>


                  Stay informed and track your order every step of the way with our seamless tracking system. With just a few clicks, you can easily monitor the progress of your package from our warehouse to your doorstep. Our user-friendly interface provides real-time updates, ensuring you have complete visibility and peace of mind. Experience hassle-free tracking and never wonder about the whereabouts of your order again. Simply log in to our website and track your order effortlessly. Your satisfaction is our priority, and we strive to keep you informed throughout the entire delivery process.
                  </p>
            
        </div><div>

            </div></>

    );
}

export default Dash;

