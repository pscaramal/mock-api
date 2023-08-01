import Pool from 'pg-pool';

export const pool = new Pool({
    user: "cerc_user",
    database: "b2b_int_db_core_01-db",
    password: "cerc_password",
    port: 5432,
    host: "localhost",
  });
