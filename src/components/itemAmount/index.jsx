import React, { useState } from "react";
import "./style.css";

const ItemAmount = ({ ingredients }) => {
  console.log(ingredients);
  const [contador, setContador] = useState(0);

  return (
    <section className="ItemAmout">
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
          <div class="totalize-ingredient">
            <h1>{ingredient.group}</h1>
            {ingredient.group === "Ingredientes Extras" ? (
              <p>Até {ingredient.max_itens} ingredientes.</p>
            ) : null}
          </div>
          {ingredient.type === "number" &&
            ingredient.itens.map((item) => (
              <div class="opcoes" key={item.id}>
                <h1>{item.nm_item}</h1>
                <div class="contador">
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
            <div class="elipse">
              <span>Sim</span>
              <input type="radio" name="opcao" value="Sim" />
              <span>Não</span>
              <input type="radio" name="opcao" value="Não" />
            </div>
          )}
        </div>
      ))}

      <div class="adicionar">
        <div class="elipse">
          <div>
            <span>Sim</span>
            <input type="radio" name="opcao" value="Sim" />
          </div>
          <div>
            <span>Não</span>
            <input type="radio" name="opcao" value="Não" />
          </div>
        </div>
        <div className="buttom">
          <div>
            <button onClick={() => setContador(contador - 1)}>-</button>{" "}
            {contador}{" "}
            <button onClick={() => setContador(contador + 1)}>+</button>
          </div>
          <button>Adicionar</button>
        </div>
      </div>
    </section>
  );
};

export default ItemAmount;
