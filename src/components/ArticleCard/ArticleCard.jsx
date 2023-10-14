import React from "react";
import styles from "./ArticleCard.module.scss";
import dotIcon from "../../assets/dot.svg";

const ArticleCard = ({ image, altName, title, subject }) => {
  return (
    <div className={styles.articleCard}>
      <h2>{title} </h2>
      <p className={styles.articleCard__category}>
        {subject} <img src={dotIcon} alt="dot-icon" />
        15 minutes
      </p>
      <img src={image} alt={altName} className={styles.articleCard__image} />
    </div>
  );
};

export default ArticleCard;
