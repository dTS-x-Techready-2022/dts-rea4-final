import React from "react";

function NewsArticles(data) {

  const showArticle = data.data;  
  
  return (
    <div>
      <h1>{showArticle.title}</h1>
      <h3>{showArticle.description}</h3>
      <span>{showArticle.author}</span><br />
    </div>
  );
}

export default NewsArticles;
