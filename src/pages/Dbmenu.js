import React from 'react';
import {}from "react-router";
import './Home.css';


function Dbmenu()
{ return( 
<div class="jumbotron">
  <h1 class="display-4">1.User Database</h1>
  <p class="lead">Database users are granted access to read, insert, update, and delete specific objects that define a set of fields and business rules. These objects can also update one or more database tables. 
</p>
  <p>In the Users application, you use the Database Access action to create database users.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="/Regdb" role="button">Get User datatbase</a>
  </p>
</div>

    
);
}
export default Dbmenu