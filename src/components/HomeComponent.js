import { useEffect, useState } from "react";
import { BASE_URL } from "../constant/constant";
import { category, item, item2 } from "../constant/mock";
import ItemCard from "./ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { addInventory } from "../store/cartSlice";
import Category from "./CategoryComponent";

const HomeComponent = () => {

    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const fetchItems = async () => {
        try {
            const data = await fetch(BASE_URL + "/items");
            const dataJson = await data.json();
            dispatch(addInventory(dataJson));
        } catch(e) {
            console.log('looks like everyone is sleeping in our store...');
        }
    }

    useEffect(() => {
        fetchItems();
    }, []);
    
    return (
        <div className="flex-column dark:bg-green-950 dark:text-white">
            <Category/>
            <div className="flex flex-wrap m-auto w-8/12">
                {
                    items?.length ? 
                    <>
                            {
                                items.map((i) => (
                                    <ItemCard isCategory={false} key={i.id} item={i}/>
                                ))
                            }
                    </>
                    : 
                    <>
                        <p className="text-2xl m-auto font-thin">
                            Looks like everyone is sleeping in our store.....!
                        </p>
                    </>
                }
            </div>
        </div>
    )
}

export default HomeComponent;