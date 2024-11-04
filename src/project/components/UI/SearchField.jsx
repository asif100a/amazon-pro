import { IoSearch } from "react-icons/io5";

const SearchField = () => {
    return (
        <div>
            <div className='w-full relative'>
              <input type='text' placeholder='Search...'
              className='border border-[#e5eaf2] py-3 pl-4 pr-[65px] outline-none w-full rounded-md'/>

              <span
              className='bg-gray-300 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group'><IoSearch
              className='text-[1.3rem]  group-hover:text-gray-200'/></span>
              </div>
        </div>
    );
};

export default SearchField;