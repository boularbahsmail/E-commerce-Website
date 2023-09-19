import React from "react";
import Link from "next/link";
import { Icon } from "../Shared/Icon";

export const FashionCard = ({ Item }: any) => {
    return (
        <div className={`w-full flex ${Item?.isReversed ? "flex-col-reverse" : "flex-col"} justify-center items-center gap-6`}>
            <div className={`relative overflow-hidden w-full rounded-3xl shadow-xl shadow-gray-100`} style={{
                backgroundImage: `url(${Item?.cover})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                maxHeight: 450,
                height: "100vh"
            }}>
                <Link href={"/"} className='absolute lg:left-0 left-6 lg:top-0 bottom-6 w-full lg:h-full lg:backdrop-blur-md lg:p-6 lg:bg-black/50 flex lg:justify-center justify-start items-center lg:opacity-0 duration-300 ease-in-out hover:opacity-100 lg:max-w-full max-w-[300px] lg:cursor-pointer cursor-default'>
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
    );
};

export const ServiceCard = ({ Service }: any) => {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-3'>
            <span className='text-white'>
                <Icon title={Service?.icon} props={{ fontSize: 60 }} />
            </span>
            <h2 className='text-white lg:text-2xl text-xl font-semibold'>
                {Service?.title}
            </h2>
            <p className='text-sm text-white/70 text-center'>
                {Service?.description}
            </p>
        </div>
    );
};