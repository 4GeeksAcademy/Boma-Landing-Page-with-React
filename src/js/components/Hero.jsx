import React from 'react';

const Hero = ({ title, content, buttonText }) => {
  return (
    <div className="bg-light py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-4 fw-bold mb-4">{title}</h1>
            <p className="lead mb-4">{content}</p>
            <h2 className="h3 text-primary">{buttonText}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;