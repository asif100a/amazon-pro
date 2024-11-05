const NewHomeArrivals = () => {
    return (
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
    );
};

export default NewHomeArrivals;