import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.scss";
import { ArrowRightOutlined } from "@ant-design/icons";
import Card from "../../components/Card/Card";
import napoleon from "../../assets/napoleon.png";
import QuizCard from "../../components/QuizCard/QuizCard";
import cleopatra from "../../assets/cleopatra.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
  const [articles, setArticles] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios
      .get("https://kunasyl-backender.org.kg/main")
      .then((response) => {
        const data = response.data;
        setArticles(data.articles_data);
        setQuizzes(data.quizzes_data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>Quizum</h1>
      <div className={styles.home__header}>
        <Link to="/articles" className={styles.home__header__title}>
          Articles
        </Link>
        <ArrowRightOutlined className={styles.home__header__icon} />
      </div>
      <div className={styles.home__container}>
        {articles.map((article) => (
          <Card
          key={article.id}
          title={article.title}
          category={article.category_name}
          image={article.image}
          />

        ))}
      </div>

      <div className={styles.home__header}>
        <Link to="/quizes" className={styles.home__header__title}>Quizes</Link>
        <ArrowRightOutlined className={styles.home__header__icon} />
      </div>
      <div className={styles.home__container}>
          {quizzes.map((quiz) => (
            <QuizCard
            key={quiz.id}
            title={quiz.category_name}
            category={`${quiz.quantity} questions`}
            image={quiz.image}
            />
          ))}
      </div>
    </div>
  );
};

export default Homepage;
