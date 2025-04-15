import { useState } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box, Rating, Chip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

const Products = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const productsRef = useScrollReveal();
  const filterRef = useScrollReveal();

  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Sports'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 199.99,
      image: 'https://source.unsplash.com/600x400/?headphones',
      category: 'Electronics',
      rating: 4.5,
      reviews: 128,
      description: 'High-quality sound with active noise cancellation'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 299.99,
      image: 'https://source.unsplash.com/600x400/?smartwatch',
      category: 'Electronics',
      rating: 4.8,
      reviews: 256,
      description: 'Track your fitness goals with precision'
    },
    {
      id: 3,
      name: 'Ultra-Slim Laptop',
      price: 1299.99,
      image: 'https://source.unsplash.com/600x400/?laptop',
      category: 'Electronics',
      rating: 4.7,
      reviews: 512,
      description: 'Powerful performance in a sleek design'
    },
    {
      id: 4,
      name: 'Premium Smartphone',
      price: 899.99,
      image: 'https://source.unsplash.com/600x400/?smartphone',
      category: 'Electronics',
      rating: 4.6,
      reviews: 384,
      description: 'Latest technology at your fingertips'
    },
    {
      id: 5,
      name: 'Gaming Console',
      price: 499.99,
      image: 'https://source.unsplash.com/600x400/?gaming-console',
      category: 'Electronics',
      rating: 4.9,
      reviews: 1024,
      description: 'Next-gen gaming experience'
    },
    {
      id: 6,
      name: 'Professional Camera',
      price: 1499.99,
      image: 'https://source.unsplash.com/600x400/?camera',
      category: 'Electronics',
      rating: 4.8,
      reviews: 256,
      description: 'Capture moments in stunning detail'
    },
    {
      id: 7,
      name: 'Designer Watch',
      price: 399.99,
      image: 'https://source.unsplash.com/600x400/?luxury-watch',
      category: 'Fashion',
      rating: 4.7,
      reviews: 128,
      description: 'Elegant timepiece for any occasion'
    },
    {
      id: 8,
      name: 'Smart Home Hub',
      price: 199.99,
      image: 'https://source.unsplash.com/600x400/?smart-home',
      category: 'Home',
      rating: 4.5,
      reviews: 192,
      description: 'Control your home with voice commands'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Box sx={{ bgcolor: '#121212', color: 'white', minHeight: '100vh', pt: 4 }}>
      {/* Category Filter */}
      <Container ref={filterRef}>
        <Typography variant="h3" component="h1" gutterBottom textAlign="center" sx={{ mb: 6 }}>
          Our Products
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 6 }}>
          {categories.map((category, index) => (
            <Grid item key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Button
                  variant={selectedCategory === category ? "contained" : "outlined"}
                  color="secondary"
                  onClick={() => setSelectedCategory(category)}
                  sx={{
                    borderRadius: 8,
                    px: 3,
                    py: 1,
                    background: selectedCategory === category 
                      ? 'linear-gradient(45deg, #E74C3C 30%, #FF8C00 90%)'
                      : 'transparent',
                    '&:hover': {
                      background: selectedCategory === category 
                        ? 'linear-gradient(45deg, #E74C3C 30%, #FF8C00 90%)'
                        : 'rgba(255,255,255,0.05)'
                    }
                  }}
                >
                  {category}
                </Button>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Products Grid */}
      <Container ref={productsRef}>
        <Grid container spacing={4}>
          {filteredProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  onMouseEnter={() => setHoveredItem(product.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      bgcolor: 'rgba(255,255,255,0.08)',
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={product.image}
                      alt={product.name}
                      sx={{
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        }
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        p: 1,
                        display: 'flex',
                        gap: 1
                      }}
                    >
                      <IconButton
                        sx={{
                          bgcolor: 'rgba(255,255,255,0.1)',
                          backdropFilter: 'blur(5px)',
                          '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
                        }}
                      >
                        <FaHeart color="white" />
                      </IconButton>
                      <IconButton
                        sx={{
                          bgcolor: 'rgba(255,255,255,0.1)',
                          backdropFilter: 'blur(5px)',
                          '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
                        }}
                      >
                        <FaSearch color="white" />
                      </IconButton>
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, color: 'white' }}>
                    <Typography variant="h6" gutterBottom>{product.name}</Typography>
                    <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                      {product.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Rating value={product.rating} precision={0.5} readOnly size="small" />
                      <Typography variant="body2" sx={{ ml: 1, opacity: 0.8 }}>
                        ({product.reviews})
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6" color="secondary">
                        ${product.price}
                      </Typography>
                      <Button
                        variant={hoveredItem === product.id ? "contained" : "outlined"}
                        color="secondary"
                        startIcon={<FaShoppingCart />}
                        sx={{
                          background: hoveredItem === product.id 
                            ? 'linear-gradient(45deg, #E74C3C 30%, #FF8C00 90%)'
                            : 'transparent',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #E74C3C 30%, #FF8C00 90%)'
                          }
                        }}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
