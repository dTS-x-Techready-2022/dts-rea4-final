import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Newsletter() {

   const [value, setValue] = useState("");

   const handleSubmit = (event, value) => {
      event.preventDefault()
      if (value) {
         toast.success("Your email " + value + " has been saved!")
         setValue("");
      }
   }


   return (
      <>
         {/* <div className="mb-3 pb-3">
            <img className="img-fluid" src="https://unsplash.it/500/360/?image=5" alt="" />
         </div> */}
         <div className="pb-3">
            <div className="bg-light py-2 px-4 mb-3">
               <h3 className="m-0">Newsletter</h3>
            </div>
            <div className="bg-light text-center p-4 pb-5 mb-3">
               <p>Enter your email address to get latest news and amazing promotions.</p>
               <form>
                  <div className="input-group" style={{ width: '100%' }}>
                     <input type="email" className="form-control form-control-lg" placeholder="Your Email" required
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                     />
                     <div className="input-group-append">
                        <button className="btn btn-red" onClick={(event) => handleSubmit(event, value)}>Submit Email</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>

         <ToastContainer />
      </>
   )
}
