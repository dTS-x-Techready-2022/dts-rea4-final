import React, { useEffect, useState } from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options3 } from '../components/CarouselOptions';
import ArticleService from '../services/article.service';

const Article = ({ article }) => {
   return (
      <div className="d-flex">
         <img src={article.urlToImage} style={{ width: 80, height: 80, objectFit: 'cover' }} alt={article.title} />
         <div className="d-flex align-items-center bg-light px-3" style={{ height: 80 }}>
            <a className="text-secondary font-weight-semi-bold text-break text-break-line-2" href>{article.title}</a>
         </div>
      </div>
   )
}

export default function TopNews() {

   const [articles, setArticles] = useState([])

   useEffect(() => {
      (async () => {
         try {
            const response = await ArticleService.getTopArticles()
            //console.log(response.data.articles);
            setArticles(response.data.articles)
         } catch (error) {
            console.log(error);
         }
      })();
   }, [])

   return (
      <OwlCarousel className="py-4 position-relative" {...options3}>
         {
            articles.length ?
               articles.slice(0, 5).map((article, i) => (
                  <Article article={article} key={i} />
               )) : null
         }
      </OwlCarousel>
   )
}
