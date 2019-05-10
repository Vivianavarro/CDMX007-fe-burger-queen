import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
 return(

     <div className="exit">

         <NavLink to="/Menu">Entrar</NavLink>
         
         <NavLink to="/">Salir</NavLink>
     
     </div>
 );
};

export default Navigation;