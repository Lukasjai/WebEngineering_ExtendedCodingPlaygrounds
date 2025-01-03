import React, { useEffect, useState } from 'react';
import fetchBearData from '../api/fetchBearData';

const BearSection = () => {
    const [bears, setBears] = useState([]);

    useEffect(() => {
        const loadBears = async () => {
            const bearData = await fetchBearData();
            setBears(bearData);
        };
        loadBears();
    }, []);

    return (
        <section>
            <h2>More Bears</h2>
            <div className="bear-list">
                {bears.map((bear, index) => (
                    <div key={index} className="bear">
                        <h3>{bear.name} ({bear.binomial})</h3>
                        <img src={bear.image} alt={bear.name} />
                        <p><strong>Range:</strong> {bear.range}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BearSection;