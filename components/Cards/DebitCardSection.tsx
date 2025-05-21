"use client";
import React, { useState, useContext, useEffect } from 'react'
import { Cardcontext } from '@/app/context/cardInfoContext';
import CardInfo from './CardInfo';
import DigitalCard from './DigitalCard';
import CardSettings from './CardSettings';
import SimpleCarousel from '@/components/Carousel';

const DebitCardSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { allCardsInfo, setSelectedCardsInfo } = useContext(Cardcontext);
    
    useEffect(() => {
        setSelectedCardsInfo(() => allCardsInfo[currentIndex])
    },[currentIndex])
   console.log("--->>>, ", allCardsInfo);
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
