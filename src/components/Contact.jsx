



import  { useState } from 'react';
//import './style.css';
import '../styles/App.css';
import { validateEmail, validateMessage } from '../utils/helpers';

export default function Contact() {
  <h2 class="fw-bold fs-3">Contact </h2>
  
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    

    if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
    
  };

  const handleFormSubmit = (e) => {
    
    e.preventDefault();

     if (!validateEmail(email) || !userName) {
      setErrorMessage('Name and email are required. Please enter a valid email address.');
     return;
   
    }
    if (!validateMessage(message)) {
      setErrorMessage(
        `Please enter a message`
      );
      return;
    }
    setErrorMessage('');
    setSuccessMessage('Thank you! Your message has been sent.');
  
    setUserName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
    
    
  };
  const [successMessage, setSuccessMessage] = useState('');
  return (
    <div className="form-container">
      <h1>Contact</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="userName">Name</label>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            id="userName"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email">Email address</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            id="message"
            placeholder="Enter your message here"
            rows="4"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

  
      {/* Error Message */}
      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}

      {successMessage && (
      <div className="success-message">
        <p>{successMessage}</p>
      </div>
    )}
    </div>
  );
}



