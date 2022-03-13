import React from "react";
import './style.css'

const ItemView = ({productName, productDescription, imageFood, price, discount}) => {
  return (
    <section className="itemView">
      <img src="./hamburguer.png" alt="Imagem Hamburguer" />
      <h1>{productName}</h1>
      <p>
        {productDescription}
      </p>
      <div>
        <p>
          {discount} <s>{price}</s>
        </p>
      </div>
    </section>
  );
};

export default ItemView;
