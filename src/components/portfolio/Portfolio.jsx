import React from "react";
import PorfolioList from "../portfolioList/PorfolioList";
import "./portfolio.scss";

const Portfolio = () => {
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((listItem) => {
          return <PorfolioList listItem={listItem} />;
        })}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/linkedin.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/linkedin.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/linkedin.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/linkedin.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/linkedin.png" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
