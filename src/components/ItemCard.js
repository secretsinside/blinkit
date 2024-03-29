import { useDispatch } from "react-redux";
import AddBtn from "../utils/AddBtn";
import { addItem, removeItem } from "../store/cartSlice";
import { MAX_LENGTH_OF_ITEM_NAME } from "../constant/constant";

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
                <div className="p-2 m-4 rounded-md w-52 h-80 flex-column border-x border-y border-gray-200">
                    <img className="rounded-xl m-auto p-4 h-4/6 object-cover hover:scale-105 hover:duration-300" 
                        src={item.thumbnailUrl} 
                        alt="image"/>
                    <div className="h-2/6">
                        <p className={(item.bestseller ? "bg-yellow-600" : "") + " text-xs font-semibold  w-min text-white rounded-md px-1 h-1/6"}>
                            {item.bestseller ? "Bestseller" : ""}
                        </p>
                        <p className="text-sm font-semibold leading-tight h-2/6">
                            {item.name.slice(0, MAX_LENGTH_OF_ITEM_NAME) + (item.name.length > MAX_LENGTH_OF_ITEM_NAME ? "..." : "")}
                        </p>
                        <p className="text-xs text-gray-400 h-1/6">
                            {item.qty}
                        </p>
                        <div className="flex justify-between h-2/6">
                            <div className="text-xs font-semibold">
                                {(item.discountedPrice && item.discountedPrice !== item.mrp) && <p className="">
                                ₹ {item.discountedPrice/100}
                                </p>}
                                <p className={(item.discountedPrice && item.discountedPrice !== item.mrp) ? "line-through text-gray-400" : ""}>
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