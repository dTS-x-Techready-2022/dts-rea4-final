import styles from "./HomePage.module.css";
import { fetchTechNews } from "../../store/action";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.techNews);

  useEffect(() => {
    dispatch(fetchTechNews());
  }, []);

  useEffect(() => {
    console.log(newsList)
  })

  return (
    <div>
      <div>
        <h1>Hot Topics</h1>
        {/* <img src={newsList[0]?.thumb} alt="" /> */}
      </div>
    </div>
  );
};

export default HomePage;
