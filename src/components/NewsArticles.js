import React from "react";
import { useState } from "react";

// const { JSDOM } = require('jsdom');

function NewsArticles(data) {
  const showArticle = data.data;

  console.log('news article', showArticle.url);
  
//   let dom = new JSDOM()

  return (
    <div className="news">
      <h1>{showArticle.title}</h1>
      <span className="author">{showArticle.author} </span>
      <span>[{showArticle.publishedAt}]</span>
      <h4>{showArticle.content}</h4>
      <br />
    </div>
  );
}

export default NewsArticles;
