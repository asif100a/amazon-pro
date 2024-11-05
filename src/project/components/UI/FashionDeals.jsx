const FashionDeals = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-64">
            <h2 className="text-xl font-semibold mb-4">Shop deals in Fashion</h2>
            <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col items-center">
                    <img src="/path/to/jeans.png" alt="Jeans" className="h-16" />
                    <p className="text-sm">Jeans under $50</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/path/to/tops.png" alt="Tops" className="h-16" />
                    <p className="text-sm">Tops under $25</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/path/to/dresses.png" alt="Dresses" className="h-16" />
                    <p className="text-sm">Dresses under $30</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/path/to/shoes.png" alt="Shoes" className="h-16" />
                    <p className="text-sm">Shoes under $50</p>
                </div>
            </div>
            <p className="text-blue-500 mt-4 cursor-pointer">See all deals</p>
        </div>
    );
};

export default FashionDeals;