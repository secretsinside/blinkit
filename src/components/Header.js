const Header = () => {
    return (
        <div className="border-b-2 p-4 flex justify-between">
            <div className="text-4xl font-bold">
                <span className="text-yellow-400">blink</span>
                <span className="text-green-400">it</span>
            </div>
            <div className="">
                <input className="rounded-lg p-4 border-gray-500" type="text" placeholder="Search for products"/>
            </div>
            <div className="flex justify-between">
                <button className="mx-4">Login</button>
                <button className="mx-4">Cart</button>
            </div>
        </div>
    )
}

export default Header;