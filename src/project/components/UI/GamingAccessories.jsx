import PropTypes from 'prop-types';

const GamingAccessories = ({ gamingAccessoriesData }) => {
    
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-64">
            <h2 className="text-xl font-semibold mb-4">Gaming accessories</h2>
            <div className="grid grid-cols-2 gap-2">
                {
                    gamingAccessoriesData?.slice(0, 4).map(data => (
                        <div key={data?._id} className="flex flex-col items-center">
                            <img src={data?.image} alt={data?.title} className="h-16" />
                            <p className="text-sm">{data?.category}</p>
                        </div>
                    ))
                }
            </div>
            <p className="text-blue-500 mt-4 cursor-pointer">See more</p>
        </div>
    );
};

GamingAccessories.propTypes = {
    gamingAccessoriesData: PropTypes.array
};

export default GamingAccessories;