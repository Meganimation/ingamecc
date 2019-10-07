import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.css';



const port = process.env.PORT || 3000

app.listen(port, () => console.log('server started on port', port))





document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    
    <App/>,
    document.body.appendChild(document.createElement('div')),
  )
})




