import React from 'react';
import '../public/css/Navbar.css';
import '../public/css/icomoon/style.css';

const Navbar = () => {
     const handleSubmit = (e) =>{
          console.log('me has clickeado');
          e.preventDefault();
     }
    return ( 
       <form className="navbar-container" onSubmit={handleSubmit}>
           <div className="ico-container">
                <span className="icon icon-search ico lupa"></span>
                <span className="icon icon-play3 rotate"></span>
           </div>
                <input type="search" name="text" className="navbar-input" />
                <div className="search-btn">     
                    <input type="submit" value="SEARCH" className="btn-submit "/>
                </div>
        </form>
     );
}
 
export default Navbar;