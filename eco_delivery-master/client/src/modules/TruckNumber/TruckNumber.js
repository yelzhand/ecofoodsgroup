import { Input, Button } from '../../components';
import divideTrucks from '../../utils/divideTrucks';

const TruckNumber = ({ setNumberOfTracks, addresses, setPaths }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    divideTrucks({
      addresses: addresses,
      numberOfTrucks: +e.target.truck_number.value,
      setPaths: setPaths,
    });

    setNumberOfTracks(+e.target.truck_number.value);
  };

  return (
    <div className="search-address">
      <div className="search-address__header">Кол-во машин</div>
      <form className="search-address__form" onSubmit={handleSubmit}>
        <Input
          placeholder="Number of available trucks"
          name="truck_number"
          style={{ marginBottom: '20px' }}
        />
        <div className="search-address__form__el search-address__form__el_jc-c">
          <Button text="Search" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default TruckNumber;
