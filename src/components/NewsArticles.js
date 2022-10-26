import React from "react";
import moment from 'moment';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider } from "@mui/material";


// const { JSDOM } = require('jsdom');

function NewsArticles(data) {
  const showArticle = data.data;
  
  // console.log("news article", showArticle.url);

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getTime = showArticle.publishedAt;

  //   let dom = new JSDOM()

  return (
    <Card sx={{ maxWidth: 345 }} className="news-card" onClick={() => openInNewTab(showArticle.url)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={showArticle.urlToImage}
          alt='No Images'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="news-title"
          >
            {showArticle.title}
          </Typography>
          <Divider />
          <br />
          <Typography
            gutterBottom
            variant="h7"
            component="div"
            className="news-author"
          >
            Penulis : {showArticle.author}<br />
            Rilis : {moment(getTime).format('LLL')}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="news-content">
            {showArticle.content}
          </Typography>
          <Typography
            gutterBottom
            variant="h7"
            component="div"
            className="news-source"
          >
            <br />
            Sumber : {showArticle.source.name}<br />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NewsArticles;
