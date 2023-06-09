import { Database } from "duckdb-async";

//// working with parquet files
const parquet_file = 'src/routes/load_duckdb/1762068-TICKER-2023-05-31.parquet'
const query_parquet = `SELECT distinct(tr_id), SUM(value) as amount from read_parquet("${parquet_file}") group by tr_id`;

// export async function load() {
//   const db = await Database.create(":memory:");
//   const entries = await db.all(query_parquet);
//   console.log(entries.slice(0, 3));
//   return { entries } 
// }

//// working with duckdb files
const duckdb_file = '/Users/yo_macbook/Documents/app_data/TR_05_TEST_FINAL_DB_PARQ_ARROW/concatenated_files_duckdb.duckdb';
const query_duckdb = `SELECT distinct(tr_id), SUM(value) as amount from my_table group by tr_id order by amount desc limit 10`;
export async function load() {
  const db = await Database.create(duckdb_file);
  const entries = await db.all(query_duckdb);
  await db.close();
  console.log(entries.slice(0, 3));
  return { entries }  
}

// load()


////////////////////////////////////////////////////////////////
// async function simpleTest() {
//   const db = await Database.create(":memory:");
//   const rows = await db.all("select * from range(1,10)");
//   console.log(rows);
// }
// simpleTest();

