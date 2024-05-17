const Order = require('../../domain/entities/Order');
const CreateOrder = require('../../application/server/use-cases/CreateOrder');
const ListOrders = require('../../application/server/use-cases/ListOrders');

class OrderController {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async createOrder(req, res) {
    const { total, fecha, estatus } = req.body;
    const order = new Order(null, total, fecha, estatus);
    const createOrder = new CreateOrder(this.orderRepository);
    const createdOrder = await createOrder.execute(order);
    res.status(201).json(createdOrder);
  }

  async listOrders(req, res) {
    const listOrders = new ListOrders(this.orderRepository);
    const orders = await listOrders.execute();
    res.status(200).json(orders);
  }
}

module.exports = OrderController;



