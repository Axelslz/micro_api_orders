class ListOrders {
    constructor(orderRepository) {
      this.orderRepository = orderRepository;
    }
  
    execute() {
      return this.orderRepository.getAll();
    }
  }
  
  module.exports = ListOrders;
  