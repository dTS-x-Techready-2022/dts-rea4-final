import React, { useCallback } from "react";
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/auth";

const Profile = () => {
   const { user: currentUser } = useSelector((state) => state.auth);

   const dispatch = useDispatch();
   const handleLogout = useCallback(() => {
      dispatch(logout());
   }, [dispatch]);

   if (!currentUser) {
      return <Navigate to="/login" />;
   }

   return (
      <>
         <div className="jumbotron img-center profile mt-4" style={{ padding: '90px 2rem', backgroundImage: `url('${process.env.PUBLIC_URL}/jumbo-profile.jpg')` }}>
            <h3>
               <strong className="text-white">Profile</strong>
            </h3>
         </div>
         <div className="col-md-12 login-form">
            <div className="card card-container" style={{ marginTop: -100, borderRadius: 15 }}>
               <img
                  src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                  alt="profile-img"
                  className="profile-img-card"
               />
               <div className="text-center">
                  Hello,
                  <br />
                  <strong>{currentUser.email}</strong>
                  <br /><br />
                  <button type="button" class="btn btn-danger" onClick={handleLogout}><span class="fa fa-sign-out mr-1"></span>Logout</button>
               </div>
            </div>
         </div>
      </>
   );
};

export default Profile;
