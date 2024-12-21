import React, { useState } from "react";
const Register = () => {
  return (
    <div className="login-container">
      <h2>register</h2>
      <form action="https://election-management-system-44zy.onrender.com/voter-register" method="POST" >
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">status</label>
          <input
            type="text"
            name="status"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">dob</label>
          <input
            type="text"
            name="dob"
            placeholder="Enter your constituency"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter your constituency"
          />
        </div>
        <div className="form-group">
          <label htmlFor="constituency">constituency</label>
          <input
            type="text"
            name="constituency"
            placeholder="Enter your constituency"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">phone</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit"> register</button>

      </form>
    </div>
  );
};

export default Register;
