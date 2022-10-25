import React, { useEffect, useState } from 'react'
import ArticleService from '../services/article.service'
import Article from './Article/Article'

export default function Latest() {

   const [articles, setArticles] = useState([])

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await ArticleService.getTopArticles()
            //console.log(response.data.articles);
            setArticles(response.data.articles)
         } catch (error) {
            console.log(error);
         }
      }
      fetchData()
   }, [])


   return (
      <div className="row">
         <div className="col-12">
            <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
               <h3 className="m-0">Latest News</h3>
            </div>
         </div>

         {
            articles.length ?
               articles.slice(0, 6).map((article, i) => (
                  article.author ?
                     <Article article={article} key={i} classes="col-lg-4" /> : null
               )) : null
         }

      </div>

   )
}
