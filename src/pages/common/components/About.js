import React from "react";
import './styles/about.css';
import background from "./styles/main-background.jpg";
import myPic from "./styles/my-picture.png";

export function About() {
  
  return (
    <section className="content" style={{backgroundImage: `url(${background})`}}>
      <div className="container-fluid">
        <div className="content-container col-md-9 col-xs-12">
          <p className="about-me-header">About me</p>
        
          <div className="about-me-content container">
            <img
              className="about-me-content-image"
              src={myPic}
              alt="my picture"
            />
            <p className="about-me-content-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              dolores tempore earum odit eos, quos quod, illo aut assumenda
              officia beatae itaque quaerat. Veritatis beatae corporis ullam
              autem, suscipit itaque modi sed ex blanditiis esse aliquam,
              consequatur iusto natus delectus at hic quis dolores ducimus sint?
              Sit, a ad. Optio ullam impedit nisi. Aut in sit velit voluptatem
              architecto, pariatur maxime? Repellat, architecto a mollitia
              veniam quam inventore! Veniam accusantium sapiente quaerat hic
              incidunt commodi? Sint doloribus similique eos, ducimus magni
              tenetur? Est nesciunt hic rerum laborum qui in voluptatum
              repudiandae natus soluta id veritatis necessitatibus harum,
              adipisci nobis mollitia! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ea debitis vel, ratione labore soluta hic id
              magnam, laudantium eius sit ab. Sunt porro, in inventore provident
              facilis accusantium ipsam quis impedit quo tempora quisquam
              corrupti vero, ratione adipisci. Voluptatum, facilis! Esse tempora
              nobis magni facilis explicabo, modi quisquam culpa ipsam libero
              vero vitae enim asperiores, atque quaerat voluptatum laudantium
              illum a quidem ducimus! At nulla libero deleniti aspernatur
              nostrum eligendi ea minima odit omnis fuga! Nesciunt vero
              perferendis eveniet doloribus adipisci mollitia placeat aspernatur
              autem iusto maiores. Voluptas eveniet ex exercitationem tenetur
              eaque harum repudiandae blanditiis, quam adipisci aliquam iure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
