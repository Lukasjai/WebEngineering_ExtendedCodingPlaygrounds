const fetchBearData = async () => {
    const response = await fetch('https://your-api-url-here');
    if (!response.ok) {
        throw new Error('Failed to fetch bear data');
    }
    const data = await response.json();
    return data;
};

export default fetchBearData;