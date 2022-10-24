import styles from "./SideNews.module.css";

const SideNews = ({ news }) => {
  return (
    <div className="card w-75 mb-2 ms-4">
      <div className="card-body">
        <h6 className="card-title title">{news?.title}</h6>
        <a href={news?.url} target="_blank" className="btn btn-dark">
          Details
        </a>
      </div>
    </div>
  );
};

export default SideNews;
