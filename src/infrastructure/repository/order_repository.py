from config.database_config import get_database_connection
from domain.model.order import Order

class OrderRepository:
    def __init__(self):
        self.conn = get_database_connection()
        self._create_table_if_not_exists()

    def _create_table_if_not_exists(self):
        cursor = self.conn.cursor()
        cursor.execute('''CREATE TABLE IF NOT EXISTS orders (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            total FLOAT,
                            fecha DATE,
                            estatus VARCHAR(255)
                        )''')
        self.conn.commit()

    def create(self, order):
        cursor = self.conn.cursor()
        cursor.execute(
            'INSERT INTO orders (total, fecha, estatus) VALUES (%s, %s, %s)',
            (order.total, order.fecha, order.estatus)
        )
        self.conn.commit()
        order_id = cursor.lastrowid
        order.id = order_id
        cursor.close()
        return order

    def list(self):
        cursor = self.conn.cursor()
        cursor.execute('SELECT * FROM orders')
        rows = cursor.fetchall()
        orders = []
        for row in rows:
            order = Order(id=row[0], total=row[1], fecha=row[2], estatus=row[3])
            orders.append(order)
        cursor.close()
        return orders