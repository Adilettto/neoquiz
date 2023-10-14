import React from "react";
import styles from "./Quiz.module.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";
import cleopatra from "../../assets/cleopatra.png";
import MainBtn from "../../components/MainBtn/MainBtn";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const handleNavigateBtn = () => {
    navigate("/test")
  }

 
  return (
    <div className={styles.quiz}>
      <h1>Quizum</h1>
      <ArrowLeftOutlined onClick={handleNavigate} />
      <div className={styles.quiz__block}>
        <h2 className={styles.quiz__block}>Quiz "History"</h2>
        <img src={cleopatra} alt="cleopatra" />
        <article>
          Добро пожаловать на квиз по истории. Это увлекательное путешествие
          через века и эпохи, которые сформировали наш мир таким, каким мы его
          знаем сегодня. В этом квизе вы окунетесь в важнейшие события, великих
          личностей и ключевые моменты, которые оказали огромное влияние на
          развитие человечества.{" "}
        </article>
        <MainBtn text="Start quiz" onClick={handleNavigateBtn}/>
      </div>
    </div>
  );
};

export default Quiz;
