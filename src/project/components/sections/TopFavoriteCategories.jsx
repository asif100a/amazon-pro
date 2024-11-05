import { useEffect, useState } from "react";
import FashionDeals from "../UI/FashionDeals";
import GamingAccessories from "../UI/GamingAccessories";
import HomeEssentials from "../UI/HomeEssentials";
import NewHomeArrivals from "../UI/NewHomeArrivals";
import axios from "axios";

const TopFavoriteCategories = () => {
  const [gamingAccessoriesData, setGamingAccessoriesData] = useState([]);
  const [homeEssentialsData, setHomeEssentialsData] = useState([]);
  console.log(homeEssentialsData);

  // Fetch the Gaming Accessories data
  const fetchGamingAccessoriesData = async() => {
    const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/gaming-accessories`);
    setGamingAccessoriesData(data);
  };

  // Fetch the Gaming Accessories data
  const fetchHomeEssentialsData = async() => {
    const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/home-essentials`);
    setHomeEssentialsData(data);
  };

  useEffect(() => {
    fetchGamingAccessoriesData();
    fetchHomeEssentialsData();
  }, []);

  const handleDelete = async() => {
    const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/delete`);
    console.log(response);
  };

  return (
    <div className="flex justify-center gap-4 p-8">
      {/* Gaming Accessories */}
      <GamingAccessories gamingAccessoriesData={gamingAccessoriesData} />
      {/* <button onClick={handleDelete} className="p-6">delete</button> */}

      {/* Home Essentials */}
      <HomeEssentials homeEssentialsData={homeEssentialsData} />

      {/* Fashion Deals */}
      <FashionDeals />

      {/* New Home Arrivals */}
      <NewHomeArrivals />
    </div>
  );
};

export default TopFavoriteCategories;
