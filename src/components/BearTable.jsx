import React from 'react';

const BearTable = () => {
  const bearData = [
    {
      type: 'Wild',
      coat: 'Brown or black',
      size: '1.4 to 2.8 meters',
      habitat: 'Woods and forests',
      lifespan: '25 to 28 years',
      diet: 'Fish, meat, plants',
    },
    {
      type: 'Urban',
      coat: 'North Face',
      size: '18 to 22',
      habitat: 'Condos and coffee shops',
      lifespan: '20 to 32 years',
      diet: 'Starbucks, sushi',
    },
  ];

  const createElement = (tag, props = {}, children = []) => {
    return React.createElement(tag, props, ...children);
  };

  const createTableHeader = () => {
    const headers = [
      'Bear Type',
      'Coat',
      'Adult size',
      'Habitat',
      'Lifespan',
      'Diet',
    ];
    return createElement('thead', {}, [
      createElement(
        'tr',
        {},
        headers.map((header, index) =>
          createElement(
            'th',
            {
              key: index,
              scope: 'col',
              style: {
                border: '1px solid black',
                padding: '8px',
                backgroundColor: '#ddddee',
              },
            },
            [header]
          )
        )
      ),
    ]);
  };

  const createTableBody = () => {
    return createElement(
      'tbody',
      {},
      bearData.map((bear, rowIndex) =>
        createElement(
          'tr',
          {
            key: rowIndex,
            style: {
              border: '1px solid black',
              backgroundColor: rowIndex % 2 === 0 ? '#e6f7ff' : '#ddddee',
            },
          },
          Object.values(bear).map((value, cellIndex) =>
            createElement(
              cellIndex === 0 ? 'th' : 'td',
              {
                key: cellIndex,
                scope: cellIndex === 0 ? 'row' : undefined,
                style: {
                  border: '1px solid black',
                  padding: '8px',
                  textAlign: 'left',
                },
              },
              [value]
            )
          )
        )
      )
    );
  };

  const createTable = () => {
    return createElement(
      'table',
      { style: { borderCollapse: 'collapse', width: '100%' } },
      [
        createElement(
          'caption',
          { style: { marginBottom: '10px', fontWeight: 'bold' } },
          [
            'This table lists types of bears along with their characteristics including coat color, adult size, habitat, lifespan, and diet.',
          ]
        ),
        createTableHeader(),
        createTableBody(),
      ]
    );
  };

  return createElement(
    'div',
    {
      className: 'bear-table-section',
      style: {
        margin: '20px 0',
        padding: '20px',
        backgroundColor: '#b5d7a8',
        border: '1px solid #ccc',
        borderRadius: '8px',
      },
    },
    [
      createElement('h2', { style: { marginBottom: '10px' } }, [
        'Bear Characteristics',
      ]),
      createTable(),
    ]
  );
};

export default BearTable;
