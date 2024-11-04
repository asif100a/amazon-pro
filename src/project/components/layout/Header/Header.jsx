import { useState } from "react";

// react icons
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiCart } from "react-icons/bi";
import SearchField from "../../UI/SearchField";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";

const Header = () => {
    const [isProductHover, setIsProductHover] = useState(false)
    const [isLanguageHover, setIsLanguageHover] = useState(false)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const [productMobileMegaMenu, setProductMobileMegaMenu] = useState(false)
    const [megaMenuSubItem, setMegaMenuSubItem] = useState("");


    return (
        <header>
            <nav className="w-full px-6 bg-gradient-to-r from-[#003e33] to-[#04724b]">
                <ul className="items-center gap-[20px] text-[1rem] text-[#fff] lg:flex lg:justify-between h-full w-full hidden relative nav-link-style">
                    <li>
                        <h2 className="text-2xl font-bold">Amazon Pro</h2>
                    </li>
                    <li>
                        <div className="flex items-center gap-[5px] cursor-pointer h-14 text-sm text-white">
                            <SlLocationPin className="text-[1.1rem]" />
                            <div>
                                <span className="text-xs font-medium text-gray-300">Deliver to</span> <br />
                                <span className="font-bold">Bangladesh</span>
                            </div>
                        </div>
                    </li>

                    <li className="search-field">
                        <SearchField />
                    </li>

                    <li className={`flex items-center gap-1 cursor-pointer h-14`}
                        onMouseEnter={() => setIsLanguageHover(true)}
                        onMouseLeave={() => setIsLanguageHover(false)}>
                        <div className="flex items-center mt-4 gap-1">
                            <img width="626" height="417" alt="a flag with stars and stripes is shown in a photo" className="_9zid0k5 _1286nb1h _1286nb1k _1286nb19c _1286nb13ec _1286nb13ki _1286nb16 _1286nb1ac w-5" fetchPriority="high" src="https://img.freepik.com/premium-photo/flag-with-stars-stripes-is-shown-photo_908344-21223.jpg" srcSet="https://img.freepik.com/premium-photo/flag-with-stars-stripes-is-shown-photo_908344-21223.jpg" />
                            <span className="flex items-end">
                                <span className="font-bold ]">EN</span>
                                <IoMdArrowDropdown />
                            </span>

                            {/* mega menu */}
                            <div
                                className={`${isLanguageHover ? "block" : "hidden"} bg-white text-black rounded-md absolute top-12 left-0 p-4 w-40 border transition-all duration-300 boxShadow flex flex-col gap-3 text-sm`}>

                                <label name="language" id="language" className="flex items-center gap-1">
                                    <input type="radio" name="language" value="en" defaultChecked={true} />
                                    <span>English - EN</span>
                                </label>
                                <label name="language" id="language" className="flex items-center gap-1">
                                    <input type="radio" name="language" value="es" />
                                    <span>español - ES</span>
                                </label>
                                <label name="language" id="language" className="flex items-center gap-1">
                                    <input type="radio" name="language" value="ar" />
                                    <span>العربية - AR</span>
                                </label>
                                <label name="language" id="language" className="flex items-center gap-1">
                                    <input type="radio" name="language" value="de" />
                                    <span>Deutsch - DE</span>
                                </label>
                                <label name="language" id="language" className="flex items-center gap-1">
                                    <input type="radio" name="language" value="he" />
                                    <span>עברית - HE</span>
                                </label>
                                <label name="language" id="language" className="flex items-center gap-1">
                                    <input type="radio" name="language" value="ko" />
                                    <span>한국어 - KO</span>
                                </label>
                                <label name="language" id="language" className="flex items-center gap-1">
                                    <input type="radio" name="language" value="pt" />
                                    <span>português - PT</span>
                                </label>
                                <label name="language" id="language" className="flex items-center gap-1">
                                    <input type="radio" name="language" value="zh" />
                                    <span>中文 (简体) - ZH</span>
                                </label>
                            </div>
                        </div>
                    </li>

                    <li className={`flex items-center gap-[5px] h-14 cursor-pointer`}
                        onMouseEnter={() => setIsProductHover(true)}
                        onMouseLeave={() => setIsProductHover(false)}>
                        <div className="flex items-end">
                            <div className="text-sm">
                                <span className="text-xs font-medium">Hello, sign in</span> <br />
                                <span className="font-bold">Account & Lists</span>
                            </div>
                            <IoMdArrowDropdown />
                        </div>

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

                    <li className="cursor-pointer h-14 flex items-center text-sm">
                        <div>
                            <span className="text-xs">Returns</span> <br />
                            <span className="font-bold">& Orders</span>
                        </div>
                    </li>
                    <li className="flex items-center gap-0 cursor-pointer h-14">
                        <div className="flex items-end">
                            <BiCart className="w-10 h-auto" />
                            <span className="text-sm font-bold mb-1">Cart</span>
                        </div>
                    </li>

                </ul>


                <CiMenuFries onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                    className="text-[1.8rem] text-[#424242]c cursor-pointer lg:hidden flex" />

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

            <nav className="w-full px-6 bg-[#095749] text-white">
                <ul className="text-sm font-semibold flex gap-5 nav-link-style">
                    <li className="flex gap-1 items-center py-2">
                        <FiMenu className="text-xl" />
                        <span> All</span>
                    </li>
                    <li className="py-2">{"Today's"} Deals</li>
                    <li className="py-2">Customer Service</li>
                    <li className="py-2">Registry</li>
                    <li className="py-2">Gift Cards</li>
                    <li className="py-2">Sell</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;