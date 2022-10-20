import React from 'react'

export default function Newsletter() {
   return (
      <>
         <div className="mb-3 pb-3">
            <img className="img-fluid" src="https://unsplash.it/500/360/?image=5" alt="" />
         </div>
         <div className="pb-3">
            <div className="bg-light py-2 px-4 mb-3">
               <h3 className="m-0">Newsletter</h3>
            </div>
            <div className="bg-light text-center p-4 mb-3">
               <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
               <div className="input-group" style={{ width: '100%' }}>
                  <input type="text" className="form-control form-control-lg" placeholder="Your Email" />
                  <div className="input-group-append">
                     <button className="btn btn-red">Sign Up</button>
                  </div>
               </div>
               <small>Sit eirmod nonumy kasd eirmod</small>
            </div>
         </div>


      </>
   )
}
