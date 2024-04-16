// Usage
const mongoDBConnection = new MongoDBConnection();
const postgreSQLConnection = new PostgreSQLConnection();

const dbManager1 = new DatabaseManager(mongoDBConnection);
dbManager1.connectToDatabase();
dbManager1.disconnectFromDatabase();

const dbManager2 = new DatabaseManager(postgreSQLConnection);
dbManager2.connectToDatabase();
dbManager2.disconnectFromDatabase();
