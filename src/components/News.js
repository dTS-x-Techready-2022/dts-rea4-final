import React from "react";

import NewsArticles from "./NewsArticles";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

function News(props) {
  const news = props.data;
  // console.log("from news.js", news);

  return (
    <Container maxWidth="lg">
      <div className="news-wrap">
        {news ? (
          news.map((news) => <NewsArticles data={news} key={news.url} />)
        ) : (
          <div className='skeleton'>
          <Box sx={{ width: 1200 }}>
            <Skeleton variant="rectangular" width={1000} height={118}/>
            <Skeleton width={1000} />
            <Skeleton width={1000} />
            <Skeleton width={1000} />
            <Skeleton animation="wave" width={1000}/>
            <Skeleton animation={false} width={1000}/>
            <Skeleton variant="rectangular" width={1000} height={118}/>
            <Skeleton width={1000} />
            <Skeleton width={1000} />
            <Skeleton width={1000} />
            <Skeleton animation="wave" width={1000}/>
            <Skeleton animation={false} width={1000}/>
          </Box>
          </div>
        )}
      </div>
    </Container>
  );
}

export default News;
