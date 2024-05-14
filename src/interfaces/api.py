# interfaces/api.py

from flask import Flask, jsonify, request
from application.order_usecases import CreateOrderUseCase, ListOrdersUseCase
from infrastructure.order_repository import OrderRepository

app = Flask(__name__)
order_repository = OrderRepository()
create_order_usecase = CreateOrderUseCase(order_repository)
list_orders_usecase = ListOrdersUseCase(order_repository)

@app.route('/orders', methods=['POST'])
def create_order():
    data = request.json
    total = data['total']
    fecha = data['fecha']
    estatus = data['estatus']

    order = create_order_usecase.execute(total, fecha, estatus)
    return jsonify(order.__dict__), 201

@app.route('/ordenes', methods=['GET'])
def list_orders():
    orders = list_orders_usecase.execute()
    return jsonify([order.__dict__ for order in orders]), 200

if __name__ == '__main__':
    app.run(debug=True)
