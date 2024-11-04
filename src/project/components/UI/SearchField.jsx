import { IoSearch } from "react-icons/io5";

const SearchField = () => {
    return (
        <div className='w-[50rem] h-fit rounded-md overflow-hidden hover:shadow-sm flex items-center'>
                <select className='bg-[#e6e6e6] py-[10px] px-3 border-t text-xs text-black' aria-describedby="searchDropdownDescription"  data-nav-digest="k+fyIAyB82R9jVEmroQ0OWwSW3A=" data-nav-selected="0" id="searchDropdownBox" name="url" tabIndex="0" title="Search in">
                <option selected="selected" value="search-alias=aps">All Departments</option>
                    <option value="search-alias=arts-crafts-intl-ship">Arts &amp; Crafts</option>
                    <option value="search-alias=automotive-intl-ship">Automotive</option>
                    <option value="search-alias=baby-products-intl-ship">Baby</option>
                    <option value="search-alias=beauty-intl-ship">Beauty &amp; Personal Care</option>
                    <option value="search-alias=stripbooks-intl-ship">Books</option>
                    <option value="search-alias=fashion-boys-intl-ship">{"Boys'"} Fashion</option>
                    <option value="search-alias=computers-intl-ship">Computers</option>
                    <option value="search-alias=deals-intl-ship">Deals</option>
                    <option value="search-alias=digital-music">Digital Music</option>
                    <option value="search-alias=electronics-intl-ship">Electronics</option>
                    <option value="search-alias=fashion-girls-intl-ship">{"Girls'"} Fashion</option>
                    <option value="search-alias=hpc-intl-ship">Health &amp; Household</option>
                    <option value="search-alias=kitchen-intl-ship">Home &amp; Kitchen</option>
                    <option value="search-alias=industrial-intl-ship">Industrial &amp; Scientific</option>
                    <option value="search-alias=digital-text">Kindle Store</option>
                    <option value="search-alias=luggage-intl-ship">Luggage</option>
                    <option value="search-alias=fashion-mens-intl-ship">{"Men's"} Fashion</option>
                    <option value="search-alias=movies-tv-intl-ship">Movies &amp; TV</option>
                    <option value="search-alias=music-intl-ship">Music, CDs &amp; Vinyl</option>
                    <option value="search-alias=pets-intl-ship">Pet Supplies</option>
                    <option value="search-alias=instant-video">Prime Video</option>
                    <option value="search-alias=software-intl-ship">Software</option>
                    <option value="search-alias=sporting-intl-ship">Sports &amp; Outdoors</option>
                    <option value="search-alias=tools-intl-ship">Tools &amp; Home Improvement</option>
                    <option value="search-alias=toys-and-games-intl-ship">Toys &amp; Games</option>
                    <option value="search-alias=videogames-intl-ship">Video Games</option>
                    <option value="search-alias=fashion-womens-intl-ship">{"Women's"} Fashion</option>
                </select>
            <input type='text' placeholder='Search Amazon Pro'
                className='py-[7px] pl-4 pr-[65px] outline-none w-full text-black' />

            <span className='px-3 bg-[#aa176f] border border-[#aa176f] py-2'>
                <IoSearch
                    className='text-[1.3rem] text-white' />
            </span>
        </div>
    );
};

export default SearchField;