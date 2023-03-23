import React from 'react';
import {}from "react-router";
import './Home.css';
import mind from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/images-volunteer_hero.svg';


function Home()
{ return( 
<div className='home'>
    <h1 class ="he">WasteWise</h1>
       <div class="menu">

           <a href="/Pickup">Pickup Schedule</a>
           <a href="/Track"> Track </a>
           <a href="/Register"> Register</a>
           <a href="/Adminlogin">Admin Login</a>
           <a href="/AboutUs">About Us</a>
         
           <img className='img1r' src={mind} alt='logo1' />
           
       </div>
       <p1 class ="ds"> Recycling management is a crucial aspect of environmental sustainability.
         Recycling helps conserve natural resources, reduce greenhouse gas emissions, and decrease landfill waste.
          As a responsible citizen, it is important to make recycling a part of our daily routine.</p1>
          <p2 class ="ds">Our website offers a convenient garbage pickup scheduling and tracking feature. We understand that managing waste can be challenging, especially for busy households and businesses. That's why we've made it easy to schedule pickups and track your waste management activity.</p2>
</div>

);
}
export default Home