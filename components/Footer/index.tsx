import React from 'react';
import Link from 'next/link';
import { Icon } from '../Shared/Icon';

const Footer = () => {
    return (
        <footer className='2xl:pt-16 2xl:pb-10 pb-0 py-10 max-w-[1400px] w-full mx-auto'>
            <div className='w-full bg-black py-16 pb-10 px-10 rounded-3xl'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center lg:gap-16 gap-10'>
                    <div className='w-full flex flex-col justify-center items-center md:items-start gap-4'>
                        <h1 className='text-white text-4xl md:text-5xl font-bold'>Zara</h1>
                        <p className='text-sm leading-6 text-white/80 md:text-left text-center'>
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected humour,
                            or randomised words which don't look even slightly believable.
                        </p>
                        <button
                            className='mt-2 flex justify-start items-center gap-3 text-black font-medium py-2.5 px-5 border rounded-[10px] bg-white duration-300 ease-in-out lg:cursor-pointer cursor-default active:duration-0 active:scale-95'
                            title='Modern Fashion AccesFs'>
                            <span>Modern Fashion Access</span>
                            <Icon title='BsArrowRight' />
                        </button>
                    </div>

                    <div className='w-full flex flex-col justify-center items-center md:items-start gap-6'>
                        <h3 className='text-white md:text-2xl text-xl font-semibold'>Quick Links</h3>
                        <ul className='grid md:grid-cols-2 grid-cols-1 md:place-items-start place-items-center place-content-center gap-4'>
                            <li className='text-sm text-white/60 duration-200 ease-in-out hover:text-white uppercase'>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li className='text-sm text-white/60 duration-200 ease-in-out hover:text-white uppercase'>
                                <Link href={"/"}>Shop</Link>
                            </li>
                            <li className='text-sm text-white/60 duration-200 ease-in-out hover:text-white uppercase'>
                                <Link href={"/"}>Blog</Link>
                            </li>
                            <li className='text-sm text-white/60 duration-200 ease-in-out hover:text-white uppercase'>
                                <Link href={"/"}>Contact Us</Link>
                            </li>
                            <li className='text-sm text-white/60 duration-200 ease-in-out hover:text-white uppercase'>
                                <Link href={"/"}>Buy Now</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='w-full flex flex-col justify-center items-center md:items-start gap-6'>
                        <h3 className='text-white md:text-2xl text-xl font-semibold'>Find Us On</h3>
                        <ul className='grid md:grid-cols-2 grid-cols-1 md:place-items-start place-items-center place-content-center gap-4'>
                            <li className='text-sm text-white/60 duration-200 ease-in-out hover:text-white uppercase'>
                                <Link href={"/"}>LinkedIn</Link>
                            </li>
                            <li className='text-sm text-white/60 duration-200 ease-in-out hover:text-white uppercase'>
                                <Link href={"/"}>Instagram</Link>
                            </li>
                            <li className='text-sm text-white/60 duration-200 ease-in-out hover:text-white uppercase'>
                                <Link href={"/"}>X (Twitter)</Link>
                            </li>
                            <li className='text-sm text-white/60 duration-200 ease-in-out hover:text-white uppercase'>
                                <Link href={"/"}>Facebook</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-center items-center pt-10'>
                    <h5 className='text-white text-sm font-normal'>
                        &copy; 2023 - Made With Love By {" "}
                        <Link
                            href={"https://ismailium.vercel.app"}
                            className='text-red-600 font-semibold'
                            target='_blank'
                        >
                            Ismailium
                        </Link>
                    </h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer;