import { FaCircleXmark } from "react-icons/fa6";
import { useSelector } from "react-redux";
import AddBtn from "../utils/AddBtn";

const CartComponent = ({closeCartModal}) => {

    const items = useSelector((store) => store.cart.items);

    return (
        <div className="absolute w-screen h-screen top-0 left-0 bg-transparent flex">
            <div className="w-9/12 bg-gray-600 bg-opacity-40"
                onClick={closeCartModal}>    
            </div>
            <div className="w-3/12 bg-gray-200">
                <div className="flex px-4 h-12 w-full justify-between bg-white">
                    <p className="font-semibold text-lg my-auto">My cart</p>
                    <button className=""
                        onClick={closeCartModal}><FaCircleXmark className="text-lg"/></button>
                </div>
                <div className="px-4">
                    {
                        items?.length ?
                        <div className="w-full my-5">
                            {
                                items.map((item) => (
                                    <div className="flex bg-white p-2">
                                        <img className="w-16 h-16" 
                                            src={item.thumbnailUrl}/>
                                        <div className="w-4/6">
                                            <p className="4/6">{item.name}</p>
                                            <p className="1/6">{item.qty}</p>
                                            <div className="flex w-1/6">

                                                <p className="">₹{item.discountedPrice/100}</p>
                                                {item.mrp != item.discountedPrice && <p className="line-through text-gray-400">₹{item.mrp/100}</p>}
                                            </div>
                                        </div>
                                        <AddBtn initialCount={item.quantity}/>
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <div className="bg-white rounded-md my-5 text-center">
                            <img className="m-auto w-60 h-60" 
                                src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png"
                                />
                            <p className="font-bold text-xl">You don't have any items in your cart</p>
                            <p className="text-gray-400">Your favourite items are just a click away</p>
                            <button className="my-4 bg-green-700 text-white text-sm p-2 rounded-md">Start shopping</button>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default CartComponent;