import { useDispatch } from "react-redux";
import AddBtn from "../utils/AddBtn";
import { addItem, removeItem } from "../store/cartSlice";

const ItemCard = ({isCategory, item, category}) => {

    const dispatch = useDispatch();

    function addItemToCart() {
        dispatch(addItem(item));
    }

    function removeItemFromCart() {
        dispatch(removeItem(item));
    }

    if(category !== undefined)console.log(category.name);
    
    return (
        <>
            { isCategory ? 
                <div className="p-6 rounded-md w-40 flex-column">
                    <img className="rounded-xl m-auto" 
                        src="https://img.freepik.com/premium-photo/painting-lake-with-mountains-sun-shining-it_865053-55.jpg" 
                        alt="image"/>
                    <p className="text-sm font-semibold text-center">{category.name}</p>
                </div>
            : 
                <div className="p-2 m-4 rounded-md w-40 h-72 flex-column border-x border-y border-gray-300">
                    <img className="rounded-xl m-auto p-4" 
                        src={item.thumbnailUrl} 
                        alt="image"/>
                    <div className="">
                        <p className="text-xs font-semibold bg-yellow-600 w-min text-white rounded-md px-1">
                            {item.bestseller ? "Bestseller" : " "}
                        </p>
                        <p className="text-sm font-semibold">
                            {item.name}
                        </p>
                        <p className="text-xs text-gray-400">
                            {item.qty}
                        </p>
                        <div className="mt-2 flex justify-between">
                            <div className="text-xs font-semibold">
                                {item.discountedPrice && <p className="">
                                ₹ {item.discountedPrice/100}
                                </p>}
                                <p className={item.discountedPrice ? "line-through text-gray-400" : ""}>
                                ₹ {item.mrp/100}
                                </p>
                            </div>
                            <AddBtn 
                                addCallback={addItemToCart}
                                removeCallback={removeItemFromCart}/>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ItemCard;