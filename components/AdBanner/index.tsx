import React from 'react';
import { Icon } from '../Shared/Icon';

const AdBanner = () => {
    return (
        <div className='max-w-[1200px] w-full mx-auto lg:py-20 py-10'>
            <div className='relative w-full md:p-10 p-4 rounded-3xl overflow-hidden' style={{
                backgroundImage: "url('/assets/images/adbanner-img.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                maxHeight: 500,
                height: "100vh"
            }}>
                <div className='w-full max-w-[600px] flex flex-col justify-center items-start lg:gap-5 gap-4 backdrop-blur-xl bg-white/40 p-6 rounded-2xl'>
                    <h1 className='text-black font-bold text-3xl md:text-4xl lg:text-5xl'>
                        Start By Getting Over <span className='text-red-600'>-50%</span> Discounts Now
                    </h1>
                    <p className='text-sm text-left text-gray-700'>
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form.
                    </p>
                    <button
                        className='flex justify-start items-center gap-3 text-white md:text-lg text-sm font-medium py-2.5 px-5 bg-black rounded-[10px] duration-300 ease-in-out lg:cursor-pointer cursor-default active:duration-0 active:scale-95'
                        title='Get The Unlimitted Access'>
                        <span>Get The Unlimitted Access</span>
                        <Icon title='BsArrowRight' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdBanner;