import React from 'react';
import { Icon } from '../Icon';
import { cartItems } from '@/data/Cart';

interface propsState {
    cartOpen: boolean;
    setCartOpen: Function
}

const Cart = ({ cartOpen, setCartOpen }: propsState) => {
    return (
        <div className={`z-50 absolute ${cartOpen ? "left-0" : "-left-full"} top-0 h-screen md:max-w-[450px] w-full bg-white duration-300 ease-in-out shadow-2xl shadow-gray-500`} style={{ zIndex: 9999 }}>
            <div className='absolute w-full top-2 left-0 flex justify-between items-center gap-6 py-2 md:px-6 px-4'>
                <h1 className='text-2xl md:text-3xl font-bold'>Shopping Cart</h1>
                <button onClick={() => { setCartOpen(false) }}>
                    <Icon title='MdClose' props={{ fontSize: 20 }} />
                </button>
            </div>

            <div className='w-full flex flex-col justify-center items-start gap-4 mt-16 p-4'>
                {cartItems?.map((CartItem: any) => (
                    <div className='relative w-full bg-gray-100 rounded-2xl p-4 border border-gray-100 flex justify-start items-center gap-4'>
                        <div className='max-w-[150px] w-full'
                            style={{
                                maxHeight: 150,
                                height: 100,
                                backgroundImage: `url(${CartItem?.image})`,
                                backgroundSize: "60%",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center"
                            }}
                            key={CartItem?.id}
                        >
                            <div className='absolute left-2 top-2'>
                                <button className={`h-8 w-8  flex justify-center items-center bg-black ${CartItem?.liked ? "text-red-600" : "text-white"} rounded-lg active:scale-95 lg:cursor-pointer cursor-default`}>
                                    <Icon title={CartItem?.liked ? "BsHeartFill" : "BsHeart"} />
                                </button>
                            </div>
                        </div>

                        <div className='w-full flex flex-col justify-center items-start gap-1'>
                            <h3 className='font-semibold'>{CartItem?.title}</h3>
                            <p className='text-xs text-gray-600 font-extralight'>
                                {CartItem?.description}
                            </p>
                            <h5 className='text-lg font-bold text-red-700'>
                                ${CartItem?.price}
                            </h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart;