# application/order_usecases.py

from domain.order import Order
from infrastructure.order_repository import OrderRepository

class CreateOrderUseCase:
    def __init__(self, order_repository):
        self.order_repository = order_repository

    def execute(self, total, fecha, estatus):
        order = Order(id=None, total=total, fecha=fecha, estatus=estatus)
        created_order = self.order_repository.create(order)
        return created_order

class ListOrdersUseCase:
    def __init__(self, order_repository):
        self.order_repository = order_repository

    def execute(self):
        orders = self.order_repository.list()
        return orders
