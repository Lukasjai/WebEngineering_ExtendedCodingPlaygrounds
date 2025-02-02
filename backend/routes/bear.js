const express = require('express');
const axios = require('axios');
const router = express.Router();

const WIKI_BASE_URL = 'https://en.wikipedia.org/w/api.php';

const fetchImageUrl = async (fileName) => {
    const imageParams = {
        action: 'query',
        titles: `File:${fileName}`,
        prop: 'imageinfo',
        iiprop: 'url',
        format: 'json',
        origin: '*',
    };

    const url = `${WIKI_BASE_URL}?${new URLSearchParams(imageParams).toString()}`;

    try {
        const res = await axios.get(url);
        const pages = res.data.query.pages;
        const imageInfo = Object.values(pages)[0]?.imageinfo;

        return imageInfo?.[0]?.url || null;
    } catch (error) {
        console.error('Error fetching image URL:', error);
        return null;
    }
};

const cleanRange = (range) => {
    return range.split('|')[0].trim();
};

router.get('/', async (req, res) => {
    try {
        const params = {
            action: 'parse',
            page: 'List_of_ursids',
            prop: 'wikitext',
            section: '3',
            format: 'json',
            origin: '*',
        };

        const url = `${WIKI_BASE_URL}?${new URLSearchParams(params).toString()}`;
        const wikiRes = await axios.get(url);
        const wikitext = wikiRes.data.parse.wikitext['*'];

        const speciesTables = wikitext.split('{{Species table/end}}');
        const bears = [];

        for (const table of speciesTables) {
            const rows = table.split('{{Species table/row');
            for (const row of rows) {
                const nameMatch = row.match(/\|name=\[\[(.*?)\]\]/);
                const binomialMatch = row.match(/\|binomial=(.*?)\n/);
                const imageMatch = row.match(/\|image=(.*?)\n/);
                const rangeMatch = row.match(/\|range=(.*?)\n/);

                if (nameMatch && binomialMatch && imageMatch && rangeMatch) {
                    const imageUrl = await fetchImageUrl(imageMatch[1].trim().replace('File:', ''));
                    bears.push({
                        name: nameMatch[1],
                        binomial: binomialMatch[1],
                        image: imageUrl,
                        range: cleanRange(rangeMatch[1]),
                    });
                }
            }
        }

        res.json(bears);
    } catch (error) {
        console.error('Error fetching bear data:', error);
        res.status(500).send('Fehler beim Abrufen der Bärendaten');
    }
});

module.exports = router;
