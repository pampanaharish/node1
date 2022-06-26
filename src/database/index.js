import { Sequelize } from 'sequelize';

class Database {
  constructor(environment, dbConfig) {
    this.environment = environment;
    this.dbConfig = dbConfig;
    this.isTestEnvironment = this.environment === 'test';
  }
  getConnectionString() {
    const { username, password, host, port, database } = this.dbConfig[this.environment];
    return `postgres://${username}:${password}@${host}:${port}/${database}`;
  }
  async connect() {
    const connectionString = this.getConnectionString();
    this.connection = new Sequelize(uri, { logging: this.isTestEnvironment ? false : console.log });
    await this.connection.authenticate({ logging: false });
    if (!this.isTestEnvironment) {
      console.log('Connection has been established successfully');
    }
    await this.sync();
  }
  async sync() {
    await this.connection.sync({
      force: this.isTestEnvironment,
      logging: false,
    });
    if (!this.isTestEnvironment) {
      console.log('Models synchronized successfully');
    }
  }

  async disconnect() {
    await this.connection.close();
  }
}

export default Database;
