import { Box, Typography, Button, Container, Grid, Paper, Rating, Divider, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShippingFast, FaCreditCard, FaHeadset, FaStar, FaQuoteRight, FaArrowRight } from 'react-icons/fa';
import useScrollReveal from '../hooks/useScrollReveal';

const Home = () => {
  const heroRef = useScrollReveal();
  const featuresRef = useScrollReveal();
  const productsRef = useScrollReveal();
  const categoriesRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const brandsRef = useScrollReveal();
  const blogRef = useScrollReveal();

  const features = [
    {
      icon: <FaShippingFast size={40} />,
      title: 'Fast Delivery',
      description: 'Free worldwide shipping on all orders over $100'
    },
    {
      icon: <FaCreditCard size={40} />,
      title: 'Secure Payment',
      description: 'Multiple payment methods accepted with SSL encryption'
    },
    {
      icon: <FaHeadset size={40} />,
      title: '24/7 Support',
      description: 'Dedicated customer support team at your service'
    }
  ];

  const categories = [
    { name: 'Electronics', image: 'https://source.unsplash.com/800x600/?electronics', count: '1.2k Products' },
    { name: 'Fashion', image: 'https://source.unsplash.com/800x600/?fashion', count: '2.5k Products' },
    { name: 'Home & Living', image: 'https://source.unsplash.com/800x600/?home', count: '1.8k Products' },
    { name: 'Sports', image: 'https://source.unsplash.com/800x600/?sports', count: '950 Products' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      image: 'https://source.unsplash.com/100x100/?portrait-woman-1',
      text: 'Amazing products and lightning-fast delivery. The customer service is exceptional!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Tech Enthusiast',
      image: 'https://source.unsplash.com/100x100/?portrait-man-1',
      text: 'Best tech deals I\'ve found online. The website is so easy to navigate.',
      rating: 5
    },
    {
      name: 'Emma Wilson',
      role: 'Fashion Blogger',
      image: 'https://source.unsplash.com/100x100/?portrait-woman-2',
      text: 'High-quality products at great prices. Will definitely shop here again!',
      rating: 4
    }
  ];

  const stats = [
    { label: 'Active Users', value: '2M+' },
    { label: 'Products Sold', value: '500K+' },
    { label: 'Five Star Reviews', value: '100K+' },
    { label: 'Countries Served', value: '50+' }
  ];

  const brands = [
    'https://source.unsplash.com/200x100/?brand-logo-1',
    'https://source.unsplash.com/200x100/?brand-logo-2',
    'https://source.unsplash.com/200x100/?brand-logo-3',
    'https://source.unsplash.com/200x100/?brand-logo-4',
    'https://source.unsplash.com/200x100/?brand-logo-5'
  ];

  const blogPosts = [
    {
      title: 'Top Tech Trends 2025',
      image: 'https://source.unsplash.com/600x400/?technology',
      excerpt: 'Discover the latest technology trends that are shaping our future.',
      date: 'April 15, 2025'
    },
    {
      title: 'Style Guide: Summer 2025',
      image: 'https://source.unsplash.com/600x400/?fashion-summer',
      excerpt: 'Get ready for summer with our comprehensive style guide.',
      date: 'April 14, 2025'
    },
    {
      title: 'Smart Home Essentials',
      image: 'https://source.unsplash.com/600x400/?smart-home',
      excerpt: 'Transform your home with these must-have smart devices.',
      date: 'April 13, 2025'
    }
  ];

  const featuredProducts = [
    {
      image: 'https://source.unsplash.com/600x400/?headphones',
      title: 'Premium Headphones',
      description: 'Experience crystal clear sound'
    },
    {
      image: 'https://source.unsplash.com/600x400/?smartwatch',
      title: 'Smart Watches',
      description: 'Stay connected on the go'
    },
    {
      image: 'https://source.unsplash.com/600x400/?smartphone',
      title: 'Latest Smartphones',
      description: 'Cutting-edge mobile technology'
    }
  ];

  return (
    <Box sx={{ bgcolor: '#121212', color: 'white' }}>
      {/* Hero Section */}
      <Box
        ref={heroRef}
        sx={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2C3E50 100%)',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Discover Amazing Products
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                  Shop the future with our cutting-edge collection
                </Typography>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link to="/products" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      sx={{ 
                        borderRadius: 2,
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        background: 'linear-gradient(45deg, #E74C3C 30%, #FF8C00 90%)',
                      }}
                    >
                      Explore Now
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                className="floating"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="https://source.unsplash.com/800x600/?shopping-tech"
                  alt="Shopping"
                  style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container ref={featuresRef} sx={{ py: 10 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Why Choose Us
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      bgcolor: 'rgba(255,255,255,0.08)',
                    }
                  }}
                >
                  <Box sx={{ color: 'secondary.main', mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h5" gutterBottom>{feature.title}</Typography>
                  <Typography variant="body1" sx={{ opacity: 0.8 }}>{feature.description}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Categories Section */}
      <Box ref={categoriesRef} sx={{ py: 10, bgcolor: 'rgba(255,255,255,0.02)' }}>
        <Container>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Shop by Category
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {categories.map((category, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 4,
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={category.image}
                      alt={category.name}
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 2,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                      }}
                    >
                      <Typography variant="h6">{category.name}</Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>{category.count}</Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container ref={testimonialsRef} sx={{ py: 10 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Customer Reviews
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      bgcolor: 'rgba(255,255,255,0.08)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      component="img"
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        mr: 2,
                      }}
                    />
                    <Box>
                      <Typography variant="h6">{testimonial.name}</Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>{testimonial.role}</Typography>
                    </Box>
                  </Box>
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                  <Typography variant="body1" sx={{ opacity: 0.9 }}>"{testimonial.text}"</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box ref={statsRef} sx={{ py: 10, bgcolor: 'rgba(255,255,255,0.02)' }}>
        <Container>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      bgcolor: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Typography variant="h3" color="secondary.main" gutterBottom>
                      {stat.value}
                    </Typography>
                    <Typography variant="h6">{stat.label}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Blog Section */}
      <Container ref={blogRef} sx={{ py: 10 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Latest Articles
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    height: '100%',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={post.image}
                    alt={post.title}
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                    }}
                  />
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h5" gutterBottom>{post.title}</Typography>
                    <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>{post.date}</Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>{post.excerpt}</Typography>
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={{ mt: 2 }}
                    >
                      Read More
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Newsletter Section */}
      <Box sx={{ py: 10, bgcolor: 'rgba(255,255,255,0.02)' }}>
        <Container>
          <Paper
            elevation={3}
            sx={{
              p: 6,
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(44,62,80,0.9) 0%, rgba(52,152,219,0.9) 100%)',
              borderRadius: 4,
            }}
          >
            <Typography variant="h3" gutterBottom>
              Stay Updated
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Subscribe to our newsletter for exclusive deals and updates
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(45deg, #E74C3C 30%, #FF8C00 90%)',
                }}
              >
                Subscribe Now
              </Button>
            </motion.div>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
