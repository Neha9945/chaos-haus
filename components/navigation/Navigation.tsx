'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollDirection } from '@/lib/hooks';
import { COLORS } from '@/lib/constants';

interface NavItem {
  label: string;
  hover: string;
  href?: string;
}

const navItems: NavItem[] = [
  { label: 'ARCHIVE', hover: 'ENTER THE RECORD' },
  { label: 'WORLD', hover: 'EXPLORE THE HAUS' },
  { label: 'SHOP', hover: 'ENTER THE WARDROBE' },
];

const navVariants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: -80, opacity: 0 },
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldHide = isScrolled && scrollDirection === 'down';

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 px-6 py-8 md:px-12"
      variants={navVariants}
      initial="visible"
      animate={shouldHide ? 'hidden' : 'visible'}
      transition={{ duration: 0.4 }}
      style={{
        backgroundColor: isScrolled ? `rgba(243, 238, 228, 0.95)` : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-xs tracking-widest font-display"
          style={{ color: COLORS.black }}
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.3 }}
        >
          CHAOS HAUS®
        </motion.div>

        {/* Center Navigation */}
        <div className="hidden md:flex gap-12 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item, i) => (
            <NavLink key={i} item={item} isScrolled={isScrolled} />
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex gap-8 items-center">
          <motion.button
            className="text-xs tracking-widest font-display hover:opacity-50 transition-opacity"
            style={{ color: COLORS.black }}
            whileHover={{ opacity: 0.6 }}
            transition={{ duration: 0.3 }}
            aria-label="Search"
          >
            SEARCH
          </motion.button>
          <motion.button
            className="text-xs tracking-widest font-display hover:opacity-50 transition-opacity"
            style={{ color: COLORS.black }}
            whileHover={{ opacity: 0.6 }}
            transition={{ duration: 0.3 }}
            aria-label="Shopping bag"
          >
            BAG
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

interface NavLinkProps {
  item: NavItem;
  isScrolled: boolean;
}

function NavLink({ item, isScrolled }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.a
        href={item.href || '#'}
        className="text-xs tracking-widest font-display block"
        style={{ color: COLORS.black }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {item.label}
      </motion.a>
      <motion.div
        className="absolute top-0 left-0 text-xs tracking-widest font-display"
        style={{ color: COLORS.olive }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {item.hover}
      </motion.div>
    </motion.div>
  );
}
