// src/services/BearService.js
const baseUrl = 'https://en.wikipedia.org/w/api.php';

export const fetchImageUrl = async (fileName) => {
    const imageParams = {
        action: 'query',
        titles: `File:${fileName}`,
        prop: 'imageinfo',
        iiprop: 'url',
        format: 'json',
        origin: '*',
    };

    const url = `${baseUrl}?${new URLSearchParams(imageParams).toString()}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        const pages = data.query.pages;
        const imageInfo = Object.values(pages)[0]?.imageinfo;

        return imageInfo?.[0]?.url ?? '/media/placeholder.jpg';
    } catch (error) {
        console.error('Error fetching image URL:', error);
        return '/media/placeholder.jpg';
    }
};

export const getBearData = async () => {
    const params = {
        action: 'parse',
        page: 'List_of_ursids',
        prop: 'wikitext',
        section: '3',
        format: 'json',
        origin: '*',
    };

    const url = `${baseUrl}?${new URLSearchParams(params).toString()}`;

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch bear data');
        const data = await res.json();
        return data.parse.wikitext['*'];
    } catch (error) {
        console.error('Error fetching bear data:', error);
        return null;
    }
};
