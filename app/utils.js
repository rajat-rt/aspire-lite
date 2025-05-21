import { DEFAULT_MAX_EXPIRY_DATE } from './constants';

export const generateRandomNumber = (length = 16) => {
  let cardNumber = '';
  for (let i = 0; i < length; i++) {
    cardNumber += Math.floor(Math.random() * 10); // Adds a digit between 0-9
  }
  return cardNumber;
}

export const generateRandomExpiryDate = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-indexed (Jan = 0)
  const maxYear = currentYear + DEFAULT_MAX_EXPIRY_DATE;

  // Generate random future year within range
  const year = Math.floor(Math.random() * (maxYear - currentYear + 1)) + currentYear;

  let month;
  if (year === currentYear) {
    // Ensure month is not in the past
    month = Math.floor(Math.random() * (12 - currentMonth)) + currentMonth + 1;
  } else {
    month = Math.floor(Math.random() * 12) + 1;
  }

  const formattedMonth = month.toString().padStart(2, '0');
  const formattedYear = year.toString().slice(-2);

  return `${formattedMonth}/${formattedYear}`;
};
