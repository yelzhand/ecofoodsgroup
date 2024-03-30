import { Button } from '../../components';

import DeliveryAddressesItem from './comp/DeliveryAddressesItem';

import './DeliveryAddresses.sass';

const DeliveryAddresses = ({
  addresses,
  setAddresses,
  setAddressesAdded,
  showTrucks,
}) => {
  const handleCancel = () => {
    setAddresses([]);
  };

  const handleDone = async () => {
    setAddressesAdded(true);
  };

  return (
    <div className="delivery-addresses">
      <div className="delivery-addresses__header">Delivery Addresses</div>

      <div className="delivery-addresses__items">
        {addresses.map((address) => (
          <DeliveryAddressesItem
            address={address}
            setAddresses={setAddresses}
          />
        ))}
      </div>
      {showTrucks && (
        <div className="search-address__form__el search-address__form__el_jc-spbt">
          <Button
            text="Cancel"
            styleType="outline"
            style={{ width: '40%' }}
            action={handleCancel}
          />
          <Button text="Done" style={{ width: '40%' }} action={handleDone} />
        </div>
      )}
    </div>
  );
};

export default DeliveryAddresses;
