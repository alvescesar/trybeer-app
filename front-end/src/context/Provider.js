import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TryBeerContext from './TryBeerContext';

const Provider = ({ children }) => {
  const noValue = 1;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(false);
  const [productsList, setProductList] = useState([]);
  const [role, setRole] = useState('client');
<<<<<<< HEAD
  const [quantity, setQuantity] = useState(noValue);
  const [streetName, setStreetName] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
=======
  const [total, setTotal] = useState('');
>>>>>>> 37c9b1a7883b1b5e77dae8a72cabda05664bb7ae

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    checked,
    setChecked,
    productsList,
    setProductList,
    role,
    setRole,
<<<<<<< HEAD
    quantity,
    setQuantity,
    streetName,
    setStreetName,
    houseNumber,
    setHouseNumber,
=======
    total,
    setTotal,
>>>>>>> 37c9b1a7883b1b5e77dae8a72cabda05664bb7ae
  };

  return (
    <TryBeerContext.Provider value={ contextValue }>
      {children}
    </TryBeerContext.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
