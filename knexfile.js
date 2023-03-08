module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex_test',
      user:     'postgres',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
