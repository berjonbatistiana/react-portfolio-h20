import React from "react";
import './styles/portfolio.css';
import background from './styles/main-background.jpg'

export function Portfolio() {
  
  return (
    <div className="content" style={{backgroundImage: `url(${background})`}}>
    
      <div className="container-fluid">
        <div className="row">
          <div className="content-container col-md-9 col-xs-12">
            <p className="portfolio-header">Portfolio</p>
          
            <div className="portfolio-content">
            
              <a href="https://berjonbatistiana.github.io/Homewor-2a/" target="_blank">
                <div className="photo-card">
                  <img className="photo-image" src="/Images/rps.jpg" alt="rock paper scissors"/>
                  <div className="photo-title">
                    <div className="photo-text">Rock Paper Scissors</div>
                  </div>
                </div>
              </a>
            
              <a href="https://berjonbatistiana.github.io/Homework-6/">
                <div className="photo-card">
                  <img className="photo-image" src="/Images/weather.png" alt="weather"/>
                  <div className="photo-title">
                    <div className="photo-text">Weather</div>
                  </div>
                </div>
              </a>
            
              <a href="https://berjonbatistiana.github.io/Homework-4/" target="_blank">
                <div className="photo-card">
                  <img className="photo-image" src="/Images/quiz.png" alt="chat"/>
                  <div className="photo-title">
                    <div className="photo-text">Quiz Time!</div>
                  </div>
                </div>
              </a>
            
              <a href="https://berjonbatistiana.github.io/Homework-5/">
                <div className="photo-card">
                  <img className="photo-image" src="/Images/scheduler.jpeg" alt="studio"/>
                  <div className="photo-title">
                    <div className="photo-text">Studio</div>
                  </div>
                </div>
              </a>
            
              <a href="https://stark-stream-50180.herokuapp.com/">
                <div className="photo-card">
                  <img className="photo-image" src="/Images/notes.jpg" alt="note taker"/>
                  <div className="photo-title">
                    <div className="photo-text">Note Taker</div>
                  </div>
                </div>
              </a>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
