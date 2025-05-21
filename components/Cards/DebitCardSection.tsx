"use client";
import React, { useState, useEffect } from 'react'
import { useCardInfoContext } from '@/app/context/cardInfoContext';
import CardInfo from './CardInfo';
import DigitalCard from './DigitalCard';
import CardSettings from './CardSettings';
import SimpleCarousel from '@/components/Carousel';

const DebitCardSection = () => {

    const { allCardsInfo, setSelectedCardsInfo, currentIndex,  setCurrentIndex} = useCardInfoContext();
    
    useEffect(() => {
        setSelectedCardsInfo(() => allCardsInfo[currentIndex])
    },[currentIndex])

    return (
        <div className='grid grid-cols-2 items-start shadow-[0pt_2pt_12pt_#00000014] p-[40px] rounded-md transition-opacity duration-900 ease-in-out opacity-100'>
            <div>
                <SimpleCarousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} totalList={allCardsInfo?.length}>
                    <DigitalCard />
                </SimpleCarousel>
                <CardSettings></CardSettings>
            </div>
            <CardInfo/>
        </div>
    )
};
export default DebitCardSection
