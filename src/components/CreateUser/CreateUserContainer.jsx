import React from "react";
import CreateUser from "./CreateUser";
import { connect } from "react-redux";
import {addUser} from "../../redux/reducers/usersReducer"



const CreateUserContainer = (props) => {
  return (
     <CreateUser {...props}/>
  );
};

let mapStateToProps = (state) => {
  return {
    
  };
};

export default connect(mapStateToProps, { addUser })(CreateUserContainer);
