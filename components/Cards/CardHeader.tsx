import React from 'react';
import Image from 'next/image';

type CardHeaderProps = {
    amount: number
}
const CardHeader = (props: CardHeaderProps) => {
    const addNewCardHandler = () => {
        console.log("hello");
    }
    return (
        <div className='flex flex-row justify-between items-end'>
            <div >
                <h4 className='text-[#222222] text-[14px] mb-[9px]'>Available balance</h4>
                <div className='flex items-center'>
                    <span className='text-[13px] text-[#fff] bg-[#01D167] rounded-sm px-[13px] py-[2px] w-fit mr-[12px]'>S$</span>
                    <span className='text-[#222222] text-[26px] font-bold'>{props.amount || 3000}</span>
                </div>
            </div>
            <div onClick={addNewCardHandler} className='flex bg-[#325BAF] px-[12px] py-[9px] rounded-sm cursor-pointer'>
                <Image src="/PlusIcon.svg" height={16} width={16} alt="Add Card"/>
                <span className='text-[#fff] ml-[8px] text-[13px]'>New Card</span>
            </div>
        </div>
    )
}

export default CardHeader
