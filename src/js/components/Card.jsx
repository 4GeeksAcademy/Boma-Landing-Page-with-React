import React from 'react';

const Card = ({ title, description, buttonText, imgSrc }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={imgSrc} 
        className="card-img-top" 
        alt={title}
      />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h5">{title}</h3>
        <p className="card-text flex-grow-1">{description}</p>
        <div className="mt-auto">
          <button className="btn btn-primary w-100">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;