import { IDatabaseConnection } from "./IDatabaseConnection";

export class DatabaseManager {
  private dbConnection: IDatabaseConnection;

  constructor(dbConnection: IDatabaseConnection) {
    this.dbConnection = dbConnection;
  }

  connectToDatabase() {
    this.dbConnection.connect();
  }

  disconnectFromDatabase() {
    this.dbConnection.disconnect();
  }
}
