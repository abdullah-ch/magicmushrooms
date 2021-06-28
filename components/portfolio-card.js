import React from "react";
const PortfolioCard = ({ data }) => {
  const { image, title, categories, url } = data;

  return (
    <div className={`singlefolio`}>
      <img src={image} alt={title} />
      <div className="folioHover">
        <a className="cate" href="#">
          {categories.map((cat) => cat + ", ")}
        </a>
        <h4>
          <a href={url}>{title}</a>
        </h4>
      </div>
    </div>
  );
};

export default PortfolioCard;
