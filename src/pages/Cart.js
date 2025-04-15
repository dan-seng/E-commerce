import { Container, Typography, Box, Card, CardContent, Grid, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

const Cart = () => {
  // This would normally come from a cart context/state
  const cartItems = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      quantity: 1,
      image: 'https://source.unsplash.com/400x300/?headphones',
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: 'center', my: 4 }}>
          Your cart is empty
        </Typography>
      ) : (
        <>
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={3}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="subtitle1" color="secondary">
                        ${item.price}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton size="small" color="primary">
                          <FaMinus />
                        </IconButton>
                        <Typography>{item.quantity}</Typography>
                        <IconButton size="small" color="primary">
                          <FaPlus />
                        </IconButton>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <Typography variant="subtitle1">
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <IconButton color="error">
                        <FaTrash />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <Box sx={{ mt: 4, textAlign: 'right' }}>
            <Typography variant="h5" gutterBottom>
              Total: ${total.toFixed(2)}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 2 }}
            >
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Cart;
