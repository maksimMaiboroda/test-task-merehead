import React, { useEffect } from "react";
import classes from "./Users.module.scss";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";

let Users = ({ requestUsers, users, usersLoaded, userDelete }) => {
  useEffect(() => {
    requestUsers();
  }, [users]);

  return (
    <div>
      {!usersLoaded ? <Preloader /> : null}
      <div className={classes.usersContainer}>
        <div className={classes.users}>
          {users.map((user) => {
            return <User {...user} key={user.id} userDelete={userDelete} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
