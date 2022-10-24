import { useEffect } from "react";
import styles from "./HeroNews.module.css";
import { useDispatch } from "react-redux";

const HeroNews = ({ hero }) => {
  return (
    <div className="me-3">
      <img
        src={hero?.articles[0]?.urlToImage}
        className={styles.heroImg}
        alt=""
      />
      <h1 className={styles.title}>{hero?.articles[0]?.title}</h1>
      <p>{hero?.articles[0]?.description}</p>
      <p>
        Source:{" "}
        <a href={hero?.articles[0]?.url} target="_blank">
          {hero?.articles[0]?.url}
        </a>
      </p>
    </div>
  );
};

export default HeroNews;
