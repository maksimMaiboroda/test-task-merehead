import React from "react";
import CreateUser from "./CreateUser";
import { connect } from "react-redux";
import {addUser, requestUsers} from "../../redux/actions/actions"



const CreateUserContainer = (props) => {
  return (
     <CreateUser {...props}/>
  );
};

let mapStateToProps = (state) => {
  return {
    
  };
};

export default connect(mapStateToProps, { addUser, requestUsers })(CreateUserContainer);
