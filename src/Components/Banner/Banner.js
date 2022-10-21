import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.scss";

const Banner = () => {
  const [banner, setBanner] = useState([
    {
      title: "The Walking dead",
      desc: "The Walking Dead terjadi setelah permulaan sebuah kiamat zombi di seluruh dunia. Zombi-zombi yang biasa disebut walker tersebut",
      tags: ["Star World", "English", "Darama"],
      img: "https://www.theedgesusu.co.uk/wp-content/uploads/2015/10/the-walking-dead-season-6-cci-key-art-1200x-707-1-1078x516.jpg",
    },
    {
      title: "BLACKOUT",
      desc: "After waking up in a Mexican hospital with no memory, a man finds himself a cartel target and must fight to uncover the truth — fast.",
      tags: ["Josh Duhamel", "Abbie Cornish", "Omar Chaparro"],
      img: "https://i.ytimg.com/vi/QP3sxps6k0s/maxresdefault.jpg",
    },
  ]);
  return (
    <Carousel>
      {banner.map((item, index) => {
        return (
          <Carousel.Item key={index}>
             <section className="featured" style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundImage: `url(${item.img})`
              }}>
                  <div className="featured--vertical">
                      <div className="featured--horizontal">
                          <div className="featured--name">{item.title}</div>
                          <div className="featured--description">{item.desc}</div>
                      </div>
                  </div>
              </section>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Banner;
