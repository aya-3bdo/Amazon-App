import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetails = () => {

  const[items, setItems]= useState([])
  const getItems = async () => {
    const { data } = await axios.get(' http://localhost:3001/products');
    setItems(data)
  }

  useEffect(
    () => {
      getItems();
    }, []
  )
 
  return (
    <>
      <div className='details'>
        {
          items.length > 0 ?(
            <div className='items-content'>
              {
                items.map(item => (
                  <div key={item.id} className="item">
                    <h3>item.title</h3>
                  </div>

                ))
              }
             </div>

          ) :
        <p>...Loading</p>
    }
      
      </div>
    </>
  );
}

export default ProductDetails
