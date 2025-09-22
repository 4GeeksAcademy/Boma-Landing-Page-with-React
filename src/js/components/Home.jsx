import React from 'react';
import Hero from './Hero';
import NavBar from './NavBar';
import Footer from './Footer';  // Import the NavBar component

const Home = () => {
  // Card data
  const cards = [
    {
      id: 1,
      title: "Card title",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
      buttonText: "Find Out More!",
      imgSrc: "https://placehold.co/500x325"
    },
    {
      id: 2,
      title: "Card title",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",
      buttonText: "Find Out More!",
      imgSrc: "https://placehold.co/500x325"
    },
    {
      id: 3,
      title: "Card title",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
      buttonText: "Find Out More!",
      imgSrc: "https://placehold.co/500x325"
    },
    {
      id: 4,
      title: "Card title",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",
      buttonText: "Find Out More!",
      imgSrc: "https://placehold.co/500x325"
    }
  ];

  return (
    <div>
      <NavBar /> {/* Add the NavBar here */}
      <Hero 
        title="A Warm Welcome!"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maures expedita nascae eaque natus deserunt placerat libero quam. Earna, nemo obuscetti dignissime republicanae aperiam harun voluptas nulla quae expedita deletus."
        buttonText="Call to Action!"
      />
      
      <div className="container my-5">
        <div className="row g-4">
          {cards.map(card => (
            <div key={card.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img 
                  src={card.imgSrc} 
                  className="card-img-top" 
                  alt={card.title}
                />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title h5">{card.title}</h3>
                  <p className="card-text flex-grow-1">{card.description}</p>
                  <div className="mt-auto">
                    <button className="btn btn-primary w-100">{card.buttonText}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;