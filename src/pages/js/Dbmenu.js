import React from 'react';
import {}from "react-router";
import './Home';


function Dbmenu()
{ return( 
<div class="jumbotron">
  <h1 class="display-4">1.Signup Database</h1>
  <p class="lead">Database users are granted access to read, insert, update, and delete specific objects that define a set of fields and business rules. These objects can also update one or more database tables. 
</p>
  <p>In the Users application, you use the Database Access action to create database users.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="/Regdb" role="button">Show User datatbase</a>
  </p>
  <h1 class="display-4">2.Delete Database</h1>
  <p class ="lead1">Edit Database </p>
  <a class="btn btn-primary btn-lg" href="/Eddb" role="button">delete User database</a>
  <h1 class="display-4">3.Update Database</h1>
  <p class ="lead1">Update Database </p>
  <a class="btn btn-primary btn-lg" href="/Updb" role="button">Update User database</a>
</div>


    
);
}
export default Dbmenu