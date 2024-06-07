import React from 'react';

const Cart: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-red-700 mb-8">Your Cart</h1>
      
      <div className="space-y-4">
        {[1, 2].map((item) => (
          <div key={item} className="flex items-center justify-between p-4 bg-white shadow rounded-md">
            <img
              src={`https://via.placeholder.com/150`}
              alt="Product"
              className="w-24 h-24 rounded object-cover"
            />
            <div className="flex-1 mx-4">
              <h2 className="text-lg font-semibold">Num BanhJok Somlor Khmer</h2>
              <p className="text-sm">Size S <span className="text-red-500">3.99 $ only</span></p>
            </div>
            <div className="flex items-center">
              <button className="px-2 py-1 text-white bg-red-700 rounded">-</button>
              <span className="mx-2">1</span>
              <button className="px-2 py-1 text-white bg-red-700 rounded">+</button>
            </div>
            <button className="ml-4 text-red-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-4">
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Category food" className="flex-1 p-2 border rounded" />
          <button className="px-4 py-2 bg-red-700 text-white rounded">Apply Category</button>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="p-4 bg-white shadow rounded-md">
          <h3 className="text-lg font-semibold">Card Total</h3>
          <div className="mt-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$200</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span>$200</span>
            </div>
          </div>
        </div>
        <button className="px-8 py-2 bg-red-700 text-white rounded">Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;