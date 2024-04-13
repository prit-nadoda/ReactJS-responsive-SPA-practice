import React, { useState } from "react";

function HeroSection() {
  const cardData = [
    {
      head: "Most Popular Ones",
      img: "https://www.hdcarwallpapers.com/thumbs/2023/lamborghini_revuelto_2023_8k_6-t2.jpg",
      title: "Lamborghini Revuelto 2023",
      desc : "This is a very good Lamborghini. Explore more below."
    },
    {
      head : "Our Special Ones",
      img: "https://www.hdcarwallpapers.com/thumbs/2023/lamborghini_revuelto_4k-t2.jpg",
      title: "Lamborghini Revuelto 2023",
      desc : "Cool and sleek. Hurry up and have a try."
    },
    {
      head: "New Arrivals",
      img: "https://www.hdcarwallpapers.com/thumbs/2023/novitec_lamborghini_aventador_lp_780_4_ultimae_roadster_2023_5k-t2.jpg",
      title: "Lamborghini Revuelto 2023",
      desc : "Be the first to experience the power."
    },
    {
      head : "Limited Editions",
      img: "https://www.hdcarwallpapers.com/thumbs/2023/lamborghini_revuelto_2023_5k_3-t2.jpg",
      title: "Lamborghini Revuelto 2023",
      desc : "Exclusive models for the discerning few."
    },
];


  return (
    <>
      <div className="hero">
        <div className="top-cards">
          {cardData.map(function(card,index){
            return (
              <div key={index} className="card">
            <div className="card-head">
              <h3>{card.head}</h3>
            </div>
            <div className="card-img">
              <img
                src={card.img}
                alt="An Image"
              />
            </div>
            <div className="card-body">
              <div className="card-title">
                <h4>{card.title}</h4>
              </div>
              <div className="desc">
                <p>{card.desc}</p>
              </div>
            </div>
          </div>
            )
          })}
          
        </div>
      </div>
    </>
  );
}

export default HeroSection;
