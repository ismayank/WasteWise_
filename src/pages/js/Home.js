import React from 'react';
import { } from "react-router";
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Home.css';
import mind from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-volunteer_hero.svg';
import aim from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/aim.png';
import leaf from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/leaf.png';
import road from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/road.svg';

function Home() {
    return (
        <div className='home'>
            <h1 class="he">WasteWise</h1>
            <div class="menu">

                <a href="/Pickup">Pickup Schedule</a>
                <a href="/Track"> Track </a>
                <a href="/Register"> Register</a>
                <a href="/Adminlogin">Admin Login</a>
                <a href="/AboutUs">About Us</a>

                <img className='img1r' src={mind} alt='logo1' />
                <img className='img2r' src={aim} alt='logo1' />
                <img className='img3r' src={leaf} alt='logo1' />
                <img className='img4r' src={road} alt='logo1' />
           
            </div>
            <p1 class="ds"> Recycling management is a crucial aspect of environmental sustainability.
                Recycling helps conserve natural resources, reduce greenhouse gas emissions, and decrease landfill waste.
                As a responsible citizen, it is important to make recycling a part of our daily routine.</p1>
            <p2 class="ds">Our website offers a convenient garbage pickup scheduling and tracking feature. 
            We understand that managing waste can be challenging, especially for busy households and businesses. 
            That's why we've made it easy to schedule pickups and track your waste management activity.</p2>
            <p3 class="aim">The aim of this project is to establish an integrated waste management system that effectively collects</p3>
            <p4 class="aim2"> separates, treats, and disposes of garbage waste from various sectors in an environmentally sustainable manner.</p4> 
            
        </div>

    );
}
export default Home