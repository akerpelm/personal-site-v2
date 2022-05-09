import React from "react";
import "../portfolioList/portfolioList.scss";

const PorfolioList = ({ listItem, active, setSelected }) => {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(listItem.id)}
    >
      {listItem.title}
    </li>
  );
};

export default PorfolioList;
