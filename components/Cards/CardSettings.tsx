import React from 'react';
import Image from 'next/image';

const CardSettings = () => {
    return (
        <div className='mt-[30px] grid grid-cols-5 gap-2 rounded-lg bg-[#EDF3FF] p-[20px] text-[#0C365A] text-[13px] w-[414px] cursor-pointer'>
            <div className='flex flex-col items-center justify-center text-center'>
                <Image src="/FreezeCard.svg" width={32} height={32} alt='Freeze card'/>
                Freeze Card
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
                <Image src="SetSpendLimit.svg" width={32} height={32} alt='Set spend limit'/>
                Set spend limit
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
                <Image src="GPay.svg" width={32} height={32} alt='Add to GPay'/>
                Add to GPay
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
                <Image src="ReplaceCard.svg" width={32} height={32} alt='Replace card'/>
                Replace card
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
                <Image src="DeactivateCard.svg" width={32} height={32} alt='Cancel card'/>
                Cancel card
            </div>
        </div>
    )
}

export default CardSettings
