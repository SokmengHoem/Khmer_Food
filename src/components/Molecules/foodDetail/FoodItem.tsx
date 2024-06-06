// import React from 'react';

// interface FoodItemProps {
//   name: string;
//   priceRange: string;
//   description: string;
//   imageUrl: string;
//   rating: string;
// }

// const FoodItem: React.FC<FoodItemProps> = ({ name, priceRange, description, imageUrl, rating }) => {
//   return (
//     <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex items-center space-x-6">
//       <div className="flex-shrink-0">
//         <img
//           src={imageUrl}
//           alt="Food"
//           className="w-40 h-40 rounded-full object-cover"
//         />
//       </div>
//       <div>
//         <h2 className="text-2xl font-bold">{name}</h2>
//         <p className="text-xl text-orange-600 mt-2">{priceRange}</p>
//         <p className="text-gray-700 mt-2">
//           {description}
//         </p>
//         <div className="flex items-center mt-4">
//           <span className="text-yellow-400 text-lg">
//             {rating}
//           </span>
//         </div>
//         <div className="flex items-center mt-4">
//           <button className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center">-</button>
//           <span className="mx-4 text-lg">1</span>
//           <button className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center">+</button>
//         </div>
//         <div className="flex items-center mt-4">
//           <svg
//             className="w-6 h-6 text-gray-500"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5.121 19a4 4 0 005.656 0L12 17.778l1.223 1.222a4 4 0 005.656 0 4 4 0 000-5.656L12 4m0 0L5.121 11.344a4 4 0 000 5.656z"
//             ></path>
//           </svg>
//           <span className="ml-2 text-gray-600">add to white list</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodItem;