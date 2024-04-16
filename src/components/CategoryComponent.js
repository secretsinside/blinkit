import {useSelector, useDispatch} from "react-redux";
import ItemCard from "./ItemCard"
import { useEffect } from "react";
import { BASE_URL } from "../constant/constant";
import { updateCategories } from "../store/categorySlice";

export default Category = function () {

    const {category} = useSelector((store) => store.category);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchCategory().then((data) => dispatch(updateCategories(data)));
    }, []);

    async function fetchCategory() {
        const response = await fetch(BASE_URL+ "/category");
        const data = await response.json();
        return data;
    }

    return (
        <>
            {
                category.length > 0 &&
                <div className="flex flex-wrap m-auto w-8/12">
                    {
                        category.map(c => (
                            <ItemCard isCategory={true} 
                            category={c} 
                            key={c.id}/>
                        ))
                    }
                </div>
            }
        </>
    )
}