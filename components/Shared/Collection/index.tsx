import React from 'react';
import { Icon } from '../Icon';
import Link from 'next/link';
import { Collection } from '@/types/Collection.types';

const Collection = ({ type, gender, image, clothesTypes, clothesCollection }: Collection) => {
    return (
        <div className='max-w-[1200px] w-full mx-auto py-10 flex flex-col justify-center items-start gap-8'>
            <div className='flex flex-col justify-center items-start gap-2'>
                <h1 className='text-4xl lg:text-4xl font-bold'>For {gender}'s Collection</h1>
                <p className='text-sm text-gray-400'>
                    There are many variations of passages of Lorem Ipsum available.
                </p>
            </div>

            <div className='w-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10'>
                <div className={`w-full flex flex-col justify-center items-start gap-6 ${type === 1 ? "order-2" : "order-1"}`}>
                    <div className='w-full flex justify-start items-center gap-x-6 gap-y-3 flex-wrap'>
                        {clothesTypes?.map((ClothesType: any) => (
                            <button
                                className={`uppercase text-sm 
                                ${clothesTypes.indexOf(ClothesType) == 0
                                        ? "font-medium text-black"
                                        : "font-light text-gray-400"}`}
                                key={clothesTypes.indexOf(ClothesType)}
                            >
                                {ClothesType}
                            </button>

                        ))}
                    </div>

                    <div className='w-full grid grid-cols-2 lg:grid-cols-3 place-items-center gap-6'>
                        {clothesCollection?.map((ClothesItem: any) => (
                            <div
                                className='w-full flex flex-col justify-center items-center gap-4 duration-300 ease-in-out hover:scale-105'
                                key={ClothesItem?.id}
                            >
                                <div className='relative w-full bg-gray-100 rounded-2xl p-4 border border-gray-100'>
                                    <div className='w-full' style={{
                                        minHeight: 150,
                                        height: 100,
                                        backgroundImage: `url(${ClothesItem?.image})`,
                                        backgroundSize: "100%",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center"
                                    }}>
                                        <div className='absolute left-2 top-2'>
                                            <button className={`h-8 w-8  flex justify-center items-center bg-black ${ClothesItem?.liked ? "text-red-600" : "text-white"} rounded-lg active:scale-95 lg:cursor-pointer cursor-default`}>
                                                <Icon title={ClothesItem?.liked ? "BsHeartFill" : "BsHeart"} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full flex flex-col justify-center items-center gap-3'>
                                    <div className='w-full flex justify-center items-center gap-2'>
                                        {Array.from({ length: ClothesItem?.rating }).map((_, index) => (
                                            <span className='text-yellow-400' key={index}>
                                                <Icon title='BsStarFill' props={{ fontSize: 12 }} />
                                            </span>
                                        ))}
                                    </div>

                                    <Link href={"/"} className='text-center font-medium text-sm hover:underline w-[80%] mx-auto'>
                                        {ClothesItem?.title}
                                    </Link>
                                </div>
                            </div>
                        ))}

                        <div className='w-full h-full flex justify-center items-center lg:px-2 px-10 text-center'>
                            <Link
                                href={"/"}
                                className='flex flex-col justify-center items-center gap-3 font-medium text-center hover:underline h-max'>
                                <span className='lg:text-lg text-md'>Get to discover more</span>
                                <Icon title='BsArrowRight' props={{ fontSize: 20 }} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={`w-full mx-auto overflow-hidden rounded-3xl ${type === 1 ? "order-1" : "order-2"}`}>
                    <img src={image} className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default Collection;