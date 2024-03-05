import { CiLight, CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

const Header = () => {
    const dispatch = useDispatch();

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
                <button className="mx-4">Login</button>
                <button className="mx-4 text-3xl"><CiShoppingCart/></button>
            </div>
        </div>
    )
}

export default Header;