import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="forgot-password">
      <div className="forgot-password-container">
        <form id="forgot-password-form" action="/login" method="post">
          <div>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              style={{ border: 'none', borderBottom: '1px solid black' }}
            />
          </div>
          <h2>OR</h2>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              style={{ border: 'none', borderBottom: '1px solid black' }}
            />
          </div>
          <div>
            <button type="submit" id="custom-button">Send Code</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;