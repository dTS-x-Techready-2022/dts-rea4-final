import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function IconFavorite() {

   const { user: currentUser } = useSelector((state) => state.auth);
   const [isFavorite, setFavorite] = useState(false);

   const handleFavorite = () => {
      if (!isFavorite) {
         setFavorite(true);
         toast.success("Article saved to favorite!")
      } else {
         setFavorite(false);
         toast.success("Article deleted from favorite!")
      }
   }


   if (!currentUser) {
      return null;
   } else {
      return (
         <>
            <button type="button" className="btn btn-danger btn-sm" style={{ position: 'absolute', right: 0 }} onClick={handleFavorite}>
               <i class={isFavorite ? "fa fa-heart" : "fa fa-heart-o"} aria-hidden="true"></i>
            </button>
            <ToastContainer />
         </>
      )
   }



}
