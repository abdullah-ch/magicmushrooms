import React from "react";
import Link from "next/link";

const ServiceCardThree = ({ data }) => {
  const { title, image, url } = data;
  return (
    <div className="single_wedo">
      <img src={image} alt={title} />
      <div className="overlay_wedo">
        <Link href={url}>
          <a>{title}</a>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCardThree;
