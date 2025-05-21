"use client";
import { createContext, useState } from "react";

export const Cardcontext = createContext(null);

export const CardContextProvider = ({ children }) => {
    const [selectedCardsInfo, setSelectedCardsInfo] = useState({});
    const [allCardsInfo, setAllCardsInfo] = useState([])
    return (<Cardcontext.Provider value={{ selectedCardsInfo, setSelectedCardsInfo, allCardsInfo, setAllCardsInfo }}>
        {children}
    </Cardcontext.Provider>)
};