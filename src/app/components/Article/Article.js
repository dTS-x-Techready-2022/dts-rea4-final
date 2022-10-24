import React, { useCallback } from 'react';
import './Article.css';

const MoreLink = ({ url }) =>
  <a href={url} className="more-link">More</a>

const Article = ({article}) => {

  const handleClick = useCallback(url => {
    let win = window.open(url, '_blank');
    win.focus();
  });

  function truncateContent(content) {
    let indexToTruncateFrom = content.lastIndexOf('[');
    return content.substring(0, indexToTruncateFrom);
  }

  return (
    <div className="article-div">

      <div className="author-div">
        <h5 className="author-text">{article.source.name}</h5>
      </div>

      <div className="image-div">
        <img alt={article.title} src={article.urlToImage}
             className="link-point article-image"
             onClick={() => handleClick(article.url)}
        />
      </div>

      <div className="title-div">
        <h1 className="link-point title" onClick={() => handleClick(article.url)}>
          {article.title}
        </h1>
      </div>

      {article.description ?
        <div className="description-div">
          <p className="description">{article.description}</p>
        </div> : ''
      }

      <div className="content-div">
        {article.content ?
          <p className="content">
            {truncateContent(article.content)}
            <MoreLink url={article.url} />
          </p>
        : <button className="show-more-button" onClick={() => handleClick(article.url)}>
            <i className="fa fa-ellipsis-h"></i>
          </button>}
      </div>

    </div>
  );
}

export default Article;
