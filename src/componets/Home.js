import React from "react";
import logo from './bqueen.png';



const Home = () => {
    return(
           
 <div className="App">
     <body className="wrapperhome">
    <header className="App-header">
      <h2 class="burgerqueen">Burger Queen</h2>
       <div class="circle">
        <img src={logo} className="App-logo" alt="logo" />
       </div>
    </header>
    </body>
 </div>


    );

}



export default Home;