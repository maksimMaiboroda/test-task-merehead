import React, { useState, useEffect } from "react";
import classes from "./Users.module.scss";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";
import Pagination from "../common/Pagination/Pagination";

let Users = ({ requestUsers, users, usersLoaded, userDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    requestUsers();
  }, []);

  // Get current users
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (number) => setCurrentPage(number);

  if (usersLoaded) {
    return <Preloader />;
  }

  return (
    <div>
      {/* {!usersLoaded ? <Preloader /> : null} */}
      <div className={classes.usersContainer}>
        <div className={classes.users}>
          <User
            users={currentPosts}
            usersLoaded={usersLoaded}
            userDelete={userDelete}
            requestUsers={requestUsers}
          />
          <Pagination
            postPerPage={postsPerPage}
            totalPosts={users.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
