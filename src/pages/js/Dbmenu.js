import React from 'react';
import {}from "react-router";
import './Home';
import elogo from'/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Dbmenu.css';


function Dbmenu()
{ return( 
<div class="jumbotron">
<a href='/'> <img className='imgr7' src={elogo} alt='logo1'/></a>
  <h1 class="display-4">1.Signup Database</h1>
  <p class="lead">In the Users application, you use the Database Access action to create database users.</p>
  <p class="lead">
    <a class="btn btn-success btn-lg" href="/Regdb" role="button">Show User datatbase</a>
  </p>
  <h1 class="display-4">2.Delete Database</h1>
  <p class ="lead1">Edit Database </p>
  <a class="btn btn-success btn-lg" href="/Eddb" role="button">delete User database</a>
  <h1 class="display-4">3.Update Database</h1>
  <p class ="lead1">Update Database </p>
  <a class="btn btn-success btn-lg" href="/Updb" role="button">Update User database</a>
  <h1 class="display-4">4.Pickup Database</h1>
  <p class ="lead1">Pickup Database </p>
  <a class="btn btn-success btn-lg" href="/Pickdb" role="button">Pickup user database</a>
</div>


    
);
}
export default Dbmenu