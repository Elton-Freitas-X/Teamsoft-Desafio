import React from "react";
import './style.css'

const ItemView = ({productName, productDescription, imageFood, price, discount}) => {
  return (
    <section className="section__itemview">
      <img className="itemview__product" src="./hamburguer.png" alt="Imagem Hamburguer" />
      <h1 className="itemview__productname">{productName}</h1>
      <p className="itemview__productdescription">
        {productDescription}
      </p>
      <div className="itemview__item">
        <p className="itemview__prices">
          {discount} <s>{price}</s>
        </p>
      </div>
    </section>
  );
};

export default ItemView;
