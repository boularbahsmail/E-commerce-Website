import React from 'react';
import fashions from '@/src/static/Fashions';
import { Fashion } from '@/src/types/Fashion.types';
import Link from 'next/link';

const Fashions = () => {
    return (
        <div className='max-w-[1200px] w-full mx-auto lg:py-16 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8'>
            {fashions?.map((Item: Fashion) => (
                <div className={`${Item?.style}`} key={Item?.id}>
                    <div className='relative overflow-hidden w-full rounded-3xl shadow-xl shadow-gray-100' style={{
                        maxHeight: 450,
                        height: "100vh"
                    }}>
                        <img src={Item?.cover} alt='Fashion-Section-Cover' className='w-full h-auto' />
                        <Link href={"/"} className='absolute lg:left-0 left-6 lg:top-0 bottom-6 w-full lg:h-full lg:backdrop-blur-md lg:p-6 lg:bg-black/50 flex lg:justify-center justify-start items-center lg:opacity-0 duration-300 ease-in-out hover:opacity-100'>
                            <h2 className='font-bold text-white text-3xl lg:text-3xl lg:text-center text-left lg:hover:underline underline lg:max-w-max max-w-[250px] w-full'>
                                {Item?.title}
                            </h2>
                        </Link>
                    </div>
                    <div>
                        <p className='text-sm text-gray-400 max-w-[700px] w-full mx-auto text-center'>
                            {Item?.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Fashions;