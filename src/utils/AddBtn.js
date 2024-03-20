import { useState } from "react";

const AddBtn = () => {
    const [item, setItem] = useState(0);

    function handleAdd() {
        setItem(item+1);
    }

    function handleRemove() {
        setItem(item-1);
    }

    return (
        <>
            {
                item == 0 ?
                    <button className="text-xs border-x border-y border-green-600 rounded-md p-1 text-green-600 font-bold w-14"
                        onClick={handleAdd}>
                        ADD
                    </button>
                    :
                    <div className="text-xs border-x border-y bg-green-600 rounded-md p-1 text-white font-bold w-14 flex justify-between">
                        <button className="px-1 text-base"
                            onClick={handleRemove}>-</button>
                        <span className="m-auto">{item}</span>
                        <button className="px-1 text-base"
                            onClick={handleAdd}>+</button>
                    </div>
            }
            
        </>
    )
}

export default AddBtn;