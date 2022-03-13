import React, { useEffect, useState } from "react";
import "./style.css";
import api from "../../services/api";

const ItemAmount = () => {
  

  return (
    <section className="ItemAmout">
      <div class="FirstLast">
        <h1>Adicionar Ingredientes</h1>
        <p>Até 8 ingredientes.</p>
      </div>

      <div class="opcoes">
        <h1>Queijo cheddar</h1>
        <div class="contador">
          <div>
            <span>-</span> 1 <span>+</span>
          </div>
        </div>
        <p>+ R$4,99</p>
      </div>

      <div class="opcoes">
        <h1>Cebola chispy</h1>
        <div class="contador">
          <div>
            <span>-</span> 1 <span>+</span>
          </div>
        </div>
        <p>+ R$3,50</p>
      </div>

      <div class="opcoes">
        <h1>Molho cheddar</h1>
        <div class="contador">
          <div>
            <span>-</span> 1 <span>+</span>
          </div>
        </div>
        <p>+ R$3,50</p>
      </div>

      <div class="opcoes">
        <h1>Molho cheddar</h1>
        <div class="contador">
          <div>
            <span>-</span> 1 <span>+</span>
          </div>
        </div>
        <p>+ R$3,50</p>
      </div>

      <div class="FirstLast">
        <h1>Precisa de Talher?</h1>
      </div>
      <div class="adicionar">
        <div>
          <span>-</span> 1 <span>+</span>
        </div>
        <div class="elipse">
          <span>Sim</span>
          <input type="radio" name="opcao" value="Sim" />
          <span>Não</span>
          <input type="radio" name="opcao" value="Não" />
        </div>
        <button>Adicionar</button>
      </div>
    </section>
  );
};

export default ItemAmount;
