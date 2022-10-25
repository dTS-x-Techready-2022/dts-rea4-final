import React from 'react';
import { Link } from 'react-router-dom';
import IconFavorite from '../IconFavorite'

export default function Article({ article, classes }) {

   return (
      <div className={classes}>
         <div className="position-relative mb-3">
            <IconFavorite />
            <img className="img-fluid w-100" src={article.urlToImage} style={{ objectFit: 'cover', height: 230 }} alt="" />
            <div className="overlay position-relative bg-light">
               <div className="mb-2" style={{ fontSize: 14 }}>
                  <strong>{article.source.name}</strong>
                  {/* <a href>Technology</a>
                  <span className="px-1">/</span>
                  <span>January 01, 2045</span> */}
               </div>
               <Link to="/detail" className="h6 text-break text-break-line-3">{article.title}</Link>
               {/* <a className="h5 text-break text-break-line-2 " href={article.url}>{article.title}</a> */}
               <p className="m-0 text-break text-break-line-3">{article.content}</p>
            </div>
         </div>
      </div >
   )
}
