"use client";
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useCardInfoContext } from '@/app/context/cardInfoContext'
import Modal from '@/components/Modal';
import {
    generateRandomNumber,
    generateRandomExpiryDate,
} from '@/app/utils';
import {
    DEFAULT_MAX_AVAILABLE_AMOUNT,
    DEFAULT_CARD_STATUS
} from '@/app/constants';

const CardHeader = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [cardHolderName, setCardHolderName] = useState<string>("");
    const { selectedCardsInfo, allCardsInfo, setAllCardsInfo, setCurrentIndex } = useCardInfoContext();

    const addNewCardHandler = () => {
        if(cardHolderName === '')
            return ;
        let cardPayload = {
            cardHolderName,
            cvv: '',
            cardNumber: '',
            expiryDate: '',
            active: DEFAULT_CARD_STATUS,
            availableBalance: DEFAULT_MAX_AVAILABLE_AMOUNT,
            recentTransaction: []
        };
        cardPayload.cardNumber = generateRandomNumber(16);
        cardPayload.expiryDate = generateRandomExpiryDate();
        cardPayload.cvv = generateRandomNumber(3);
        setCardHolderName("");
        setIsOpen(false);
        setAllCardsInfo(() => [...allCardsInfo, cardPayload ]);
        setCurrentIndex(allCardsInfo.length);
    };

    const modalActionBtnList = useMemo(() => [{
        label: 'Cancel',
        callBack: () => setIsOpen(false),
        type: 'secondary',
    }, {
        label: 'Save',
        callBack: addNewCardHandler,
        type: 'primary',
        disabled: cardHolderName === ''
    }], [selectedCardsInfo, cardHolderName]);

    return (
        <div className='flex flex-row justify-between items-end'>
            <div >
                <h4 className='text-[#222222] text-[14px] mb-[9px]'>Available balance</h4>
                <div className='flex items-center'>
                    <span className='text-[13px] text-[#fff] bg-[#01D167] rounded-sm px-[13px] py-[2px] w-fit mr-[12px]'>S$</span>
                    <span className='text-[#222222] text-[26px] font-bold'>{selectedCardsInfo?.availableBalance}</span>
                </div>
            </div>
            <div onClick={() => setIsOpen(true)} className='flex bg-[#325BAF] px-[12px] py-[9px] rounded-sm cursor-pointer'>
                <Image src="/PlusIcon.svg" height={16} width={16} alt="Add Card"/>
                <span className='text-[#fff] ml-[8px] text-[13px]'>New Card</span>
            </div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} actionList={modalActionBtnList}>
                <div className='py-[20px] h-[250px]'>
                    <h2 className="text-lg font-semibold mb-4">Adding a New card</h2>
                    <input type="text" 
                        value={cardHolderName} 
                        placeholder='Enter the card holder Name...' 
                        onChange={(e) => setCardHolderName(() => e.target.value)}
                        className='w-full px-[12px] py-[6px] border border-grey-500 rounded-md'/>
                </div>
            </Modal>
        </div>
    )
}

export default CardHeader
