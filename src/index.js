import React from 'react';
import ReactDOM from 'react-dom/client';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       
       <h1> Stay updated! </h1>
    
    <p>Join 60,000+ product managers receiving monthly updates on:</p>

    <li>Product discovery and building matters</li>
    <li>Measuring to ensure updates are a success</li>
    <li>And much more!</li>
 <br></br>

  <h6>Email address</h6>
  <form action="/home/the-backend-dev/Desktop/projects/form/newsletter-sign-up-with-success-message-main/success.html" method="POST">
    <input type="text" id="input" placeholder="email@company.com" required></input>
    <br></br>
    <a href="success.html" id="btn" class="btn btn-success">Subscribe to monthly newsletter </a>
    </form>
  </React.StrictMode>
);

