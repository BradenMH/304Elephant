const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  process.env.DB_NAME || 'uwmavmxp',
  process.env.DB_USER || 'uwmavmxp',
  process.env.DB_PASSWORD || 'l5iO-IvPJlrfAB3AxVtgcpmd01NrkgBH',
  {
    host: 'salt.db.elephantsql.com',
    port: parseInt(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
    pool: {
      max: 10,
      min: 0,
      idle: 30000
    },
    define: {
      timestamps: false
    }
  }
)

module.exports = sequelize
