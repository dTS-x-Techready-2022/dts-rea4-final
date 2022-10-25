import React, { useEffect, useState } from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Row } from 'react-bootstrap';
import { options1 } from './CarouselOptions';
import Categories from './Categories';
import ArticleService from '../services/article.service';

const Article = ({ article }) => {
   return (
      <div className="position-relative overflow-hidden" style={{ height: 435 }}>
         <img className="img-fluid h-100" src={article.urlToImage} style={{ objectFit: 'cover' }} alt="" />
         <div className="overlay">
            <strong className="mb-1 text-danger">{article.source.name}</strong>
            <a className="h2 m-0 text-white font-weight-bold text-break text-break-line-2" href>{article.title}</a>
         </div>
      </div>
   )
}

export default function Hero() {

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
      <Row className='pt-3 pb-4'>
         <div className="col-lg-8 mb-3">
            <OwlCarousel className="position-relative" {...options1}>
               {
                  articles.length ?
                     articles.slice(0, 3).map((article, i) => (
                        <Article article={article} key={i} />
                     )) : null
               }
            </OwlCarousel>
         </div>

         <Categories />
      </Row>
   )
}
