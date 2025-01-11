// src/components/BearCard.jsx
import React from 'react';

const BearCard = ({ name, binomial, image, range }) => (
  <div className="bear-card">
    <h3>
      {name} ({binomial})
    </h3>
    <img src={image} alt={name} style={{ width: '200px', height: 'auto' }} />
    <p>
      <strong>Range:</strong> {range}
    </p>
  </div>
);

export default BearCard;
