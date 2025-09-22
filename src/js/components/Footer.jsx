import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-0 text-white">
          Copyright &copy; {new Date().getFullYear()} Landing Page with React + BootStrap.{" "}
          <a 
            href="https://github.com/herelsphill" 
            className="text-white text-decoration-underline ms-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;