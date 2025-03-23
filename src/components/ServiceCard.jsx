import React from "react";

const ServiceCard = ({ index, title, sno, description, serviceListRef }) => {
  return (
    <div
      ref={(el) => (serviceListRef.current[index] = el)}
      className="service-list-item"
    >
      <div className="service-item-first-child">
        <h2>0{sno}</h2>
        <h1>{title}</h1>
      </div>
      <div className="service-item-second-child">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
