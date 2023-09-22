import React from 'react';
import services from '@/data/Services';
import { Service } from '@/types/Services.types';
import { ServiceCard } from '../styledComponents';

const FeaturedServices = () => {
    return (
        <div className='max-w-[1200px] w-full mx-auto lg:py-16 py-10'>
            <div className='lg:p-20 lg:py-28 py-14 p-10 rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 Patterns'>
                {services?.map((Service: Service) => (
                    <ServiceCard Service={Service} key={Service?.id} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedServices;