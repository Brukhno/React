import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts=[
  {id: 1, message:"Hi , how are yuo?" , likeCount:12 },
  {id: 2, message:"Hi , how are yuo?" , likeCount:15 }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App posts={posts}/>
  </React.StrictMode>
);

reportWebVitals();

