import React from "react";
import "../../styling/signin.css";
import { Link } from "react-router-dom";
import {RiArrowDropRightFill} from '../../../node_modules/react-icons/ri'

export const UserSignin = () => {
  return (
    <div className="signin-parent">
      <div className="signin-logo-container">
        <Link to="/"></Link>
      </div>

      <div className="form-container">
        <h2>Sign in</h2>
        <form>
          <label htmlFor="formInput">
            {" "}
            Enter mobile phone number or email{" "}
          </label>
          <input
            type="email"
            id="formInput"
            name="email"
            maxLength="128"
            required
          />
        <input type="submit" value={"Continue"} />
        </form>

        <div className="terms">
          <div>
            <span className="d-block">By signing in, you agree to Amazon's</span>
            <span>
              <Link>Conditions of Use </Link>
              and
              <Link> Privacy Notice.</Link>
            </span>
            <div>
              <span id="right-arrow">
              <RiArrowDropRightFill/>
              </span>
              <Link>
              Need help?
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="signin-divider">
        <span></span>
        <span>New to Amazon</span>
        <span></span>
      </div>

      <div className="createAccount">
        <Link to="/createAccount">Create your Amazon account</Link>
      </div>
    </div>
  );
};
