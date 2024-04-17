import { IDatabaseConnection } from "./IDatabaseConnection";

export class PostgreSQLConnection implements IDatabaseConnection {
  connect() {
    // Code to connect to PostgreSQL
    console.log("Connected to PostgreSQL");
  }

  disconnect() {
    // Code to disconnect from PostgreSQL
    console.log("Disconnected from PostgreSQL");
  }
}
