const ItemNews = ({ news }) => {
  return (
    <div className="card me-4 my-2" style={{ width: "18rem" }}>
      <img src={news?.urlToImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{news?.title}</h5>
        <p className="card-text">{news?.description}</p>
        <a href={news?.url} className="btn btn-dark" target="_blank">
          Details
        </a>
      </div>
    </div>
  );
};

export default ItemNews;
