import React from "react";

import Users from "./Users";
import { connect } from "react-redux";
import { gerUsersSelector, isUsersLoaded, isRerender } from "../../redux/usersSelectors";
import { requestUsers, userDelete } from "../../redux/actions/actions";

let UsersContainer = (props) => {
  return <Users {...props} />;
};

let mapStateToProps = (state) => {
  return {
    users: gerUsersSelector(state),
    usersLoaded: isUsersLoaded(state)
  };
};

export default connect(mapStateToProps, { requestUsers, userDelete })(
  UsersContainer
);
