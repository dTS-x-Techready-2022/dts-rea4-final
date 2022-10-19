import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
   const { user: currentUser } = useSelector((state) => state.auth);

   if (!currentUser) {
      return <Navigate to="/login" />;
   }

   return (
      <div className="container">
         <header className="jumbotron">
            <h3>
               <strong>{currentUser.email}</strong> Profile
            </h3>
         </header>
         <p>
            <strong>Email:</strong> {currentUser.email}
         </p>
      </div>
   );
};

export default Profile;
