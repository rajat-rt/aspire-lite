import React from 'react'
import * as Accordion from "@radix-ui/react-accordion";
import Image from 'next/image';
import TransactionList from '@/components/Cards/TransactionList';

const CardInfo = () => {
  return (
    <div>
      <Accordion.Root type="single" collapsible className="w-full max-w-md " defaultValue='item-2'>
        <Accordion.Item value="item-1" className='mb-[24px] bg-[#F5F9FF] border-[#F0F0F0] border-[1px] rounded-md'>
            <Accordion.Header>
                <Accordion.Trigger className="w-full">
                    <div className='flex items-center p-[24px] shadow-[0_0_8pt_#0000000A] cursor-pointer'>
                        <Image src='/CardDetails.svg' alt="Card details Tab" width={24} height={24}/>
                        <span className='ml-[12px] text-[#0C365A] text-[14px]'>Card details</span>
                    </div>
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="p-[24px] pt-0 bg-white rounded-md">
            Accordion Content goes here.
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2" className='mb-[24px] bg-[#F5F9FF] border-[#F0F0F0] border-[1px] rounded-md'>
            <Accordion.Header>
                <Accordion.Trigger className="w-full">
                        <div className='flex items-center p-[24px] shadow-[0_0_8pt_#0000000A] cursor-pointer'>
                            <Image src='/RecentTransaction.svg' alt="Card details Tab" width={24} height={24}/>
                            <span className='ml-[12px] text-[#0C365A] text-[14px]'>Recent transactions</span>
                        </div>
                    </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="pt-0 bg-white rounded-md">
                <TransactionList/>
            </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>
    </div>
  )
}

export default CardInfo
