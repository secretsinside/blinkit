import { CiLight, CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

const Header = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);

    const changeTheme = () => {
        dispatch(toggleTheme());
    }
    return (
        <div className="border-b-2 p-4 flex justify-between dark:bg-green-950 dark:text-white">
            <div className="text-4xl font-extrabold">
                <span className="text-yellow-400">blink</span>
                <span className="text-green-400">it</span>
            </div>
            <div className="">
                <input className="rounded-lg p-4 dark:bg-green-900"
                    type="text" 
                    placeholder="Search for products"/>
            </div>
            <div className="flex justify-between">
                <button 
                    className="mx-4 text-3xl"
                    onClick={changeTheme}><CiLight/></button>
                <button className="mx-4 m-auto">Login</button>
                <button className="p-2 text-3xl flex rounded-md bg-green-600 h-min m-auto text-white font-bold">
                    <CiShoppingCart className="m-auto h-6"/>
                    {
                        cartItems.quantity === 0 ? 
                        <>
                            <span className="m-auto text-sm">My Cart</span>
                        </>
                        :
                        <div className="flex-column text-sm text-left">
                            <p>{cartItems.quantity} items</p>
                            <p>₹{cartItems.totalPrice/100}</p>
                        </div>
                    }
                </button>
            </div>
        </div>
    )
}

export default Header;