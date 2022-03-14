import React from "react";
import { Logo, Account, Shopping, ArrowDown, ArrowLeft } from "../icons";
import ToolTip from "../tooltip";
import "./style.css";

const Header = () => {
  return (
    <nav>
      <div class="logo">
        <ArrowLeft />
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
          <ToolTip />
          <a>Carrinho</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
