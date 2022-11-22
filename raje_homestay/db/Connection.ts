import pgPromise from 'pg-promise';
const pg = pgPromise({});
const conn_url = process.env["PGSQL_URL"]!;
export const db = pg(conn_url);

