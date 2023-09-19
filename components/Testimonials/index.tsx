import React, { useState } from 'react';
import { Icon } from '../Shared/Icon';
import testimonials from '@/static/data/Testimonials';

const Testimonials = () => {
    const [currentItem, setCurrentItem] = useState<number>(1);
    return (
        <div className='max-w-[1200px] w-full mx-auto lg:py-20 py-10 flex flex-col justify-center items-center gap-6'>
            <div className='w-full flex flex-col justify-center items-center gap-10'>
                <div className='w-full flex flex-col justify-center items-center gap-4'>
                    <h5 className='text-xs uppercase text-gray-400 font-medium'>Testimonials</h5>
                    <h1 className='text-xl md:text-4xl lg:text-5xl font-bold'>
                        What Our Clients Says
                    </h1>
                    <p className='text-sm text-gray-400 max-w-[500px] w-fu mx-auto text-center'>
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form.
                    </p>
                </div>

                {testimonials?.map((Testimonial: any) => Testimonial?.id === currentItem && (
                    <div className='w-full flex flex-col justify-center items-center gap-4' key={Testimonial?.id}>
                        <div className='flex justify-center items-center gap-3'>
                            {Array.from({ length: Testimonial?.rating }).map((_, index) => (
                                <span className='text-yellow-400' key={index}>
                                    <Icon title='BsStarFill' props={{ fontSize: 12 }} />
                                </span>
                            ))}
                        </div>
                        <p className='text-sm text-gray-400 max-w-[600px] w-fu mx-auto text-center'>
                            {Testimonial?.content}
                        </p>

                        <div className='flex flex-col justify-center items-center gap-2 mt-4'>
                            <div className='max-w-[120px] h-[120px] bg-gray-50 w-full mx-auto rounded-full overflow-hidden shadow-md shadow-gray-100 border border-gray-200 border-dashed p-2'>
                                <img
                                    src={Testimonial?.avatar}
                                    className='w-full h-full rounded-full shadow-sm shadow-gray-200 bg-gray-100'
                                    alt='User-Avatar'
                                />
                            </div>
                            <h3 className='text-xl md:text-2xl font-bold'>{Testimonial?.name}</h3>
                            <h4 className='text-xs font-normal text-gray-400'>
                                {Testimonial?.role}
                                <span className='text-black font-bold'>
                                    {" @"}{Testimonial?.company}
                                </span>
                            </h4>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex justify-center items-center gap-4'>
                <button
                    className={`p-2.5 rounded-full 
                    ${currentItem === 1 ?
                            "border border-gray-300 text-gray-300" :
                            "bg-black text-white"} active:scale-95 duration-300 ease-in-out lg:cursor-pointer cursor-default`}
                    onClick={() => { currentItem > 1 && setCurrentItem(currentItem - 1) }}
                    disabled={currentItem > 1 ? false : true}
                >
                    <Icon title='BsArrowLeft' />
                </button>
                <button
                    className={`p-2.5 rounded-full 
                    ${currentItem < testimonials?.length ?
                            "bg-black text-white" :
                            "border border-gray-300 text-gray-300"} active:scale-95 duration-300 ease-in-out lg:cursor-pointer cursor-default`}
                    onClick={() => { currentItem < testimonials?.length && setCurrentItem(currentItem + 1) }}
                    disabled={currentItem < testimonials?.length ? false : true}
                >
                    <Icon title='BsArrowRight' />
                </button>
            </div>
        </div>
    )
}

export default Testimonials;