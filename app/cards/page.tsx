import React from 'react';
import Cards from '@/components/Cards/Cards';
import { CardContextProvider } from '@/app/context/cardInfoContext';

const page = () => {
  return (
    <CardContextProvider>
      <Cards/>
    </CardContextProvider>
  )
}

export default page
