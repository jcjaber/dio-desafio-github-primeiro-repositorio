import { Pool } from "pg";

const connectionString = 'postgres://txhjedij:jKWJZiqeyxa3Zi5DDS8RIYhKvvxD26mm@kesavan.db.elephantsql.com/txhjedij';

const db = new Pool({ connectionString });

export default db;