import React from 'react'

export default function ArticleShare() {
   return (
      <div className="pb-3">
         <div className="bg-light py-2 px-4 mb-3">
            <h3 className="m-0">Share Article</h3>
         </div>
         <div className="d-flex mb-3">
            <a href className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2" style={{ background: '#39569E' }}>
               <small className="fa fa-facebook-f mr-2" /><small>Share to facebook</small>
            </a>
            <a href className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2" style={{ background: '#52AAF4' }}>
               <small className="fa fa-twitter mr-2" /><small>Share to twitter</small>
            </a>
         </div>
         <div className="d-flex mb-3">
            <a href className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2" style={{ background: '#00a6d3' }}>
               <small className="fa fa-telegram mr-2" /><small>Share to telegram</small>
            </a>
            <a href className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2" style={{ background: '#00cd4e' }}>
               <small className="fa fa-whatsapp mr-2" /><small>Share to whatsapp</small>
            </a>
         </div>
      </div>
   )
}
