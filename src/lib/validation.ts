export const validateName = (name: string): boolean => {
  return name.trim().length >= 3;
};

export const validateRegistrationNumber = (regNumber: string): boolean => {
  // Support format: CT201/111945/23
  return /^[A-Z]{2}\d{3}\/\d{6}\/\d{2}$/i.test(regNumber);
};

export const validatePhoneNumber = (phone: string): boolean => {
  // Kenyan phone number format
  return /^(\+254|0)[17]\d{8}$/.test(phone);
};