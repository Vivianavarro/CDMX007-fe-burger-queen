import React from "react";
import './Menu.css';
import reply from './reply.png';
import logo from './bqueen.png';


const Menu = () => {
    return(


<body>

  <div className="wrapper">

<nav className="navbar">
<img src={logo}  className="logomenu" alt="logomenu" />
MENÚ PRINCIPAL
</nav>

<div className="options">

<button className="add">Nuevo Pedido</button>
<button className="return"><img src={reply} height="70%" alt="return"/></button>
<button className="orders">Ordenes</button>
<button className="promo">Promociones</button>

</div>

<div className="central">
Desayuno - Menú fijo


</div>
 
 <aside className="sidebar">
 Artículo _ Cantidad

 <button className="check">Enviar</button>
 
 </aside>
 
  </div>


</body>
   

    );
}

export default Menu;