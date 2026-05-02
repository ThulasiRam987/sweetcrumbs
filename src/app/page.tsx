"use client";

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { CartDrawer } from '@/components/CartDrawer';
import { allProducts, cakes, snacks, juices } from '@/data/products';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'cake' | 'snack' | 'juice'>('all');

  const getProducts = () => {
    switch (activeTab) {
      case 'cake': return cakes;
      case 'snack': return snacks;
      case 'juice': return juices;
      default: return allProducts;
    }
  };

  return (
    <main>
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <Hero />
        
        <section style={{ margin: '4rem 0' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {['all', 'cake', 'snack', 'juice'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab as 'all' | 'cake' | 'snack' | 'juice')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.75rem 2.5rem',
                  borderRadius: '30px',
                  background: activeTab === tab ? 'var(--gradient-primary)' : 'var(--gradient-glass)',
                  color: activeTab === tab ? 'white' : 'var(--color-primary-dark)',
                  border: activeTab === tab ? '1px solid transparent' : '1px solid rgba(255,255,255,0.8)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textTransform: 'capitalize',
                  boxShadow: activeTab === tab ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  transition: 'var(--transition-fast)'
                }}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            key={activeTab}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {getProducts().map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </section>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </main>
  );
}
