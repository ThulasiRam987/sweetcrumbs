"use client";

import React, { useEffect } from 'react';
import styles from './CartDrawer.module.css';
import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, MessageCircle, Trash2 } from 'lucide-react';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { motion, AnimatePresence } from 'framer-motion';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleCheckout = () => {
    const phoneNumber = '+919360419893';
    const link = generateWhatsAppLink(cart, totalPrice, phoneNumber);
    window.open(link, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className={styles.backdrop} 
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className={styles.drawer}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className={styles.header}>
              <h2>Your Cart</h2>
              <div className={styles.headerActions}>
                {cart.length > 0 && (
                  <motion.button 
                    className={styles.clearBtn} 
                    onClick={clearCart} 
                    aria-label="Clear cart" 
                    title="Clear cart"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Trash2 size={20} />
                  </motion.button>
                )}
                <motion.button 
                  className={styles.closeBtn} 
                  onClick={onClose} 
                  aria-label="Close cart"
                  whileHover={{ rotate: 90 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
            </div>

            <div className={styles.content}>
              {cart.length === 0 ? (
                <div className={styles.emptyCart}>
                  <p>Your cart is empty.</p>
                  <motion.button 
                    className={styles.continueBtn} 
                    onClick={onClose}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Continue Shopping
                  </motion.button>
                </div>
              ) : (
                <div className={styles.itemsList}>
                  <AnimatePresence>
                    {cart.map(item => (
                      <motion.div 
                        key={item.id} 
                        className={item.category === 'offer' ? styles.offerItem : styles.cartItem}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, x: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img src={item.image} alt={item.name} className={styles.itemImage} />
                        <div className={styles.itemInfo}>
                          <h4>{item.name}</h4>
                          {item.category === 'offer' && (
                            <p className={styles.offerDetails}>{item.description}</p>
                          )}
                          <span className={styles.itemPrice}>₹{item.price.toFixed(2)}</span>
                          <div className={styles.quantityControls}>
                            <motion.button whileTap={{ scale: 0.9 }} onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={14} /></motion.button>
                            <span>{item.quantity}</span>
                            <motion.button whileTap={{ scale: 0.9 }} onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={14} /></motion.button>
                          </div>
                        </div>
                        <motion.button 
                          className={styles.removeBtn} 
                          onClick={() => removeFromCart(item.id)}
                          whileHover={{ scale: 1.2, color: 'var(--color-primary)' }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <X size={20} />
                        </motion.button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className={styles.footer}>
                <div className={styles.total}>
                  <span>Total</span>
                  <span className={styles.gradientTotal}>₹{totalPrice.toFixed(2)}</span>
                </div>
                <motion.button 
                  className={styles.checkoutBtn} 
                  onClick={handleCheckout}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageCircle size={20} />
                  Checkout via WhatsApp
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
