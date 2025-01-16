import React, { useEffect, useState } from 'react';
import BearCard from './BearCard';

const BearList = () => {
  const [bears, setBears] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBears = async () => {
      try {
        // Backend-API-Aufruf
        const res = await fetch('http://localhost:3000/api/bears');
        if (!res.ok) throw new Error('Failed to fetch bears from backend');

        const data = await res.json();
        setBears(data);
      } catch (err) {
        console.error('Error fetching bears:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBears();
  }, []);

  if (loading) {
    return <p>Loading bears...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="bear-list">
      {bears.map((bear, index) => (
        <BearCard key={index} {...bear} />
      ))}
    </div>
  );
};

export default BearList;
