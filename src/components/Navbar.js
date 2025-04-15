import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaStore } from 'react-icons/fa';

const Navbar = () => {
  const [cartCount] = useState(0);

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
              <FaStore size={24} style={{ marginRight: '10px' }} />
              <Typography variant="h6" component="div">
                ShopHub
              </Typography>
            </Link>
          </motion.div>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}>
              <Typography variant="subtitle1">Products</Typography>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
              <IconButton color="inherit">
                <Badge badgeContent={cartCount} color="secondary">
                  <FaShoppingCart />
                </Badge>
              </IconButton>
            </Link>
          </motion.div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
