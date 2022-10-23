import React from 'react';
import NewsArticles from './NewsArticles';

function News(props) {

  const news = props.data;
  console.log('from news.js',news)
  return (
    <div>
      {news ? news.map((news) => <NewsArticles data={news} key={news.url}/>) : 'Loading'}
      </div>
  )
}

export default News;