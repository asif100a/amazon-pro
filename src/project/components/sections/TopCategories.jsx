const TopCategories = () => {
    return (
        <div className="flex justify-center gap-4 p-8">
            {/* Kitchen Appliances */}
            <div className="bg-white p-4 rounded-lg shadow-md w-64">
                <h2 className="text-lg font-semibold mb-4">Top categories in Kitchen appliances</h2>
                <div className="mb-4">
                    <img src="/path/to/cooker.png" alt="Cooker" className="w-full h-36 object-cover" />
                    <p className="text-center mt-2">Cooker</p>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="flex flex-col items-center">
                        <img src="/path/to/coffee.png" alt="Coffee" className="h-16 w-full object-cover rounded" />
                        <p className="text-xs mt-1">Coffee</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/path/to/pots-pans.png" alt="Pots and Pans" className="h-16 w-full object-cover rounded" />
                        <p className="text-xs mt-1">Pots and Pans</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/path/to/kettle.png" alt="Kettles" className="h-16 w-full object-cover rounded" />
                        <p className="text-xs mt-1">Kettles</p>
                    </div>
                </div>
                <p className="text-blue-500 text-sm cursor-pointer">Explore all products in Kitchen</p>
            </div>

            {/* 11.11 Deals */}
            <div className="bg-white p-4 rounded-lg shadow-md w-64">
                <h2 className="text-lg font-semibold mb-4">Treat yourself. Shop 11.11 deals</h2>
                <div>
                    <img src="/path/to/deals.png" alt="11.11 deals" className="w-full h-36 object-cover" />
                </div>
                <p className="text-blue-500 text-sm mt-4 cursor-pointer">Shop now</p>
            </div>
            {/* 11.11 Deals */}
            <div className="bg-white p-4 rounded-lg shadow-md w-64">
                <h2 className="text-lg font-semibold mb-4">Treat yourself. Shop 11.11 deals</h2>
                <div>
                    <img src="/path/to/deals.png" alt="11.11 deals" className="w-full h-36 object-cover" />
                </div>
                <p className="text-blue-500 text-sm mt-4 cursor-pointer">Shop now</p>
            </div>

            {/* New Home Arrivals */}
            <div className="bg-white p-4 rounded-lg shadow-md w-64">
                <h2 className="text-xl font-semibold mb-4">New home arrivals under $50</h2>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center">
                        <img src="/path/to/kitchen.png" alt="Kitchen & dining" className="h-16" />
                        <p className="text-sm">Kitchen & dining</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/path/to/home-improvement.png" alt="Home improvement" className="h-16" />
                        <p className="text-sm">Home improvement</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/path/to/decor.png" alt="Décor" className="h-16" />
                        <p className="text-sm">Décor</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/path/to/bedding-bath.png" alt="Bedding & bath" className="h-16" />
                        <p className="text-sm">Bedding & bath</p>
                    </div>
                </div>
                <p className="text-blue-500 mt-4 cursor-pointer">Shop the latest from Home</p>
            </div>
        </div>
    );
};

export default TopCategories;