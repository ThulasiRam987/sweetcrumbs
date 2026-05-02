"use client";

import React from 'react';
import styles from './Navbar.module.css';
import { ShoppingCart, Cake } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

interface NavbarProps {
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCartClick }) => {
  const { totalItems } = useCart();

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${styles.navbar} glass`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <Cake className={styles.logoIcon} />
          <h1>Sweet Crumbs</h1>
        </div>
        
        <motion.button 
          className={styles.cartButton} 
          onClick={onCartClick} 
          aria-label="Open Cart"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <motion.span 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              className={styles.badge}
            >
              {totalItems}
            </motion.span>
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
};
