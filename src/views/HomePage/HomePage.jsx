import styles from "./HomePage.module.css";
import { fetchHeroNews, fetchNews, fetchSideNews } from "../../store/action";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroNews from "../../components/HeroNews/HeroNews";
import ItemNews from "../../components/ItemNews";
import SideNews from "../../components/SideNews/SideNews";

const HomePage = () => {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.news);
  const hero = useSelector((state) => state.heroNews);
  const side = useSelector((state) => state.sideNews);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(
      fetchNews(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=36de18a8eb2347dc9c007743ea82ecaa"
      )
    ).then(() => {
      setIsLoading(false);
    });

    dispatch(
      fetchHeroNews(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=36de18a8eb2347dc9c007743ea82ecaa&pageSize=1"
      )
    ).then(() => {
      setIsLoading(false);
    });

    dispatch(
      fetchSideNews(
        "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=36de18a8eb2347dc9c007743ea82ecaa&pageSize=4"
      )
    ).then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1 className="container mt-4">Tunggu ya</h1>;
  } else {
    return (
      <div className="container mt-4">
        <div className="d-flex flex-row justify-content-evenly">
          <HeroNews hero={hero} />
          <div className="ms-5">
            {isLoading === false ? (
              side?.articles?.map((news) => {
                return <SideNews news={news} />;
              })
            ) : (
              <h1 className="container mt-4">Tunggu ya</h1>
            )}
          </div>
        </div>

        <div className="d-flex flex-row flex-wrap justify-content-start">
          {isLoading === false ? (
            newsList?.articles?.map((news) => {
              return <ItemNews news={news} />;
            })
          ) : (
            <h1 className="container mt-4">Tunggu ya</h1>
          )}
        </div>
      </div>
    );
  }
};

export default HomePage;
