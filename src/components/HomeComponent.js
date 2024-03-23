import { useEffect, useState } from "react";
import { BASE_URL } from "../constant/constant";
import { category, item, item2 } from "../constant/mock";
import ItemCard from "./ItemCard";

const HomeComponent = () => {

    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch(BASE_URL + "/items");
        const dataJson = await data.json();
        setItems(dataJson);
    }

    useEffect(() => {
        fetchItems();
    }, []);
    
    return (
        <div className="flex-column dark:bg-green-950 dark:text-white">
            {
                items.length && 
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