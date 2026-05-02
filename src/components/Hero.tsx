"use client";

import React from 'react';
import styles from './Hero.module.css';
import { birthdayOffers } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const offer = birthdayOffers[0];
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={styles.heroWrapper}
    >
      <div className={styles.heroBackground} style={{ backgroundImage: `url('${offer.image}')` }}>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.heroContent}>
        <motion.span 
          className={styles.tag}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Limited Time Offer
        </motion.span>
        <h2>{offer.name}</h2>
        <p>{offer.description}</p>
        <motion.button 
          className={styles.ctaButton} 
          onClick={() => addToCart(offer)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Order Now
        </motion.button>
      </div>
    </motion.div>
  );
};
