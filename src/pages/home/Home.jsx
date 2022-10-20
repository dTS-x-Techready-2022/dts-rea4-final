import CardNews from "../../components/cardnews/CardNews";
import { useState } from "react";

const Home = () => {
  const [mockData, setMockData] = useState([
    {
      img: "https://mui.com/static/images/cards/paella.jpg",
      title: "Contoh Title",
      link: "contoh link ke detail",
      time: "2 hour ago",
    },
    {
      img: "https://mui.com/static/images/cards/paella.jpg",
      title: "Contoh Title",
      link: "contoh link ke detail",
      time: "2 hour ago",
    },
    {
      img: "https://mui.com/static/images/cards/paella.jpg",
      title: "Contoh Title",
      link: "contoh link ke detail",
      time: "2 hour ago",
    },
    {
      img: "https://mui.com/static/images/cards/paella.jpg",
      title: "Contoh Title",
      link: "contoh link ke detail",
      time: "2 hour ago",
    },
  ]);

  return (
    <div>
      Home
      {/* {mockData.map((item, index) => (
        <CardNews
          key={index}
          image={item.img}
          link={item.link}
          time={item.time}
          title={item.title}
        />
      ))} */}
    </div>
  );
};

export default Home;
