import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Dashboard = () => {
   const { user: currentUser } = useSelector((state) => state.auth);

   if (!currentUser) {
      return <Navigate to="/login" />;
   }

   return (
      <>
         <div className="jumbotron dashboard mt-4" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/jumbo-dashboard.jpg')` }}>
            <h3>
               <strong className="text-white">Dashboard</strong>
            </h3>
         </div>
         <div className="row">
            <div className="col-12">
               <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                  <h3 className="m-0">Total Favorite News : 0</h3>
               </div>
            </div>
            <div className="col-lg-3 col-6">
               <div className="position-relative mb-4">
                  <img className="img-fluid w-100" src="https://unsplash.it/500/300/?image=12" style={{ objectFit: 'cover' }} alt="" />
                  <div className="overlay position-relative bg-light">
                     <div className="mb-2" style={{ fontSize: 14 }}>
                        <a href>Technology</a>
                        <span className="px-1">/</span>
                        <span>January 01, 2045</span>
                     </div>
                     <a className="h5" href>Est stet amet ipsum stet clita rebum duo</a>
                  </div>
               </div>
            </div>
            <div className="col-lg-3 col-6">
               <div className="position-relative mb-4">
                  <img className="img-fluid w-100" src="https://unsplash.it/500/300/?image=12" style={{ objectFit: 'cover' }} alt="" />
                  <div className="overlay position-relative bg-light">
                     <div className="mb-2" style={{ fontSize: 14 }}>
                        <a href>Technology</a>
                        <span className="px-1">/</span>
                        <span>January 01, 2045</span>
                     </div>
                     <a className="h5" href>Est stet amet ipsum stet clita rebum duo</a>
                  </div>
               </div>
            </div>
            <div className="col-lg-3 col-6">
               <div className="position-relative mb-4">
                  <img className="img-fluid w-100" src="https://unsplash.it/500/300/?image=12" style={{ objectFit: 'cover' }} alt="" />
                  <div className="overlay position-relative bg-light">
                     <div className="mb-2" style={{ fontSize: 14 }}>
                        <a href>Technology</a>
                        <span className="px-1">/</span>
                        <span>January 01, 2045</span>
                     </div>
                     <a className="h5" href>Est stet amet ipsum stet clita rebum duo</a>
                  </div>
               </div>
            </div>
            <div className="col-lg-3 col-6">
               <div className="position-relative mb-4">
                  <img className="img-fluid w-100" src="https://unsplash.it/500/300/?image=12" style={{ objectFit: 'cover' }} alt="" />
                  <div className="overlay position-relative bg-light">
                     <div className="mb-2" style={{ fontSize: 14 }}>
                        <a href>Technology</a>
                        <span className="px-1">/</span>
                        <span>January 01, 2045</span>
                     </div>
                     <a className="h5" href>Est stet amet ipsum stet clita rebum duo</a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Dashboard;
