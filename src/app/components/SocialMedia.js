import React from 'react'

export default function SocialMedia() {
   return (
      <div className="pb-3">
         <div className="bg-light py-2 px-4 mb-3">
            <h3 className="m-0">Follow Us</h3>
         </div>
         <div className="d-flex mb-3">
            <a href className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2" style={{ background: '#39569E' }}>
               <small className="fa fa-facebook-f mr-2" /><small>Facebook</small>
            </a>
            <a href className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2" style={{ background: '#52AAF4' }}>
               <small className="fa fa-twitter mr-2" /><small>Twitter</small>
            </a>
         </div>
         <div className="d-flex mb-3">
            <a href className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2" style={{ background: '#C8359D' }}>
               <small className="fa fa-instagram mr-2" /><small>Instagram</small>
            </a>
            <a href className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2" style={{ background: '#DC472E' }}>
               <small className="fa fa-youtube mr-2" /><small>Youtube</small>
            </a>
         </div>
      </div>
   )
}
