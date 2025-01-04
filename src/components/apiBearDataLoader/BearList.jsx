import React, { useEffect, useState } from 'react';
import BearCard from './BearCard';
import { fetchImageUrl, getBearData } from './BearService';

const BearList = () => {
    const [bears, setBears] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBears = async () => {
            try {
                const wikitext = await getBearData();
                if (!wikitext) throw new Error('No data returned from API');

                const speciesTables = wikitext.split('{{Species table/end}}');
                const fetchedBears = [];

                for (const table of speciesTables) {
                    const rows = table.split('{{Species table/row');
                    for (const row of rows) {
                        const nameMatch = row.match(/\|name=\[\[(.*?)\]\]/);
                        const binomialMatch = row.match(/\|binomial=(.*?)\n/);
                        const imageMatch = row.match(/\|image=(.*?)\n/);
                        const rangeMatch = row.match(/\|range=(.*?)\n/);

                        if (nameMatch && binomialMatch && imageMatch && rangeMatch) {
                            const fileName = imageMatch[1].trim().replace('File:', '');
                            const imageUrl = await fetchImageUrl(fileName);

                            fetchedBears.push({
                                name: nameMatch[1],
                                binomial: binomialMatch[1],
                                image: imageUrl,
                                range: rangeMatch[1].trim(),
                            });
                        }
                    }
                }

                setBears(fetchedBears);
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
