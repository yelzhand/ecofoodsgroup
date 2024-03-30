import { useState, useReducer } from 'react';

import SearchAddressItem from '../../SearchAddress/comp/SearchAddressItem';

const DeliveryAddressesItem = ({ address, setAddresses }) => {
  const [showItems, setShowItems] = useState(false);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleAddressDelete = (id) => {
    setAddresses((prev) => {
      const temp = prev;
      const index = temp.findIndex((item) => item.id === id);

      const leftSide = temp.slice(0, index);
      const rightSide = temp.slice(index + 1, temp.length);

      return [...leftSide, ...rightSide];
    });
  };

  const totalWeight = address.items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.item_weight,
    0
  );

  const handleDelete = (id) => {
    setAddresses((prev) => {
      const temp = prev;
      const index = temp.findIndex((item) => item.id === address.id);

      const itemIndex = temp[index].items.findIndex((item) => item.id === id);

      const leftSide = temp[index].items.slice(0, itemIndex);
      const rightSide = temp[index].items.slice(
        itemIndex + 1,
        temp[index].items.length
      );

      temp[index].items = [...leftSide, ...rightSide];

      forceUpdate();

      return temp;
    });
  };

  return (
    <div className="delivery-addresses__item">
      <div className="delivery-addresses__item__headers">
        <div className="delivery-addresses__item__header">Delivery address</div>
        <div className="delivery-addresses__item__header">
          Total weight
          <div className="search-address__item__el__emoji">
            <img
              src="svgs/x.svg"
              alt="x"
              onClick={() => handleAddressDelete(address.id)}
            />
          </div>
        </div>
      </div>

      <div className="search-address__item-list__headers">
        <div className="search-address__item-list__header">
          {address.address}
        </div>
        <div className="search-address__item-list__header">{totalWeight}</div>
      </div>

      <div className="delivery-addresses__item__headers">
        <div className="delivery-addresses__item__header">Name</div>
      </div>

      <div className="search-address__item-list__headers">
        <div className="search-address__item-list__header">
          {address.client}
        </div>
      </div>

      {showItems && address.items.length ? (
        <div className="search-address__item-list">
          <div className="search-address__item-list__headers">
            <div className="search-address__item-list__header">Item Name</div>
            <div className="search-address__item-list__header">Weight</div>
          </div>

          {address.items.map((item) => (
            <SearchAddressItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <></>
      )}

      <div
        className="delivery-addresses__item__chevron"
        onClick={() => setShowItems(!showItems)}
      >
        <img
          src={`svgs/${showItems ? 'chevron-up' : 'chevron-down'}.svg`}
          alt="chevron"
        />
      </div>
    </div>
  );
};

export default DeliveryAddressesItem;
