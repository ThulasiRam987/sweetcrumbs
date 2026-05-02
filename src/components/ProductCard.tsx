import React from 'react';
import styles from './ProductCard.module.css';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Plus } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      className={styles.card}
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} loading="lazy" />
        <span className={styles.categoryBadge}>{product.category}</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{product.name}</h3>
        {product.description && <p className={styles.description}>{product.description}</p>}
        <div className={styles.footer}>
          <span className={styles.price}>₹{product.price.toFixed(2)}</span>
          <motion.button 
            className={styles.addButton} 
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <Plus size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
