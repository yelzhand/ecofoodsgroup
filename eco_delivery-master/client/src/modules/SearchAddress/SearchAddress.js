import { useState, useRef, useEffect } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { v4 as uuidv4 } from 'uuid';

import { Input, Button } from '../../components';

import SearchAddressItemList from './comp/SearchAddressItemList';
import SearchAddressAddItem from './comp/SearchAddressAddItem';

import './SearchAddress.sass';

const SearchAddress = ({ setAddresses }) => {
  const [addressFound, setAddressFound] = useState(false);
  const [items, setItems] = useState([]);

  const [placeRef, setPlaceRef] = useState();
  const [clientRef, setClientRef] = useState();
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const google = window.google;

  const [searchResult, setSearchResult] = useState('Result: none');

  const handleCancel = () => {
    setAddressFound(false);
    setItems([]);
  };

  const handleDone = () => {
    setAddresses((prev) => [
      ...prev,
      {
        id: uuidv4(),
        address: placeRef.current.value,
        items: items,
        client: clientRef.current.value,
        lat: lat,
        lng: lng,
      },
    ]);
    handleCancel();
  };

  const handleChange = () => {
    if (searchResult != null) {
      //variable to store the result
      const place = searchResult.getPlace();

      setLat(place.geometry.location.lat());
      setLng(place.geometry.location.lng());
      //variable to store the name from place details result
      const name = place.name;
      //variable to store the status from place details result
      const status = place.business_status;
      //variable to store the formatted address from place details result
      const formattedAddress = place.formatted_address;
      // console.log(place);
      //console log all results
      console.log(`Name: ${name}`);
      console.log(`Business Status: ${status}`);
      console.log(`Formatted Address: ${formattedAddress}`);
    }
  };

  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
  }

  return (
    <div className="search-address">
      <div className="search-address__header">where to deliver? </div>
      <div className="search-address__form">
        <Autocomplete onPlaceChanged={handleChange} onLoad={onLoad}>
          <Input
            placeholder="Delivery address"
            style={{ marginBottom: '10px' }}
            setRef={setPlaceRef}
          />
        </Autocomplete>
        {!addressFound ? (
          <div className="search-address__form__el search-address__form__el_jc-c">
            <Button
              text="search"
              action={() => {
                setAddressFound(true);
              }}
            />
          </div>
        ) : (
          <>
            <div
              className="search-address__form__el_jc-spbt"
              style={{ marginBottom: '10px' }}
            >
              <Input
                placeholder="Client"
                style={{ width: '60%' }}
                label="Client"
                name="client"
                setRef={setClientRef}
              />
            </div>
            <SearchAddressAddItem setItems={setItems} />

            <SearchAddressItemList items={items} setItems={setItems} />

            {items.length ? (
              <div className="search-address__form__el search-address__form__el_jc-spbt">
                <Button
                  text="Cancel"
                  styleType="outline"
                  style={{ width: '40%' }}
                  action={handleCancel}
                />
                <Button
                  text="Done"
                  style={{ width: '40%' }}
                  action={handleDone}
                />
              </div>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchAddress;
