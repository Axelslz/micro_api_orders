const express = require('express');
const OrderController = require('../controllers/OrderController');
const MySQLOrderRepository = require('../persistence/MySQLOrderRepository');

const router = express.Router();
const orderRepository = new MySQLOrderRepository();
const orderController = new OrderController(orderRepository);

router.post('/orders', (req, res) => orderController.createOrder(req, res));
router.get('/orders', (req, res) => orderController.listOrders(req, res));

module.exports = router;


