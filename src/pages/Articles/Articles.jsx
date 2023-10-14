import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Articles.module.scss";
import { ArrowLeftOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import filterBtn from "../../assets/button.svg";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { useNavigate } from "react-router-dom";
import sadSearch from "../../assets/sadSearch.svg";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  }

  useEffect(() => {
    axios
      .get("https://kunasyl-backender.org.kg/articles/", {
        headers: {
          accept: "application/json",
          "X-CSRFToken": "8FLoU1umuAUfzlYks08cE3PaXhlpnqT5BWz6V4V3cpQgShHACHD5AeNL2ADEA4gM",
        },
      })
      .then((response) => {
        setArticles(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredArticles = articles.filter(article => {
    return article.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className={styles.articles}>
      <h1>Quizum</h1>
      <header className={styles.articles__header}>
        <div className={styles.articles__header__titleBlock}>
          <ArrowLeftOutlined className={styles.articles__header__titleBlock__arrow} onClick={handleNavigate}/>
          <h2 className={styles.articles__header__title}>All articles</h2>
        </div>

        <div className={styles.articles__header__filter}>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search for articles"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img src={filterBtn} alt="filter-icon" />
        </div>
      </header>

      <section className={styles.articles__container}>
        {searchQuery ? 
          filteredArticles.length > 0 ? 
          filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              image={article.image}
              subject={`#${article.category_name}`}
            />
          )) : (
            <div className={styles.error}>
              <img src={sadSearch} alt="sad-search-icon" />
              <p>No results found for your search</p>
            </div>
          ) 
          : 
          articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              image={article.image}
              subject={`#${article.category_name}`}
            />
          ))
        }
      </section>
    </div>
  );
};


export default Articles;
