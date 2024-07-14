import React from 'react';

const PropertyCard = ({ property }) => {
  const { title, price, image, location, bedrooms, bathrooms, area } = property;

  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <strong>Price:</strong> {price}<br />
          <strong>Location:</strong> {location}<br />
          <strong>Bedrooms:</strong> {bedrooms}<br />
          <strong>Bathrooms:</strong> {bathrooms}<br />
          <strong>Area:</strong> {area}
        </p>
        <a href="#" className="btn btn-primary">View Details</a>
      </div>
    </div>
  );
};

export default PropertyCard;
