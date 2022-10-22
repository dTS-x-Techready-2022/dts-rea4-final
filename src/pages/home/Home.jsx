import CardNews from "../../components/cardnews/CardNews";
import CardHotoTo from "../../components/cardnews/CardNews";
import { useState } from "react";
import CardHotTopic from "../../components/cardhottopic/CardHotTopic";

const Home = () => {
  const [hotTopic, setMockData] = useState([
    {
      img: "https://mui.com/static/images/cards/paella.jpg",
      title: "Contoh Title",
      link: "contoh link ke detail",
      time: "2 hour ago",
    }
   
  ]);

  return (
    <div id="hot-topic">
      {/* Home
      {mockData.map((item, index) => (
        <CardNews
          key={index}
          image={item.img}
          link={item.link}
          time={item.time}
          title={item.title}
        />
      ))} */
      
      hotTopic.map((item, index) => (
        <CardHotTopic image={item.img}/>
  ))}
      
    </div>
  );
};

export default Home;
