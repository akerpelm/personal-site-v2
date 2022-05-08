import React from "react";
import "../portfolio/portfolio.scss";

const PorfolioList = ({ listItem }) => {
  return <li className={listItem.id}>{listItem.title}</li>;
};

export default PorfolioList;
