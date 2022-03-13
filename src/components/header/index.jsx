import React from "react";
import { Logo, Account, Shopping, ArrowDown } from "../icons";
import "./style.css";

const Header = () => {
  return (
    <nav>
      <div class="logo">
        <Logo />
      </div>
      <div class="entrega">
        <div>
          <h5>Entrega:</h5>
          <p>R. Antonio Braoune, 222</p>
        </div>
        <ArrowDown />
      </div>
      <div class="input">
        <input
          type="text"
          placeholder="Busque por estabelecimento ou produtos"
        />
      </div>
      <div class="icons">
        <div>
          <Account />
          <a>Entrar</a>
        </div>
        <div>
          <Shopping />
          <a>Carrinho</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
