import React from "react";
import { Logo, Account, Shopping, ArrowDown, ArrowLeft } from "../icons";
import TooolTip from "../tooltip";
import "./style.css";
import Tippy from "@tippyjs/react";

const Header = () => {
  return (
    <nav className="header__menu">
      <div className="header__logo">
        <ArrowLeft />
        <Logo />
      </div>
      <div className="header__delivery">
        <div>
          <h5 className="header__delivery__h5">Entrega:</h5>
          <p className="header__delivery__p">R. Antonio Braoune, 222</p>
        </div>
        <ArrowDown />
      </div>
      <div className="header__input">
        <input
          className="header__input__item"
          type="text"
          placeholder="Busque por estabelecimento ou produtos"
        />
      </div>
      <div className="header__icons">
        <div className="icons--account">
          <Account />
          <span>Entrar</span>
        </div>
        <div className="icons__shopping">
          <div className="shooping__item">
            <span className="shopping__qtdItens">1</span>
            <Shopping />

            <Tippy content={<TooolTip />}>
              <span>Carrinho</span>
            </Tippy>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
