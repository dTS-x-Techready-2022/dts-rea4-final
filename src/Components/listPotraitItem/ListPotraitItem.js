import "./ListPotraitItem.scss";
import { useState } from "react";

export default function ListPotraitItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listPotraitItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://s4.bukalapak.com/img/4314209492/large/entertainment_2014_06_the_giver_movie_poster_main.jpg.webp"
        alt=""
      />
    
    </div>
  );
}