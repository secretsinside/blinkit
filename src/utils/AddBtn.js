import { useState } from "react";

const AddBtn = ({addCallback, removeCallback}) => {
    const [itemCount, setItemCount] = useState(0);

    function handleAdd() {
        setItemCount(itemCount+1);
        addCallback();
    }

    function handleRemove() {
        setItemCount(itemCount-1);
        removeCallback();
    }

    return (
        <>
            {
                itemCount == 0 ?
                    <button className="text-xs border-x border-y border-green-600 rounded-md p-1 text-green-600 font-bold w-14"
                        onClick={handleAdd}>
                        ADD
                    </button>
                    :
                    <div className="text-xs border-x border-y bg-green-600 rounded-md p-1 text-white font-bold w-14 flex justify-between">
                        <button className="px-1 text-base"
                            onClick={handleRemove}>-</button>
                        <span className="m-auto">{itemCount}</span>
                        <button className="px-1 text-base"
                            onClick={handleAdd}>+</button>
                    </div>
            }
            
        </>
    )
}

export default AddBtn;