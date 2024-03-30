import React from 'react';
import CsvDownloadButton from 'react-json-to-csv';
import { useEffect, useState } from 'react';

import './ShowTrucks.sass';

const ShowTrucks = ({
  numberOfTrucks,
  activeTruck,
  setActiveTruck,
  paths,
  addresses,
}) => {
  const [mockData, setMockData] = useState(null);

  const generateData = () => {
    if (!paths || !addresses) return;
    const result = [];

    for (let i = 0; i < paths.length; i++) {
      result.push({ id: `Truck №${i + 1}`, second: '' });
      for (let addr of paths[i]) {
        const address = addresses[addr];
        result.push({
          id: `Address: ${address.address}`,
          second: `Client: ${address.client}`,
        });

        for (let item of address.items) {
          result.push({
            id: `Item: ${item.item_name}`,
            second: `Weight: ${item.item_weight}`,
          });
        }
        result.push([]);
      }
      result.push([]);
    }

    setMockData(result);
  };

  useEffect(() => {
    generateData();
  }, [paths, addresses]);

  return (
    <div
      className="show-trucks"
      style={
        numberOfTrucks > 10
          ? {
              gridTemplateColumns: `repeat(${Math.floor(
                numberOfTrucks / 10
              )}, 1fr)`,
            }
          : {}
      }
    >
      <CsvDownloadButton
        className="button"
        style={{ width: '200px' }}
        data={mockData}
        headers={null}
      >
        Download data
      </CsvDownloadButton>
      {new Array(+numberOfTrucks).fill(0).map((truck, index) => (
        <div
          className={`show-trucks__item ${
            index === activeTruck
              ? 'show-trucks__item_active'
              : 'show-trucks__item_not-active'
          }`}
          onMouseDown={() => setActiveTruck(index)}
        >
          <img src="svgs/truck.svg" alt="truck" />
          Truck {index + 1}
        </div>
      ))}
    </div>
  );
};

export default ShowTrucks;
