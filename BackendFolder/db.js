const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://tyler:Ce5jOgo3JBZyakgTD3pQybqwavwA9sEJ@dpg-ch4oabhjvhthrjkml080-a.ohio-postgres.render.com/db_simple_steam';

const pool = new Pool({
  connectionString: connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined
});

pool.connect()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection error:', err));

module.exports = pool;
