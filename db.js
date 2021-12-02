const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: '10.12.51.207',
  database: 'hocomoco',
  password: 'maniknik',
  port: 5432,
})
pool.query('SELECT * FROM fuser', (err, res) => {
  console.log(err, res)
  pool.end()
})