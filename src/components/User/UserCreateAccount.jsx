import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropRightFill } from 'react-icons/ri';
import  '../../styling/createAccount.css';



export const UserCreateAccount = () => {
  return (
    <div className='create-account-parent'>
      <div className="createAccount-logo-container">
        <Link to="/"></Link>
      </div>

      <div className="form-container">
        <h1>Create account</h1>
        <form>
          <label htmlFor="nameInput">
            {" "}
            Your name
          </label>
          <input
            type="email"
            id="nameInput"
            name="email"
            maxLength="128"
            required
            autoFocus
            placeholder='First and last name' />

          <label htmlFor="emailInput">
            {" "}
            Mobile number or email
          </label>
          <input
            type="email"
            id="emailInput"
            name="email"
            maxLength="128"
            required />

          <label htmlFor="password">
            {" "}
            Password
          </label>
          <input
            type="password"
            id="password"
            maxLength="20"
            placeholder='At least 6 characters'
            required />
          <span className='position-relative'>
            <span className='alert '></span>
            <span>Passwords must be at least 6 characters.</span>
          </span>

          <label htmlFor="reEnterPassword">
            {" "}
            Re-enter password
          </label>
          <input
            type="password"
            id="reEnterPassword"
            maxLength="20"
            required />

          <input type="submit" value={"Continue"} />
        </form>

        <div className="terms">
          <div>
            <span className="d-block">By creating an account, you agree to Amazon's</span>
            <span>
              <Link>Conditions of Use </Link>
              and
              <Link> Privacy Notice.</Link>
            </span>

            <div>
              <div className="createAccount-form-divider"></div>
              
              <div>
              <span >Already have an account?   </span>
              <Link to="/signin">
                Sign in
                <span id="right-arrow">
                  <RiArrowDropRightFill />
                </span>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div>
  );
};
