import React, { useState } from "react";
import NavLink from "../NavLink";
import Footer from "../Footer";
import Login from "../Login";
import MyPage from "../MyPage";
import GroupPage from "../GroupPage";
import DataPage from "../DataPage";

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState("Login");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Login") return <Login />;
    if (currentPage === "Group Page") return <GroupPage />;
    if (currentPage === "Log Out") return <Login />;
    if (currentPage === "Data Page") return <DataPage />;
    return <MyPage />;
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div>
      
      {/* We are passing the currentPage from state and the function to update it */}
      <NavLink currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
