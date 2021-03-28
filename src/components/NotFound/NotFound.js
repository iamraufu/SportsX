import React from 'react';
import './NotFound.css';

const NotFound = () => {
      const image = 'https://i.ibb.co/dgtS2sM/Logo-Makr-66q1-DR.png'
      return (
            <div className="NotFound">
                  <img src={image} alt=""/>
                  <h1>404 Not Found</h1>
            </div>
      );
};

export default NotFound;