import React, { useEffect } from 'react'

const Product = () => {

    useEffect(() => {
        fetch("/api/route")
          .then(res => res.json())
          .then(data => {
           console.log(data);
           
           
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);

  return (
    <div>product</div>
  )
}

export default Product