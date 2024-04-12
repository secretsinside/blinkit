import { CiLight, CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import CartComponent from "./CartComponent";
import { useState } from "react";

const Header = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);
    const [showCart, setShowCart] = useState(false);

    const changeTheme = () => {
        dispatch(toggleTheme());
    }

    const showCartComponent = () => {
        setShowCart(true);
    }

    const hideCartComponent = () => {
        setShowCart(false);
    }
    return (
        <div className="border-b-2 p-4 flex justify-between dark:bg-green-950 dark:text-white">
            <div className="text-4xl font-extrabold w-4/12">
                <span className="text-yellow-400">blink</span>
                <span className="text-green-400">it</span>
            </div>
            <div className="w-6/12">
                <input className="w-6/12 rounded-lg p-4 border-x border-y outline-green-700 dark:bg-green-900"
                    type="text" 
                    placeholder="Search for products"/>
            </div>
            <div className="flex justify-between">
                <button 
                    className="mx-4 text-3xl"
                    onClick={changeTheme}><CiLight/></button>
                <button className="mx-4 m-auto">Login</button>
                <button 
                    className="p-2 text-3xl flex rounded-md bg-green-700 h-min m-auto text-white font-bold"
                    onClick={showCartComponent}>
                    <CiShoppingCart className="m-auto h-6"/>
                    {
                        cartItems.quantity === 0 ? 
                        <>
                            <span className="m-auto text-sm">My Cart</span>
                        </>
                        :
                        <div className="flex-column text-sm text-left m-auto">
                            <p>{cartItems.quantity} items</p>
                            <p className="-mt-2">₹{cartItems.totalDiscountedPrice/100}</p>
                        </div>
                    }
                </button>
            </div>
            {
                showCart && <CartComponent closeCartModal={hideCartComponent}/>
            }
        </div>
    )
}

export default Header;