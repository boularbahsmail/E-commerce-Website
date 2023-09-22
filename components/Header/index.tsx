import React from 'react';
import Link from 'next/link';
import { Icon } from '../Shared/Icon';

interface menuState {
    menuOpen: boolean;
    setMenuOpen: Function
}

const Header = ({ menuOpen, setMenuOpen }: menuState) => {
    return (
        <header className='max-w-[1400px] w-full mx-auto flex justify-between items-center gap-8'>
            <div className='z-50' style={{ zIndex: 9999 }}>
                <Link href={"/"}>
                    <h2 className='font-bold uppercase text-xl lg:text-2xl'>
                        Zara
                    </h2>
                </Link>
            </div>

            <div className={`w-full flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-8 lg:bg-transparent || duration-300 ease-in-out || bg-white lg:static lg:h-auto lg:p-0 || z-50 absolute ${menuOpen ? "left-0" : "-left-full"} top-0 h-screen p-4`}>
                <div className='lg:max-w-[700px] max-w-[400px] w-full'>
                    <div className='w-full mx-auto bg-gray-50 border border-gray-100 rounded-[8px] flex lg:flex-row flex-col justify-center items-center lg:gap-4 gap-0 px-4 lg:py-0 py-2'>
                        <button className='lg:w-[25%] w-full text-sm text-gray-600 flex justify-center items-center gap-2 font-medium px-2 py-3'>
                            <span>All Categories</span>
                            <span><Icon title='FiChevronDown' props={{ fontSize: 18 }} /></span>
                        </button>
                        <div className='py-3 lg:w-[75%] w-full flex lg:justify-start justify-center items-center gap-2'>
                            <span className='text-gray-600'><Icon title='FiSearch' /></span>
                            <input type='search' placeholder='Search your product...' className='lg:w-full px-2 bg-transparent outline-none font-med text-sm' />
                        </div>
                    </div>
                </div>

                <div className='flex lg:flex-row flex-col justify-center items-center lg:gap-20 gap-8'>
                    <div className='flex justify-center items-center gap-2'>
                        <Link href={"/"} className='font-medium text-sm'>Login</Link>
                        {"/"}
                        <Link href={"/"} className='font-medium text-sm'>Register</Link>
                    </div>

                    <div>
                        <button className='flex justify-center items-center gap-2 text-sl bg-gray-50 py-2 px-4 text-gray-400 border border-gray-200 rounded-[10px] text-sm'>
                            <span>
                                <Icon title='BiShoppingBag' />
                            </span>
                            <span>02</span>
                        </button>
                    </div>
                </div>
            </div>


            <div className='lg:hidden flex flex-col justify-center items-center gap-1 z-50 h-8 w-8' onClick={() => { setMenuOpen(!menuOpen) }}>
                <span className={`h-[2px] w-[25px] bg-black duration-300 ease-in-out ${menuOpen && "-rotate-45"}`}></span>
                <span className={`h-[2px] w-[25px] bg-black duration-300 ease-in-out ${menuOpen && "opacity-0"}`}></span>
                <span className={`h-[2px] w-[25px] bg-black duration-300 ease-in-out ${menuOpen && "rotate-45 -mt-3"}`}></span>
            </div>
        </header>
    )
}

export default Header;