import { useEffect, useState } from "react";
import { BASE_URL } from "../constant/constant";
import { category, item, item2 } from "../constant/mock";
import ItemCard from "./ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { addInventory } from "../store/cartSlice";

const HomeComponent = () => {

    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const fetchItems = async () => {
        const data = await fetch(BASE_URL + "/items");
        const dataJson = await data.json();
        dispatch(addInventory(dataJson));
    }

    useEffect(() => {
        fetchItems();
    }, []);

    useEffect(() => {
        console.log("items value change");
    }, [items]);
    
    return (
        <div className="flex-column dark:bg-green-950 dark:text-white">
            {
                category.category !== undefined && 
                (
                <div className="flex flex-wrap m-auto w-8/12">
                    {
                        category.category.map(c => (
                            <ItemCard isCategory={true} 
                                category={c} 
                                key={c.id}/>
                        ))
                    }
                </div>
                )
            }
            {
                items?.length && 
                <div className="flex flex-wrap m-auto w-8/12">
                    {
                        items.map((i) => (
                            <ItemCard isCategory={false} key={i.id} item={i}/>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default HomeComponent;