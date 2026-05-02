import { CartItem } from '@/context/CartContext';

export const generateWhatsAppLink = (cart: CartItem[], totalPrice: number, phoneNumber: string) => {
  let message = 'Hello! I would like to place an order:%0A%0A';
  
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} (x${item.quantity}) - ₹${(item.price * item.quantity).toFixed(2)}%0A`;
  });
  
  message += `%0A*Total Amount: ₹${totalPrice.toFixed(2)}*%0A%0A`;
  message += 'Please confirm my order. Thank you!';

  // Clean the phone number (remove +, spaces, etc)
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  
  return `https://wa.me/${cleanPhone}?text=${message}`;
};
