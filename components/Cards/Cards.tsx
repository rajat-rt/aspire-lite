"use client";
import React, { useContext, useEffect, useState } from 'react'
import CardHeader from './CardHeader'
import DebitCardSection from './DebitCardSection';
import AllCompanyCards from './AllCardCompanySection';
import { Cardcontext } from '@/app/context/cardInfoContext';

const options = {
    'my-debit-card': {
    name: 'My debit cards',
    comp: <DebitCardSection/>
}, 'all-company-cards': {
    name: 'All company cards',
    comp: <AllCompanyCards/>
}};


const Cards = () => {
    const [selectedOptions, setSelectedOptions] = useState('my-debit-card');
    const { setAllCardsInfo, setSelectedCardsInfo } = useContext(Cardcontext);

    const fetchData = async () => {
        let res = await fetch('/api/debit-card/');
        let data = await res.json();
        setAllCardsInfo(() => data);
        setSelectedCardsInfo(() => data[0]);
    }
    useEffect(() => {
        fetchData();
    }, []);
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
