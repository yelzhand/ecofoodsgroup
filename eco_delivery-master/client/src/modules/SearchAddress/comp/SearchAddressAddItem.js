import { v4 as uuidv4 } from 'uuid';

import { Button, Input } from '../../../components';

const SearchAddressAddItem = ({ setItems }) => {
  const handleItem = (e) => {
    e.preventDefault();

    setItems((prev) => [
      ...prev,
      {
        id: uuidv4(),
        item_name: e.target.item_name.value,
        item_weight: +e.target.item_weight.value,
      },
    ]);
  };

  return (
    <form onSubmit={handleItem}>
      <div
        className="search-address__form__el_jc-spbt"
        style={{ marginBottom: '20px' }}
      >
        <Input
          placeholder="Item name"
          style={{ width: '60%' }}
          label="Item name"
          name="item_name"
        />
        <Input
          placeholder="0.0 kg"
          label="Weight"
          name="item_weight"
          style={{ width: '30%' }}
        />
      </div>
      <div className="search-address__form__el search-address__form__el_jc-flend">
        <Button text="Add" type="submit" styleType="outline" />
      </div>
    </form>
  );
};

export default SearchAddressAddItem;
