import React from 'react';
import fashions from '@/src/static/data/Fashions';
import { Fashion } from '@/src/types/Fashion.types';
import { FashionCard } from '@/src/static/styledComponents';

const Fashions = () => {
    return (
        <div className='max-w-[1200px] w-full mx-auto lg:py-16 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8'>
            {fashions?.map((Item: Fashion) => <FashionCard Item={Item} key={Item?.id} />)}
        </div>
    )
}

export default Fashions;