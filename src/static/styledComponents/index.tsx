import React from "react";
import Link from "next/link";

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
    );
};