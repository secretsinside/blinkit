import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { BASE_URL } from "../constant/constant";
import { updateSavedCart } from "../store/savedCartSlice";
import { addItem, clearCart, switchToSavedCart } from "../store/cartSlice";

const ViewSavedCart = ({hideSaveCartView}) => {

    const {savedCartItems} = useSelector((store) => store.savedCart);

    const dispatch = useDispatch();

    const fetchSavedCart = async () => {
        try {
            if(savedCartItems.length === 0) {
                const response = await fetch(BASE_URL + "/cart");
                const data = await response.json();
                dispatch(updateSavedCart(data));
                console.log("Printing data", data);
            }
        } catch(e) {
            console.log("Error fetching saved carts");
        }
    }

    useEffect(() => {
        fetchSavedCart();
    }, []);

    async function checkoutCart(event, cart) {
        event.stopPropagation();
        const cartItems = await fetchCartItems(cart);
        console.log("displaying cart items : ", cartItems);
        dispatch(clearCart());
        for(let item of cartItems) dispatch(addItem(item));
        dispatch(switchToSavedCart(cart));
        hideSaveCartView();
    }

    async function fetchCartItems(cart) {
        try {
            const response = await fetch(BASE_URL+ "/items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cart)
            });
            
            const data = await response.json();
            return data;
        } catch(e) {
            console.log("Encountered error while fetching savd cart items.");
        }
    }


    return (
        <div className="bg-white rounded-md my-5" id="saved-cart-container">
            {
                savedCartItems.map((cart) => (
                    <div key={cart.id} 
                    className="w-full rounded-md p-2 border-b flex justify-between items-center hover:bg-gray-100">
                        <p className="font-medium">{cart.name}</p>
                        <button className="bg-green-700 rounded-md text-sm font-semibold p-2 text-white"
                            onClick={(e) => {checkoutCart(e, cart)}}>
                            Checkout
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default ViewSavedCart;