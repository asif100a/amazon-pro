const Categories = () => {
  return (
    <div className="flex justify-center gap-4 p-8 bg-gradient-to-b from-red-200 to-white">
      {/* Gaming Accessories */}
      <div className="bg-white p-4 rounded-lg shadow-md w-64">
        <h2 className="text-xl font-semibold mb-4">Gaming accessories</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col items-center">
            <img src="/path/to/headset.png" alt="Headset" className="h-16" />
            <p className="text-sm">Headsets</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/path/to/keyboard.png" alt="Keyboard" className="h-16" />
            <p className="text-sm">Keyboards</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/path/to/mouse.png" alt="Computer mice" className="h-16" />
            <p className="text-sm">Computer mice</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/path/to/chair.png" alt="Chairs" className="h-16" />
            <p className="text-sm">Chairs</p>
          </div>
        </div>
        <p className="text-blue-500 mt-4 cursor-pointer">See more</p>
      </div>

      {/* Home Essentials */}
      <div className="bg-white p-4 rounded-lg shadow-md w-64">
        <h2 className="text-xl font-semibold mb-4">Shop for your home essentials</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col items-center">
            <img src="/path/to/cleaning.png" alt="Cleaning Tools" className="h-16" />
            <p className="text-sm">Cleaning Tools</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/path/to/storage.png" alt="Home Storage" className="h-16" />
            <p className="text-sm">Home Storage</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/path/to/decor.png" alt="Home Decor" className="h-16" />
            <p className="text-sm">Home Decor</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/path/to/bedding.png" alt="Bedding" className="h-16" />
            <p className="text-sm">Bedding</p>
          </div>
        </div>
        <p className="text-blue-500 mt-4 cursor-pointer">Discover more in Home</p>
      </div>

      {/* Fashion Deals */}
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

export default Categories;
