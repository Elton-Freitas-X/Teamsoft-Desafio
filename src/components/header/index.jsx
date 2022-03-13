import React from "react";
import "./style.css";

const Header = () => {
  return (
    <nav>
      <div class="logo">
        {/* <img src="./img/Deliverize Logo 1.png" />
                <img src="./img/Deliverize Logo 1 (1).png" /> */}
      </div>
      <div class="entrega">
        <h5>Entrega:</h5>
        <p>R. Antonio Braoune, 222</p>
      </div>
      <div class="input">
        <input
          type="text"
          placeholder="Busque por estabelecimento ou produtos"
        />
      </div>
      <div class="icons">
        <div>
          <i class="far fa-user-circle"></i>
          <a>Entrar</a>
        </div>
        <div>
          <i class="fas fa-shopping-cart"></i>
          <a>Carrinho</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
