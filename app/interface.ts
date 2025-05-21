export interface CardInfo {
  // Define the structure of a card
  cardHolderName: string;
  cvv: string;
  cardNumber: string,
  expiryDate: string,
  active: boolean,
  availableBalance: number,
  recentTransaction: transactionInfo[]
};
export type displayMappingType = 'transaction' | 'flight' | 'alert';

export interface transactionInfo {
    name: string,
    transactionDate: string,
    transactionAmount: string,
    description: string,
    type: 'debit' | 'credit',
    subType: displayMappingType
}

export interface CardContextType {
  selectedCardsInfo: CardInfo | null;
  setSelectedCardsInfo: React.Dispatch<React.SetStateAction<CardInfo | null>>;
  allCardsInfo: CardInfo[];
  setAllCardsInfo: React.Dispatch<React.SetStateAction<CardInfo[]>>;
  currentIndex: number,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
}