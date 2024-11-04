import { useState } from "react";

// react icons
import { FaTasks } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbLogout2, TbUsersGroup } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { MdLaptopMac, MdOutlineArrowRightAlt, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsBuildings, BsCalendar2Date } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import SearchField from "../../UI/SearchField";
import { Link } from "react-router-dom";

const Header = () => {
    const [accountMenuOpen, setAccountMenuOpen] = useState(false)
    const [isProductHover, setIsProductHover] = useState(false)
    const [isLanguageHover, setIsLanguageHover] = useState(false)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const [productMobileMegaMenu, setProductMobileMegaMenu] = useState(false)
    const [megaMenuSubItem, setMegaMenuSubItem] = useState("")

    return (
        <header>
            <nav
                className="flex items-center justify-between w-full bg-gradient-to-r from-[#003e33] to-[#04724b]">
                <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo" className="w-[55px] " />

                <div>
                    <SearchField />
                </div>

                <ul className="items-center gap-[20px] text-[1rem] text-[#fff] lg:flex h-full hidden relative">
                    <li className={`${isLanguageHover ? "text-[#3B9DF8]" : "text-white"} flex items-center gap-[5px] cursor-pointer py-3 border border-red-500`}
                        onMouseEnter={() => setIsLanguageHover(true)}
                        onMouseLeave={() => setIsLanguageHover(false)}>
                        <MdLaptopMac className="text-[1.1rem]" />
                        Products
                        <IoIosArrowUp
                            className={`${isLanguageHover ? "rotate-0" : "rotate-[-180deg]"} transition-all duration-300`} />

                        {/* mega menu */}
                        <div
                            className={`${isLanguageHover ? "block" : "hidden"} bg-white rounded-md absolute top-12 left-0 p-4 w-[420px] border transition-all duration-300 boxShadow flex flex-wrap gap-3 text-sm`}>

                            <div className="space-y-2 text-black mx-auto">
                                <button className="py-1 px-12 bg-[#fed813] rounded-lg shadow-sm">Sign in</button>
                                <p className="text-xs">New Customer? <Link to={'#'} className="text-blue-600">Start here</Link></p>
                            </div>

                            <div className="text-black w-full flex justify-between border-t pt-3">
                                <div className="px-3">
                                    <h4 className="text-base font-semibold">Your List</h4>
                                    <ul>
                                        <li>Create a list</li>
                                        <li>Find a list or Registry</li>
                                    </ul>
                                </div>

                                <div className="border-l px-3">
                                    <h4 className="text-base font-semibold">Your Account</h4>
                                    <ul>
                                        <li>Account</li>
                                        <li>Orders</li>
                                        <li>Recommendations</li>
                                        <li>Browsing History</li>
                                        <li>Watchlist</li>
                                        <li>Video purchases and rentals</li>
                                        <li>Kindle Unlimited</li>
                                        <li>Content & Devices</li>
                                        <li>Subscribe & Save Items</li>
                                        <li>Memberships & Subscriptions</li>
                                        <li>Music Library</li>
                                        <li>Orders</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className={`${isProductHover ? "text-[#3B9DF8]" : "text-white"} flex items-center gap-[5px] cursor-pointer py-3 border border-red-500`}
                        onMouseEnter={() => setIsProductHover(true)}
                        onMouseLeave={() => setIsProductHover(false)}>
                        <MdLaptopMac className="text-[1.1rem]" />
                        Products
                        <IoIosArrowUp
                            className={`${isProductHover ? "rotate-0" : "rotate-[-180deg]"} transition-all duration-300`} />

                        {/* mega menu */}
                        <div
                            className={`${isProductHover ? "block" : "hidden"} bg-white rounded-md absolute top-12 left-0 p-4 w-[420px] border transition-all duration-300 boxShadow flex flex-wrap gap-3 text-sm`}>

                            <div className="space-y-2 text-black mx-auto">
                                <button className="py-1 px-12 bg-[#fed813] rounded-lg shadow-sm">Sign in</button>
                                <p className="text-xs">New Customer? <Link to={'#'} className="text-blue-600">Start here</Link></p>
                            </div>

                            <div className="text-black w-full flex justify-between border-t pt-3">
                                <div className="px-3">
                                    <h4 className="text-base font-semibold">Your List</h4>
                                    <ul>
                                        <li>Create a list</li>
                                        <li>Find a list or Registry</li>
                                    </ul>
                                </div>

                                <div className="border-l px-3">
                                    <h4 className="text-base font-semibold">Your Account</h4>
                                    <ul>
                                        <li>Account</li>
                                        <li>Orders</li>
                                        <li>Recommendations</li>
                                        <li>Browsing History</li>
                                        <li>Watchlist</li>
                                        <li>Video purchases and rentals</li>
                                        <li>Kindle Unlimited</li>
                                        <li>Content & Devices</li>
                                        <li>Subscribe & Save Items</li>
                                        <li>Memberships & Subscriptions</li>
                                        <li>Music Library</li>
                                        <li>Orders</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="flex items-center gap-[5px] cursor-pointer py-3">
                        <AiOutlineFire className="text-[1.1rem] text-gray-600" />
                        Features
                    </li>
                    <li className="flex items-center gap-[5px] cursor-pointer py-3">
                        <BiSupport className="text-[1.1rem] text-gray-600" />
                        Support
                    </li>

                </ul>

                <div className="flex items-center gap-[15px]">
                    <div className="flex items-center gap-[10px] cursor-pointer relative"
                        onClick={() => setAccountMenuOpen(!accountMenuOpen)}>
                        <div className="relative">
                            <img
                                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724605498~exp=1724609098~hmac=7f6fc106bae2c17b0c93af1b2e5483d9d8368f3e51284aaec7c7d50590d2bae5&w=740"
                                alt="avatar" className="w-[35px] h-[35px] rounded-full object-cover" />
                            <div
                                className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white"></div>
                        </div>

                        <h1 className="text-[1rem] font-[400] text-gray-600 sm:block hidden">Dhon
                            Deo</h1>

                        <div
                            className={`${accountMenuOpen ? "translate-y-0 opacity-100 z-[1]" : "translate-y-[10px] opacity-0 z-[-1]"} bg-white w-max rounded-md boxShadow absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}>
                            <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
                                <FiUser />
                                View Profile
                            </p>
                            <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
                                <IoSettingsOutline />
                                Settings
                            </p>
                            <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
                                <FiUser />
                                View Profile
                            </p>

                            <div className="mt-3 border-t border-gray-200 pt-[5px]">
                                <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-red-500 hover:bg-red-50">
                                    <TbLogout2 />
                                    Logout
                                </p>
                            </div>

                        </div>

                        <IoIosArrowUp
                            className={`${accountMenuOpen ? "rotate-0" : "rotate-[180deg]"} transition-all duration-300 text-gray-600 sm:block hidden`} />

                    </div>

                    <CiMenuFries onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                        className="text-[1.8rem] text-[#424242]c cursor-pointer lg:hidden flex" />
                </div>

                <aside
                    className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} lg:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}>
                    <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
                        <li onClick={() => setProductMobileMegaMenu(!productMobileMegaMenu)}
                            className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
                            Products
                            <IoIosArrowDown
                                className={`${productMobileMegaMenu ? "rotate-0" : "rotate-[180deg]"} text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`} />
                        </li>

                        {/* product mega menu */}
                        <div onClick={() => setMegaMenuSubItem("more_product")}
                            className={`${productMobileMegaMenu ? "hidden" : "block"} group font-[500] ml-6`}>
                            <h4 className="text-left flex items-center gap-[5px]">
                                More Products
                                <MdOutlineKeyboardArrowRight className="text-[1.2rem]" />
                            </h4>

                            <ul className={`${megaMenuSubItem === "more_product" ? "flex" : "hidden"} pl-6 mt-3 font-[400] items-start flex-col gap-[10px] text-gray-600`}>
                                <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">Demo
                                    App
                                </li>
                                <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">CRM</li>
                                <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">CMS</li>
                            </ul>
                        </div>

                        <div onClick={() => setMegaMenuSubItem("ecosystem")}
                            className={`${productMobileMegaMenu ? "hidden" : "block"} font-[500] ml-6`}>
                            <h4 className="text-left flex items-center gap-[5px]">
                                Ecosystem
                                <MdOutlineKeyboardArrowRight className="text-[1.2rem]" />
                            </h4>

                            <ul className={`${megaMenuSubItem === "ecosystem" ? "flex" : "hidden"} pl-6 mt-3 font-[400] items-start flex-col gap-[10px] text-gray-600`}>
                                <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">Directory</li>
                                <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">Bookings</li>
                                <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">User
                                    feedback
                                </li>
                                <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">Task
                                    Manager
                                </li>
                            </ul>
                        </div>

                        <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">Features
                        </li>
                        <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">Support</li>
                    </ul>
                </aside>
            </nav>
        </header>
    );
};

export default Header;