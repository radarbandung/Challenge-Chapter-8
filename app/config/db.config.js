// setup database here, change the values to suit your environment
module.exports = {
  HOST: 'localhost',
  USER: 'syafii',
  PASSWORD: 'belajarbinar',
  DB: 'postgres',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
