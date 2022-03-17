import React, { useState } from "react";
import "./style.css";

const ItemAmount = ({ ingredients }) => {
  const [contador, setContador] = useState(0);
  const [addCarrinho, setAddCarrinho] = useState(0);

  return (
    <section className="main__section">
      {/*  {ingredients.map(i =>(
      <div>
        <h1>{i.group}</h1>
        {i.itens.map(item =>(
          <span>{item.nm_item}</span>
        ))}
      </div>
    ))}*/}
      {ingredients.map((ingredient) => (
        <div>
          <div className="totalize__ingredient">
            <h1>{ingredient.group}</h1>
            {ingredient.group === "Ingredientes Extras" ? (
              <p>Até {ingredient.max_itens} ingredientes.</p>
            ) : null}
          </div>
          {ingredient.type === "number" &&
            ingredient.itens.map((item) => (
              <div className="totalize__ingredient__options" key={item.id}>
                <h1>{item.nm_item}</h1>
                <div className="totalize__ingredient__subtract">
                  <div>
                    <button>-</button> 2 <button>+</button>
                  </div>
                </div>
                <p>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(item.vl_item)}
                </p>
              </div>
            ))}
          {ingredient.type === "bolean" && (
            <div className="elipse">
              <span>Sim</span>
              <input type="radio" name="opcao" value="Sim" />
              <span>Não</span>
              <input type="radio" name="opcao" value="Não" />
            </div>
          )}
        </div>
      ))}

      <div className="section__add">
        <div className="add__elipse">
          <div className="elipse__item">
            <span>Sim</span>
            <input  type="radio" name="opcao" value="Sim" />
          </div>
          <div className="elipse__item">
            <span>Não</span>
            <input  type="radio" name="opcao" value="Não" />
          </div>
        </div>
        <div className="add__btn">
          <div className="btn__item">
            <button onClick={() => setContador(contador - 1)}>-</button>{" "}
            {contador}{" "}
            <button onClick={() => setContador(contador + 1)}>+</button>
          </div>
          <button onClick={() => setAddCarrinho(addCarrinho + 1)}>
            Adicionar
          </button>
        </div>
      </div>
    </section>
  );
};

export default ItemAmount;
