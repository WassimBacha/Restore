import React, { useEffect, useState } from 'react';

function App() {
 const [products,SetProducts] = useState<{name: string, price: number }[]>([]);
 useEffect(() => {
  fetch('http://localhost:5038/api/products')
    .then(response => response.json())
    .then(data => SetProducts(data));
 },[])

const addProduct = () => {
 
  SetProducts(prevState => [...prevState, { name: `Product ${prevState.length + 1}`, price: (prevState.length + 1) * 100 }]);
};

  return (
   <div>
    <h1>Restore</h1>
    <ul>
      {products.map((item,index) => (
        <li key={index}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
    <button onClick={addProduct} className="bg-blue-500 text-white px-4 py-2 rounded">
      Add Product
    </button>
   </div>
  )
}

export default App
