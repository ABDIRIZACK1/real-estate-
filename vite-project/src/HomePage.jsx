import React from 'react';
import PropertyCard from './PropertyCard'; // Assuming you have a PropertyCard component

const HomePage = () => {
  // Sample property data
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa with Ocean View',
      price: '$1,200,000',
      image: 'https://example.com/property1.jpg',
      location: 'Miami, FL',
      bedrooms: 4,
      bathrooms: 3,
      area: '3,000 sqft'
    },
    {
      id: 2,
      title: 'Modern Downtown Apartment',
      price: '$600,000',
      image: 'https://example.com/property2.jpg',
      location: 'New York, NY',
      bedrooms: 2,
      bathrooms: 2,
      area: '1,200 sqft'
    },
    // Add more properties as needed
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Explore Properties</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {properties.map(property => (
          <div key={property.id} className="col">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
