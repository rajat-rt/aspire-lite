
import React, { useState } from 'react'
import Image from 'next/image';
import { useCardInfoContext } from '@/app/context/cardInfoContext';
import { transactionInfo, displayMappingType } from '@/app/interface';

const displayMapping: Record<displayMappingType, { color: string, icon: string}> = {
    'transaction': {
        color: 'bg-[#009DFF1A]',
        icon: 'Transaction.svg',
    },
    'flight': {
        color: 'bg-[#00D6B51A]',
        icon: 'Flights.svg',
    },
    'alert': {
        color: 'bg-[#F251951A]',
        icon: 'Alert.svg',
    }
}

const MAX_TRANSACTION_LIMIT = 2;
interface ListProps {
  item: transactionInfo;
  index: number;
}
const List: React.FC<ListProps> = ({ item , index }) => {
    let imageSrc = displayMapping[item?.subType ?? 'transaction'];
    return (<li className='flex px-[24px] items-start py-[20px] border-[#F5F5F5] border-b' key={index}>
                <div className={`flex items-center justify-center rounded-[50%] w-[48px] h-[48px] ${imageSrc.color}`}>
                    <Image src={imageSrc.icon} alt="transaction-logo" width={16} height={16} />
                </div>
                <div className='w-[88%] pl-[12px]'>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-[#222222] text-[14px]'>{item.name}</h4>
                        <span className={`${item.type === 'debit' ? 'text-[#222222]' :'text-[#01D167]'}`}>{item.type == 'debit' ? '-': '+'}{item.transactionAmount}</span>
                    </div>
                    <div className='text-[#AAAAAA] text-[13px]'>{item.transactionDate}</div>
                    <div>
                        <div className='bg-[#325BAF] rounded-[50%] w-[24px] h-[20px]  inline-flex justify-center items-center'>
                            <Image src='FileStorage.svg' alt="transaction details" width={10} height={8}/>
                        </div>
                        <span className='text-[#325BAF] text-[12px] pl-[8px]'>{item.description}</span>
                    </div>
                </div>
            </li>)
}

const TransactionList = () => {
    const [allTransaction, setAllTransaction] = useState(false);
    const { selectedCardsInfo } = useCardInfoContext();
    if(selectedCardsInfo?.recentTransaction && selectedCardsInfo?.recentTransaction?.length === 0) {
        return <p className='flex justify-center items-center h-[150px] text-[12px] text-[#222222] opacity-40'>No data Found</p>
    }
    return (
        <div>
        <ul className='max-h-[218px] overflow-scroll'>
            {selectedCardsInfo?.recentTransaction?.slice(0,MAX_TRANSACTION_LIMIT).map((item, index) => {
                return <List item={item} index={index} key={index}/>
            })}
            {selectedCardsInfo?.recentTransaction?.length ?? 0 > MAX_TRANSACTION_LIMIT ? <>
                {allTransaction ? <>
                    {selectedCardsInfo?.recentTransaction?.slice(MAX_TRANSACTION_LIMIT,).map((item, index) => {
                        return <List item={item} index={index} key={index}/>
                    })}
                    </>: ''}
            </>: null}
        </ul>
        {allTransaction ? 
            <div className='bg-[#F251951A] py-[16px] flex justify-center cursor-pointer'>
                <button className="text-[#e047ee] text-[13px] cursor-pointer"onClick={() => setAllTransaction(false)}>Colapse all card transaction </button>
            </div>: 
            <div className='bg-[#EDFFF5] py-[16px] flex justify-center cursor-pointer'>
                <button  className="text-[#01D167] text-[13px] cursor-pointer" onClick={() => setAllTransaction(true)}>View all card transaction</button>
            </div>
        }
        </div>
    )
}

export default TransactionList
