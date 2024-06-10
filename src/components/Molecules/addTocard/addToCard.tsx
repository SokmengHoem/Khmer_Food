
import { useFood } from '../../../context/FoodContext';

const Cart: React.FC = () => {
    const {addToCart, removeFoodCart} = useFood();
    return (
        <div className="max-w-4xl mx-auto p-4 mb-8 rounded  shadow-black-100">
            <h1 className="text-3xl font-bold text-center text-red-700 mb-8">Your Cart</h1>
            <div className="space-y-4">
                {
                    addToCart.map(item => (
                        <div className="grid grid-cols-4 gap-4 shadow-md bg-gray-100 rounded-2xl">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-36 h-36 rounded-2xl object-cover p-0"
                            />
                            <div className="grid  mt-10 mb-6">
                                <div className="justify-center items-center">
                                    {/* <h2 className="text-xl font-semibold text-center">{item.}</h2> */}
                                    <p className="text-lg text-center">{"Size : " + item.size},  <span className="text-red-500 text-lg text-center">{"$ " + item.price} only</span></p>
                                </div>
                            </div>
                            <div className="grid  mt-10 mb-6">
                                <div className="grid grid-cols-3 bg-red-700 text-white rounded-2xl w-36 h-12 shadow-md shadow-gray-500 text-xl">
                                    <button className="px-3 py-1 font-bold">-</button>
                                    <div className="px-4 py-2 font-bold items-start justify-center">1</div>
                                    <button className="px-5 py-1 font-bold items-end">+</button>
                                </div>
                            </div>
                            {/* <div>001</div>
                                <div>001</div> */}
                            <div className="flex items-center justify-between p-0 bg-white rounded-2xl ml-28">
                                <button onClick={()=> removeFoodCart(item)} className="ml-6">
                                    <img 
                                        src="images/trash.png"
                                        className="pl-3 w-8 duration-150 ease-in-out hover:scale-125"
                                    />
                                </button>
                            </div>
                        </div>

                    ))
                }
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