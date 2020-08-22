import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/FormsControls/FormsControls";
import { required } from "../../../utils/validators/validarion";
import classes from "./LoginForm.module.css";

const UserForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          className={classes.loginInput}
          validate={[required]}
          name="email"
          component={Input}
          type="text"
          placeholder="Login"
        />
      </div>
      <div>
        <Field
          className={classes.loginInput}
          validate={[required]}
          name="password"
          component={Input}
          type="text"
          placeholder="Password"
        />
      </div>
      <div className={classes.loginCheckboxContainer}>
        <Field
          className={classes.loginCheckbox}
          name="rememberMe"
          component={Input}
          type="checkbox"
          value="rememberMe"
        />
        <span>Remember me</span>
      </div>

      
      <div className={classes.btnContentLogin}>
        <button className={classes.btnLogin} type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

const CreateUserForm = reduxForm({ form: "login" })(UserForm);

export default CreateUserForm;
