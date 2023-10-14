import React from "react";
import styles from "./Card.module.scss";

const Card = ({ title, category, image }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>{title}</h2>
      <p className={styles.card__category}>{category}</p>
      <img src={image} alt="icon" />
    </div>
  );
};

export default Card;
