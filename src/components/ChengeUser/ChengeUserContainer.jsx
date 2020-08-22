import React from "react";
import ChengeUser from "./ChengeUser";
import { connect } from "react-redux";
import {userChange, requestUsers} from "../../redux/actions/actions"



const ChengeUserContainer = (props) => {
  return (
     <ChengeUser {...props}/>
  );
};

let mapStateToProps = (state) => {
  return {
    
  };
};

export default connect(mapStateToProps, { userChange, requestUsers })(ChengeUserContainer);
