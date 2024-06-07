import React from 'react'
import Cart from '../../components/Molecules/addTocard/addToCard';

type Props = {}

// export default function AddToCard({}: Props) {
//   return (
//     <div>AddToCard</div>
//   )
// }

const AddToCard:React.FC = () =>{
  return (
    <div>
      <Cart/>
    </div>
  );
}

export default AddToCard;