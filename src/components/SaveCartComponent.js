import { useState } from "react";
import {useSelector} from "react-redux";
import { BASE_URL } from "../constant/constant";
import { HiShoppingCart } from "react-icons/hi";

const SaveCartComponent = () => {
    const [cartName, setCartName] = useState("");
    const [cartError, setCartError] = useState(false);
    const [saveCartFlag, setSaveCartFlag] = useState(false);
    const {selectedItemId, orderingFromSavedCart, activeCartName} = useSelector((store) => store.cart);
    const [cartCreated, setCartCreated] = useState(false);

    function updateCartName(e) {
        const c_name = e.target.value;
        setCartName(c_name);
        if(c_name.length > 0) setCartError(false);
    }

    function toggleSaveCartFlag(e) {
        e.stopPropagation();
        setSaveCartFlag(!saveCartFlag);
    }

    async function saveCart () {
        console.log("Saving cart: ", cartName);
        if(cartName.length > 0) {
            try {
                const body = {
                    name: cartName,
                    itemId: selectedItemId
                };
                const response = await fetch(BASE_URL + "/cart", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                });
                
                const result = await response.json();
                setCartCreated(true);
                console.log(result);
                
            } catch(e) {
                console.log("Encountered error", e);
            }
        } else setCartError(true);

    }

    return (
        <>
            <div className="w-full my-5 rounded-md bg-white p-2">
            {
                orderingFromSavedCart ?
                <div className="flex items-center">
                    <HiShoppingCart className=" text-green-700 text-xl"/>
                    <p className="ml-2">
                        Ordering from&nbsp;
                        <span className="font-semibold">{activeCartName}</span>
                        &nbsp;cart
                    </p>
                </div> 
                :
                cartCreated ?
                <div className="flex items-center">
                    <HiShoppingCart className=" text-green-700 text-xl"/>
                    <span className="font-semibold ml-2">{cartName}</span>
                    &nbsp;cart created
                </div>
                :
                <>
                    <div className="hover:cursor-pointer flex" onClick={toggleSaveCartFlag}>
                        <input className="accent-green-700" type="checkbox" 
                            checked={saveCartFlag}
                            onChange={toggleSaveCartFlag}/>
                        <span className="px-2">Save this cart</span>
                    </div>
                    {
                        saveCartFlag && (
                            <div className="my-2 border-x border-y rounded-lg p-2 flex-column">
                                <label className="text-xs">Name your cart</label>
                                <div className="my-2 flex justify-between">
                                    <input className="p-2 mr-2 focus:outline-green-700  w-full"
                                        type="text" 
                                        placeholder="Eg. Breakfast"
                                        value={cartName}
                                        onChange={updateCartName}/>
                                    <button className="p-2 px-4 bg-green-700 text-white rounded-md text-sm"
                                        onClick={saveCart}>
                                        Save
                                    </button>
                                </div>
                                {
                                    cartError &&
                                    <div className="text-sm text-red-500">
                                        Cannot have empty cart name 
                                    </div>
                                }
                            </div>
                        )
                    }
                </>
                    
            }
            </div>
        </>
    )
}

export default SaveCartComponent;