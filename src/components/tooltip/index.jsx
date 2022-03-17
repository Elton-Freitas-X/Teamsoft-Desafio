import React from "react";
import "./style.css";

const ToolTip = () => {
  return (
    <>
      <div id="tooltip" className="bottom">
        <div className="tooltip__arrow" />
        <div className="tooltip__label">
          <h2>Adicionado com Sucesso</h2>
          <span>Oferta Cheddar Bacon</span>

          <p>Ingredients:</p>
          <ul>
            <li>1 Carne 250gr</li>
            <li>2 Queijo Cheddar</li>
            <li>1 Bacon</li>
            <li>Molho Especial</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ToolTip;
