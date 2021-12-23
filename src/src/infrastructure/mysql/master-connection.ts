import {
  Connection,
  ConnectionOptions,
  createConnection,
  EntityManager,
  getConnection
} from 'typeorm';
  
export class MasterDBConnection {
  private static con?: Connection;
  static getManager = (): Promise<EntityManager> => MasterDBConnection.get().then(con => con.manager);

  static get = async (): Promise<Connection> => {
    if (MasterDBConnection.con && MasterDBConnection.con.isConnected) {
      return MasterDBConnection.con;
    }

    if (MasterDBConnection.con instanceof Connection) {
      return MasterDBConnection.con.connect();
    }
    return MasterDBConnection.create();
  };

  private static create = async (): Promise<Connection> => {
    MasterDBConnection.con = await createConnection(MasterConnection.options).catch(() => getConnection(),);
    
    if (!MasterDBConnection.con.isConnected) await MasterDBConnection.con.connect();
    
    return MasterDBConnection.con;
  };

  static close = async (): Promise<void> => {
    if (!MasterDBConnection.con) {
        return;
    }
    
    if (MasterDBConnection.con && MasterDBConnection.con.isConnected) {
        MasterDBConnection.con.close();
    }
    MasterDBConnection.con = undefined;
  };
}

export namespace MasterConnection {
  export const options: ConnectionOptions = {
    type: 'mysql',
    host: process.env.MYSQL_WRITE_HOST,
    port: parseInt(process.env.MYSQL_DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: process.env.NODE_ENV === 'production' ? ['error'] : 'all',
  };
}
