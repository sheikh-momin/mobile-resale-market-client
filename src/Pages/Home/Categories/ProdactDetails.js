import React, { useState } from 'react';
import { MdVerifiedUser } from 'react-icons/md';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../../Components/Loader/Loader';
import Productcard from './Productcard';

const ProdactDetails = () => {
  const products = useLoaderData();
  console.log(products)
  const navigation = useNavigation();
  const [item, setItem] = useState({});

  if (navigation.state === 'loading') {
    return <Loader></Loader>
  };

  
  return (
    <div>
      <h1>All product in this categories</h1>
      {
        products.map(product => <h1>{product.name}</h1> )
      }
      
    </div>
  );
};

export default ProdactDetails;