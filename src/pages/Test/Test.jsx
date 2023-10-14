import React, { useState } from "react";
import styles from "./Test.module.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import MainBtn from "../../components/MainBtn/MainBtn";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }
  return (
    <div className={styles.test}>
      <h1>Quizum</h1>
      <header>
        <div className={styles.test__header__main}>
          <ArrowLeftOutlined onClick={handleBack}/>
          <p>Question 4 of 10</p>
        </div>
        <Progress
          percent={40}
          showInfo={false}
          strokeColor="#B9FFA0"
          className={styles.test__progressBar}
        />
      </header>

      <div className={styles.test__block}>
        <h2>
          Вопрос 4. Какое событие считается началом Французской революции?
        </h2>
        {[1, 2, 3, 4].map((answer, index) => (
          <div
            key={index}
            className={`${styles.test__block__answer} ${
              selectedAnswer === index ? styles.selected : ''
            }`}
            onClick={() => handleAnswerClick(index)}
          >
            Answer {index + 1}
          </div>
        ))}
      </div>
      <MainBtn text="Next question" />
    </div>
  );
};

export default Test;
