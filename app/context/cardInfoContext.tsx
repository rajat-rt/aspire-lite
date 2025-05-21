"use client";
import { createContext, useState, ReactNode, useContext } from "react";
import { CardInfo, CardContextType } from '@/app/interface';

export const Cardcontext = createContext<CardContextType | null>(null);
interface ProviderProps {
  children: ReactNode;
}

export const CardContextProvider = ({ children }: ProviderProps) => {
    const [selectedCardsInfo, setSelectedCardsInfo] = useState<CardInfo | null>(null);
    const [allCardsInfo, setAllCardsInfo] = useState<CardInfo[]>([])
    return (<Cardcontext.Provider value={{ selectedCardsInfo, setSelectedCardsInfo, allCardsInfo, setAllCardsInfo }}>
        {children}
    </Cardcontext.Provider>)
};


export const useCardInfoContext = () => {
  const context = useContext(Cardcontext);
  if (!context) {
    throw new Error("useCardInfoContext must be used within a CardContextProvider");
  }
  return context;
}