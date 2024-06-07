// FoodDetail.tsx
import React from 'react';
import FoodItem from './FoodItem';
import { foodDetail } from '../../../data/myData';


const FoodDetail: React.FC = () => {
  return (
    <div>
      <FoodItem
        name={foodDetail.name}
        priceRange={foodDetail.priceRange}
        description={foodDetail.description}
        imageUrl={foodDetail.imageUrl}
        rating={foodDetail.rating}
      />
    </div>
  );
};

export default FoodDetail;