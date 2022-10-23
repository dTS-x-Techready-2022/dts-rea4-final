import React from 'react';

import NewsArticles from './NewsArticles';
import Container from "@mui/material/Container";

function News(props) {

  const news = props.data;
  console.log('from news.js',news)
  return (
    <Container maxWidth="lg">
    <div className='news-wrap'>
      {news ? news.map((news) => <NewsArticles data={news} key={news.url}/>) : 'Loading'}
      </div>
      </Container>

  )
}

export default News;