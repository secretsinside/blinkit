import AddBtn from "../utils/AddBtn";

const ItemCard = ({isCategory, item}) => {
    
    return (
        <>
            { isCategory ? 
                <div className="p-6 rounded-md w-40 flex-column">
                    <img className="rounded-xl m-auto" 
                        src="https://img.freepik.com/premium-photo/painting-lake-with-mountains-sun-shining-it_865053-55.jpg" 
                        alt="image"/>
                    <p className="text-sm font-semibold text-center">category</p>
                </div>
            : 
                <div className="p-2 m-4 rounded-md w-40 h-64 flex-column border-x border-y border-gray-400">
                    <img className="rounded-xl m-auto p-4 mb-16" 
                        src="https://img.freepik.com/premium-photo/painting-lake-with-mountains-sun-shining-it_865053-55.jpg" 
                        alt="image"/>
                    <div className="">
                        <p className="text-sm font-semibold">
                            {item.name}
                        </p>
                        <p className="text-xs text-gray-400">
                            {item.qty}
                        </p>
                        <div className="flex justify-between">
                            <p className="text-sm font-semibold">
                                {item.price}
                            </p>
                            <AddBtn/>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ItemCard;