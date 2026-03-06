export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  return /^\+?[0-9]{10,}$/.test(phone);
};

export const isValidIBAN = (iban: string): boolean => {
  return /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/.test(iban);
};

export const isValidPassword = (password: string): boolean => {
  return password.length >= 8;
};

export const isValidCardNumber = (cardNumber: string): boolean => {
  const cleaned = cardNumber.replace(/\s+/g, "");
  return /^\d{13,19}$/.test(cleaned);
};
