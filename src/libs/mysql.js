import mysql from "serverless-mysql";

export const conn = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "123123",
    port: 3306,
    database: "testmysql",
  },
});
