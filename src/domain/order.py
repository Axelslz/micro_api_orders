# domain/order.py

class Order:
    def __init__(self, id, total, fecha, estatus):
        self.id = id
        self.total = total
        self.fecha = fecha
        self.estatus = estatus
