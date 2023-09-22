import React from 'react';
import produtcs from '@/data/FeaturedProducts';
import { Icon } from '../Shared/Icon';

const FeaturedProducts = () => {
    return (
        <div className='max-w-[1200px] w-full mx-auto lg:py-20 py-10 flex flex-col justify-center items-center gap-10'>
            <div className='w-full flex flex-col justify-center items-center gap-4'>
                <h1 className='text-xl md:text-4xl lg:text-5xl font-bold'>
                    Featured Fashions
                </h1>
                <p className='text-sm text-gray-400 max-w-[500px] w-fu mx-auto text-center'>
                    There are many variations of passages of Lorem Ipsum available
                </p>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8'>
                {produtcs?.map((Product: any) => (
                    <div
                        className={`bg-gray-100 relative w-full rounded-2xl overflow-hidden duration-300 ease-in-out 
                        ${Product?.id === 1 || Product?.id === 3 ?
                                "lg:scale-95 scale-100" :
                                Product?.id === 2 ? "lg:scale-110 scale-100" : null}`}
                        key={Product?.id}>
                        <div className='bg-black absolute right-0 top-0 py-2 px-4 text-sm rounded-bl-2xl'>
                            <h2 className='font-semibold text-white'>
                                {Product?.category}
                            </h2>
                        </div>
                        <div className='min-h-[450px] bg-gray-100 w-full' style={{
                            backgroundImage: `url('${Product?.cover}')`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }}>
                            <div className='absolute right-0 bottom-0 p-4 h-max w-full bg-gradient-to-t from-black/70 via-black/70 to-transparent flex flex-col justify-center items-start gap-2'>
                                <p className='text-left text-sm text-white'>{Product?.description}</p>
                                <button className='w-full py-2.5 px-5 duration-300 ease-in-out rounded-lg backdrop-blur-md text-white bg-white/10 border border-gray-50/10 flex justify-center items-center gap-2 md:text-lg text-sm font-semibold hover:bg-white/20'>
                                    <span>Discover More</span>
                                    <Icon title='BsArrowRight' />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts;