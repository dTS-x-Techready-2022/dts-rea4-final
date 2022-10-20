import { useNavigate } from "react-router-dom";

const CardNews = ({ image, link, title, time }) => {
  const navigate = useNavigate();

  const openDetail = () => {
    navigate(link);
  };

  return (
    <div onClick={openDetail}>
      <h1>{title}</h1>
      <img src={image} />
      <p>{time}</p>
    </div>
  );
};

export default CardNews;
