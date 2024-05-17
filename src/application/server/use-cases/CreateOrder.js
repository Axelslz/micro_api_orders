class CreateOrder {
    constructor(orderRepository) {
      this.orderRepository = orderRepository;
    }
  
    execute(order) {
      return this.orderRepository.save(order);
    }
  }
  
  module.exports = CreateOrder;
  