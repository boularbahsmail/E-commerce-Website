import React from 'react';
import Link from 'next/link';
import { Icon } from '../Shared/Icon';

const Hero = () => {
    return (
        <div className='max-w-[1400px] w-full mx-auto lg:py-14 py-10 flex flex-col justify-center items-center gap-10'>
            <ul className='w-full flex justify-center items-center gap-x-10 lg:gap-y-0 gap-y-4 flex-wrap'>
                <li className='font-medium uppercase lg:text-md text-sm text-black' title='Home'>
                    <Link href={"/"}>Home</Link>
                </li>

                <li className='font-normal uppercase lg:text-md text-sm text-gray-400' title='Shop'>
                    <Link href={"/"}>Shop</Link>
                </li>

                <li className='font-normal uppercase lg:text-md text-sm text-gray-400' title='Blog'>
                    <Link href={"/"}>Blog</Link>
                </li>

                <li className='font-normal uppercase lg:text-md text-sm text-gray-400' title='Contact Us'>
                    <Link href={"/"}>Contact Us</Link>
                </li>

                <li className='font-normal uppercase lg:text-md text-sm text-gray-400' title='Buy Now'>
                    <Link href={"/"}>Buy Now</Link>
                </li>
            </ul>

            <div className='flex flex-col justify-center items-center gap-6'>
                <h1 className='text-4xl lg:text-5xl font-bold max-w-[850px] w-full mx-auto text-center'>
                    Reimagining Luxury a Timeless Experience for the Modern Woman
                </h1>
                <p className='text-sm text-gray-400 max-w-[700px] w-full mx-auto text-center'>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour,
                    or randomised words which don't look even slightly believable.
                </p>
            </div>

            <div className='relative max-w-[1100px] w-full mx-auto overflow-hidden rounded-3xl bg-gray-200 shadow-xl shadow-gray-100'
                style={{
                    backgroundImage: "url('https://shorturl.at/bnMO4')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                    maxHeight: 400,
                    height: "100vh"
                }}
            >
                <div className='absolute lg:top-0 bottom-4 lg:left-10 left-4 max-w-[400px] w-full lg:h-full flex flex-col justify-center items-start gap-4'>
                    <h2 className='text-3xl lg:text-4xl font-bold text-white'>
                        Experience The Last Women Fashion Of 2023
                    </h2>
                    <button
                        className='flex justify-start items-center gap-3 text-white font-medium py-2.5 px-5 border border-white/50 rounded-[10px] backdrop-blur-xl'
                        title='Modern Fashion AccesFs'>
                        <span>Modern Fashion Access</span>
                        <Icon title='BsArrowRight' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero;