import React from "react";
import styles from "./QuizCard.module.scss";

const QuizCard = ({ title, category, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="icon" />
      <h2 className={styles.card__title}>{title}</h2>
      <p className={styles.card__category}>{category}</p>
    </div>
  );
};

export default QuizCard;
