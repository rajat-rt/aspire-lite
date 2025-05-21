"use client";
import React, { useState } from 'react'
import CardHeader from './CardHeader'
import CardInfo from './CardInfo';
import DigitalCard from './DigitalCard';
import CardSettings from './CardSettings';
import SimpleCarousel from '@/components/Carousel';
import data from '@/data/cardDetails';

const card = {
    name: 'Mark Henry',
    expiry: '12/20',
    cvv: '234',
    cardNumber: '1232123423232343'
}
const MyDebitCards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className='grid grid-cols-2 items-start shadow-[0pt_2pt_12pt_#00000014] p-[40px] rounded-md transition-opacity duration-900 ease-in-out opacity-100'>
            <div>
                <SimpleCarousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} totalList={data.length}>
                    <>
                        <DigitalCard card={data[currentIndex]} ></DigitalCard>
                        
                    </>
                </SimpleCarousel>
                <CardSettings></CardSettings>
            </div>
            <CardInfo/>
        </div>
    )
};
const AllCompanyCards = () => {
    return (<div className='grid grid-cols-2 items-start shadow-[0pt_2pt_12pt_#00000014] p-[40px] rounded-md transition-opacity duration-900 ease-in-out opacity-100'>All company cards ....</div>)
}

const options = {
    'my-debit-card': {
    name: 'My debit cards',
    comp: <MyDebitCards/>
}, 'all-company-cards': {
    name: 'All company cards',
    comp: <AllCompanyCards/>
}};


const Cards = () => {
    const [selectedOptions, setSelectedOptions] = useState('my-debit-card');
    return (
        <div className='p-[60px]'>
            <CardHeader/>
            <div className='flex flex-row mb-[12px] mt-[40px]'>
                {Object.keys(options).map((op, index) => {
                    return (<div 
                        key={index}
                        className={`text-[14px] text-[#222222] mr-[32px] cursor-pointer ${selectedOptions != op ? 'opacity-30 ': 'border-b border-[#23CEFD] border-b-[2px]'}`}
                        onClick={() => setSelectedOptions(op)}>
                    {options[op].name}</div>) 
                })}
            </div>
            {options[selectedOptions].comp}
        </div>
    )
}

export default Cards
