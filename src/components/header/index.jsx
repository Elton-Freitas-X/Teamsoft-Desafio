import React from "react";
import { Logo, Account, Shopping, ArrowDown, ArrowLeft } from "../icons";
import TooolTip from "../tooltip";
import "./style.css";
import Tippy from "@tippyjs/react";
import {Tooltip} from '@material-ui/core'

const Header = () => {
  const BlueOnGreenTooltip = ({
    tooltip: {
      color: "lightblue",
      backgroundColor: "green",
      width: "400px",
      position: "relative"
    }
  })

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
        <div className="icons--shopping">
          <div>
            <Shopping />
            <Tippy content={<TooolTip />}>
              <span>Carrinho</span>
            </Tippy>
          </div> 

          {/*
          <Shopping />
          <Tooltip
            content={<TooolTip style={BlueOnGreenTooltip}/>}
            placement="bottom"
            arrow
          >
            <span>Carrinho</span>
          </Tooltip> */}
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
