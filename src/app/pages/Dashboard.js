import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import ArticleList from "../components/ArticleList/ArticleList";

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
            <ArticleList />
            
         </div>
         
      </>
   );
};

export default Dashboard;
