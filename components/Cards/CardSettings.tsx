import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Modal from '../Modal';
import { Cardcontext } from '@/app/context/cardInfoContext';

const CardSettings = () => {
    const [openFreezeModal, setFreezeModal] = useState(false);
    const { selectedCardsInfo, allCardsInfo, setAllCardsInfo  } = useContext(Cardcontext);
    const isFreezed = !selectedCardsInfo?.active;
    const handleFreezeOperation = () => {
        const updateAllCardInfo =  allCardsInfo.map((card) => {
            if(card.cardNumber === selectedCardsInfo.cardNumber){
                card.active = !card.active;
            }
            return card;
        });
        setAllCardsInfo(() => updateAllCardInfo);
        setFreezeModal(false);
    }

    const modalActionBtnList = [{
        label: 'Cancel',
        callBack: () => setFreezeModal(false),
        type: 'secondary'
    }, {
        label: 'Ok',
        callBack: handleFreezeOperation,
        type: 'primary'
    }];
 
    return (
        <div className='mt-[30px] grid grid-cols-5 gap-2 rounded-lg bg-[#EDF3FF] p-[20px] text-[#0C365A] text-[13px] w-[414px] cursor-pointer'>
            <div className='flex flex-col items-center justify-center text-center' onClick={() => setFreezeModal(true)}>
                <Image src="/FreezeCard.svg" width={32} height={32} alt='Freeze card'/>
                {isFreezed ? 'Un Freeze Card' : 'Freeze Card'}
            </div>
            <Modal isOpen={openFreezeModal} onClose={() => setFreezeModal(false)} actionList={modalActionBtnList}>
                <div className='h-[300px] py-[20px] flex flex-col items-center justify-center'>
                    {isFreezed ? <><h2 className='text-red-500 text-[24px] font-bold'>Warning!</h2>
                        <p className='text-[#0C365A] text-[14px]'>Your Card will un freeze...</p></>: <><h2 className='text-red-500 text-[24px] font-bold'>Warning!</h2>
                        <p className='text-[#0C365A] text-[14px]'>Your Card will freeze...</p></>}
                </div>
            </Modal>
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
