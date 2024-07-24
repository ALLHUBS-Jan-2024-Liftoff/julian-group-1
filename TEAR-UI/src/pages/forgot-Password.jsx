import React, {useState} from 'react';

const ForgotPassword = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if((phone && email) || (!phone && !email)) {
      alert('Please enter either phone number or email');
    } else {
      document.getElementById('forgot-password-form').submit();
    }
  };

  return (
    <div className="forgot-password">
      <div className="forgot-password-container">
        <h1>Forgot Password</h1>
        <form id="forgot-password-form" action="/login" method="post">
        <div className="input-container">
           <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              
            ClassName="input-field"
            />
          </div>
          <h2>OR</h2>
          <div className="input-container">
         <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              
              className="input-field"
            />
          </div>
       <div className="button-container">
            <button type="submit" id="custom-button">Send Code</button>
          </div>
        </form>
     </div>
    </div>
  );
};

export default ForgotPassword;