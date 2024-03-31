import { useState } from "react";

const AddBtn = ({itemCount, addCallback, removeCallback}) => {

    function handleAdd() {
        addCallback();
    }

    function handleRemove() {
        removeCallback();
    }

    return (
        <>
            {
                itemCount === 0 || itemCount === undefined ?
                    <button className="text-xs border-x border-y border-green-700 rounded-md p-1 text-green-600 font-bold w-14"
                        onClick={handleAdd}>
                        ADD
                    </button>
                    :
                    <div className="text-xs border-x border-y bg-green-700 rounded-md p-1 text-white font-bold w-14 flex justify-between">
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