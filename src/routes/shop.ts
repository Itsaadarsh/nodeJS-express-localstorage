import express from 'express';
const router = express.Router();
import shopController from '../controllers/shop';

router.get('/', shopController.getHome);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postDeleteCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

export default module.exports = router;
