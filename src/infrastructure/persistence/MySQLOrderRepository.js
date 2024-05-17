const pool = require('../../database/connection');
const OrderRepository = require('../../domain/repositories/OrderRepository');
const Order = require('../../domain/entities/Order');

class MySQLOrderRepository extends OrderRepository {
  constructor() {
    super();
  }

  async getById(id) {
    const [rows] = await pool.query('SELECT * FROM Ordenes WHERE Id = ?', [id]);
    const row = rows[0];
    if (!row) return null;
    return new Order(row.Id, row.Total, row.Fecha, row.Estatus);
  }

  async save(order) {
    const [result] = await pool.query(
      'INSERT INTO Ordenes (Total, Fecha, Estatus) VALUES (?, ?, ?)',
      [order.total, order.fecha, order.estatus]
    );
    const [rows] = await pool.query('SELECT * FROM Ordenes WHERE Id = ?', [result.insertId]);
    const row = rows[0];
    return new Order(row.Id, row.Total, row.Fecha, row.Estatus);
  }

  async getAll() {
    const [rows] = await pool.query('SELECT * FROM Ordenes');
    return rows.map(row => new Order(row.Id, row.Total, row.Fecha, row.Estatus));
  }
}

module.exports = MySQLOrderRepository;


