import React, { useEffect, useState } from "react";
import styles from "./Quizes.module.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MainBtn from "../../components/MainBtn/MainBtn";

const Quizes = ({ image, title, category }) => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const handleNavigateBtn = () => {
    navigate("/quiz");
  };

  useEffect(() => {
    axios
      .get("https://kunasyl-backender.org.kg/quiz/", {
        headers: {
          accept: "application/json",
          "X-CSRFToken":
            "8FLoU1umuAUfzlYks08cE3PaXhlpnqT5BWz6V4V3cpQgShHACHD5AeNL2ADEA4gM",
        },
      })
      .then((response) => {
        setQuizzes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={styles.quizes}>
      <h1>Quizum</h1>
      <header className={styles.quizes__header}>
        <div className={styles.quizes__header__titleBlock}>
          <ArrowLeftOutlined
            onClick={handleNavigate}
            className={styles.quizes__header__titleBlock__arrow}
          />
          <h2 className={styles.quizes__header__title}>Quizes</h2>
        </div>
      </header>

      <Carousel
        autoplaySpeed={5000}
        effect="scrollx"
        autoplay
        className={styles.quizes__carousel}
      >
        {quizzes.map((quiz) => (
          <div key={quiz.id} className={styles.quizes__card}>
            <img src={quiz.image} alt="quiz" />
            <h2 className={styles.quizes__card__title}>{quiz.category_name}</h2>
            <p
              className={styles.quizes__card__category}
            >{` ${quiz.quantity} questions`}</p>
          </div>
        ))}
      </Carousel>
      <MainBtn onClick={handleNavigateBtn} text="Start quiz"/>
    </div>
  );
};

export default Quizes;
