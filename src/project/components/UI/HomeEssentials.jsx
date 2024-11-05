import PropTypes from 'prop-types';

const HomeEssentials = ({ homeEssentialsData }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-64">
            <h2 className="text-xl font-semibold mb-4">Shop for your home essentials</h2>
            <div className="grid grid-cols-2 gap-2">
                {
                    homeEssentialsData?.slice(0, 4).map(data => (
                        <div key={data?._id} className="flex flex-col items-center">
                            <img src={data?.image} alt={data?.title} className="h-16" />
                            <p className="text-sm">{data?.category || "Cleaning Tools"}</p>
                        </div>
                    ))
                }
            </div>
            <p className="text-blue-500 mt-4 cursor-pointer">Discover more in Home</p>
        </div>
    );
};

HomeEssentials.propTypes = {
    homeEssentialsData: PropTypes.array
};

export default HomeEssentials;