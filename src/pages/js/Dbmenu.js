import React from 'react';
import { Link } from "react-router-dom";
import '../css/Dbmenu.css'
import elogo from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';

function DatabaseMenu() {
  return (
    
    <div className="dbmenu-container">
      <h1 className='ad'>ADMIN PAGE</h1>
      <Link to='/'>
        <img className='logo' src={elogo} alt='logo'/>
      </Link>
      <div className="menu-items">
        <div className="menu-item">
          <h2 className="menu-item-title">1. Signup Database</h2>
          <p className="menu-item-description">View user Database.</p>
          <Link className="menu-item-button" to="/Regdb">View Database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">2. Delete Database</h2>
          <p className="menu-item-description">Delete user Database</p>
          <Link className="menu-item-button" to="/Eddb">Delete  Database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">3. Update Database</h2>
          <p className="menu-item-description">Update User Database</p>
          <Link className="menu-item-button" to="/Updb">Update User database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">4. Pickup Database</h2>
          <p className="menu-item-description">Pickup Database</p>
          <Link className="menu-item-button" to="/Pickdb"> View Pickup user database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">5. Domestic Database</h2>
          <p className="menu-item-description">Domestic Database</p>
          <Link className="menu-item-button" to="/Domshow">Domestic user database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">6. Agriculture Database</h2>
          <p className="menu-item-description">Agriculture Database</p>
          <Link className="menu-item-button" to="/Agrishow">Agriculture user database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">7. Industrial Database</h2>
          <p className="menu-item-description">Industrial Database</p>
          <Link className="menu-item-button" to="/Indshow">Industrial user database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">8. Commercial Database</h2>
          <p className="menu-item-description">Commercial Database</p>
          <Link className="menu-item-button" to="/Commshow">Commercial user database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">9. HealthCare Database</h2>
          <p className="menu-item-description">HealthCare Database</p>
          <Link className="menu-item-button" to="/Healthshow">HealthCare user database</Link>
        </div>
      </div>
    </div>
  );
}

export default DatabaseMenu;
