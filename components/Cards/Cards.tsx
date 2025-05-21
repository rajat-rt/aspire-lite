"use client";
import React, { useEffect, useState } from 'react'
import CardHeader from './CardHeader'
import DebitCardSection from './DebitCardSection';
import AllCompanyCards from './AllCardCompanySection';
import { useCardInfoContext } from '@/app/context/cardInfoContext';

const options = {
    'my-debit-card': {
    name: 'My debit cards',
    comp: <DebitCardSection/>
}, 'all-company-cards': {
    name: 'All company cards',
    comp: <AllCompanyCards/>
}};

type OptionKey = 'my-debit-card' | 'all-company-cards';

const Cards = () => {
    const [selectedOptions, setSelectedOptions] = useState<OptionKey>('my-debit-card');
    const { setAllCardsInfo, setSelectedCardsInfo } = useCardInfoContext();

    const fetchData = async () => {
        try {
            const res = await fetch('/api/debit-card/');
            const data = await res.json();
            setAllCardsInfo(data);
            if (data.length > 0) {
            setSelectedCardsInfo(data[0]);
            }
        } catch (error) {
            console.error("Failed to fetch cards", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='p-[60px]'>
            <CardHeader/>
            <div className='flex flex-row mb-[12px] mt-[40px]'>
                {(Object.keys(options) as OptionKey[]).map((op, index) => {
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
