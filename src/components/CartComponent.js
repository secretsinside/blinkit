import { FaCircleXmark, FaArrowLeft, FaFile, FaBicycle, FaCaretRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import SaveCartComponent from "./SaveCartComponent";
import ViewSavedCart from "./ViewSavedCart";

const CartComponent = ({closeCartModal}) => {

    const {items, selectedItemId, totalMrp, totalDiscountedPrice } = useSelector((store) => store.cart);
    const [selectedItems, setSelectedItems] = useState(null);
    const deliveryCharge = useState(0);
    const [showSavedCartComponent, setShowSavedCartComponent] = useState(false);
    const [grandTotal, setGrandTotal] = useState(0);


    useEffect(() => {
        setSelectedItems(items.filter((item) => selectedItemId.indexOf(item.id) != -1))
    }, [items]);

    useEffect(() => {
        setGrandTotal(parseInt(deliveryCharge)+parseInt(totalDiscountedPrice));
    }, [totalMrp]);

    function showSavedCart() {
        setShowSavedCartComponent(true);
    }

    function hideSavedCart() {
        setShowSavedCartComponent(false);
    }

    return (
        <div className="absolute w-full h-screen top-0 left-0 bg-transparent flex">
            <div className="w-9/12 bg-gray-600 bg-opacity-40"
                onClick={closeCartModal}>    
            </div>
            <div className="w-3/12 bg-gray-200">
                <div className="flex px-4 h-12 w-full justify-between bg-white">
                    <p className="font-semibold text-lg my-auto">My cart</p>
                    <button className=""
                        onClick={closeCartModal}><FaCircleXmark className="text-lg"/></button>
                </div>
                <div className="p-4">
                    <div className="bg-white rounded-md px-2 text-center">
                        {
                            showSavedCartComponent ?
                            <div className="text-left flex items-center p-2">
                                <button 
                                    className="py-2"
                                    onClick={hideSavedCart}>
                                    <FaArrowLeft className="text-green-700 text-lg"/>
                                </button>
                                <span className="mx-4 font-bold text-green-700">Showing saved carts</span>
                            </div>
                            :
                            <button className="my-4 bg-green-700 text-white text-sm font-medium p-2 rounded-md w-full"
                            onClick={showSavedCart}>
                                Saved cart
                            </button>
                        }

                    </div>
                    {
                        showSavedCartComponent ? <ViewSavedCart hideSaveCartView={hideSavedCart}/> :
                        selectedItems?.length ?
                        <>
                            <div className="w-full my-5 rounded-md bg-white py-2">
                                {
                                    selectedItems.map((item) => (
                                        <ItemCard key={item.id} isCartItem={true} item={item}/>
                                    ))
                                }
                            </div>
                            <div className="w-full my-5 rounded-md bg-white p-2">
                                <p className="font-bold">Bill details</p>
                                <p className="flex items-center text-xs">
                                    <span className="w-1/12"><FaFile/></span>
                                    <span className="w-9/12">Item total</span>
                                    <span className="line-through text-gray-400 w-1/12">₹{totalMrp/100}</span>
                                    <span className="w-1/12 text-right">₹{totalDiscountedPrice/100}</span>
                                </p>
                                <p className="flex items-center text-xs">
                                    <span className="w-1/12"><FaBicycle/></span>
                                    <span className="w-9/12">Delivery charge</span>
                                    <span className="w-2/12 text-right">{deliveryCharge}</span>
                                </p>
                                <p className="flex items-center font-bold justify-between text-sm my-2">
                                    <span>Grand total</span>
                                    <span className="text-right">₹{grandTotal/100}</span>
                                </p>
                            </div>

                            <SaveCartComponent/>

                            <div className="w-full my-5 rounded-md bg-white p-2">
                                <button className="w-full my-4 bg-green-700 text-white text-sm py-4 px-2 rounded-md flex items-center font-bold">
                                    <span className="font-bold w-1/6 text-left">₹{grandTotal/100}</span>
                                    <span className="w-4/6">Proceed to pay</span>
                                    <span className="w-1/6 text-force-right"><FaCaretRight/></span>
                                </button>
                            </div>
                        </>
                        :
                        <div className="bg-white rounded-md my-5 text-center">
                            <img className="m-auto w-60 h-60" 
                                src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png"
                                alt={"cart_image"}
                                />
                            <p className="font-bold text-xl">You don't have any items in your cart</p>
                            <p className="text-gray-400">Your favourite items are just a click away</p>
                            <button className="my-4 bg-green-700 text-white text-sm p-2 rounded-md"
                                onClick={closeCartModal}>
                                Start shopping
                            </button>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default CartComponent;