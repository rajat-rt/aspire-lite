import React, { useState, useContext } from 'react'
import Image from 'next/image';
import { Cardcontext } from '@/app/context/cardInfoContext';

const DigitalCard = () => {
    const { selectedCardsInfo } = useContext(Cardcontext);
    const [showCardNumber, setCardNumber] = useState(false);
    const dummyArr = new Array(4).fill(1);
    const isFrrezed = !selectedCardsInfo?.active;
    console.log("selectedCardsInfo", selectedCardsInfo);
    return (
        <div className='w-[414px] flex justify-center items-end flex-col'>
            <span 
                onClick={() => setCardNumber(!showCardNumber)}
                className={`float-right text-[#01D167] text-[12px] font-bold mb-[12px] cursor-pointer ${isFrrezed ? 'opacity-30 pointer-events-none': ''}`}>
                    {showCardNumber ? 
                        <><Image className="inline-flex" src='CrossedEye.svg' alt="" width={12} height={12} /> Hide Card Number </>: 
                        <><Image className="inline-flex" src='CrossedEyeOpen.svg' alt="" width={12} height={12} /> Show Card Number </>}
            </span>
            <div className={`w-[414px] h-[250px] rounded-md bg-[#01D167] p-[28px] text-white ${isFrrezed ? 'opacity-30 pointer-events-none': ''}`}>
                <Image src="WhiteLogo.svg" alt="Aspire Logo" height={24} width={84} className='float-right'/>
                <h2 className='pt-[78px] text-[24px] text-white font-bold'>{selectedCardsInfo?.cardHolderName}</h2>
                <ul className="flex items-center">
                    {Array.from({ length: 4 }).map((_, groupIndex) => (
                        <React.Fragment key={groupIndex}>
                        {showCardNumber || groupIndex === 3
                            ? selectedCardsInfo?.cardNumber
                                ?.slice(groupIndex * 4, groupIndex * 4 + 4)
                                .split('')
                                .map((digit, index) => (
                                <li key={index} className="mr-[4px]">{digit}</li>
                                ))
                            : dummyArr.map((_, index) => (
                                <li
                                key={index}
                                className="w-[10px] h-[10px] bg-white rounded-[50%] mr-[4px]"
                                />
                            ))}
                        {/* Don't add spacer after the last group */}
                        {groupIndex < 3 && <span className="px-[12px]"></span>}
                        </React.Fragment>
                    ))}
                </ul>
                <div >
                    <span className='text-[13px]'>Thru: {selectedCardsInfo?.expiryDate}</span>
                    <span className='text-[13px] ml-[60px] '>CVV: {showCardNumber ? selectedCardsInfo?.cvv: <span className='relative top-[8px] text-[24px]'>***</span>}</span>
                </div>
                <Image className="float-right" src="VisaLogo.svg" alt="card Type" width={67} height={23}/>
            </div>
        </div>
    )
}

export default DigitalCard
