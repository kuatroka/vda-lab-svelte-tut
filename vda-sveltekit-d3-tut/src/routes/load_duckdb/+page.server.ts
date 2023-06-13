import { Database } from "duckdb-async";

//// working with parquet files
// const parquet_file = 'src/routes/load_duckdb/1762068-TICKER-2023-05-31.parquet'
// const query_parquet = `SELECT distinct(tr_id) as tr_id, SUM(value) as amount, quarter from read_parquet("${parquet_file}") group by quarter, tr_id limit 100`;

// export async function load() {
//   const db = await Database.create(":memory:");
//   console.time(query_parquet);
//   const entries = await db.all(query_parquet);
//   console.timeEnd(query_parquet);
//   console.log(entries.slice(0, 3));
//   return { entries }; 
// };

// console.time(query);

// console.timeEnd(query);

////////////////////////////////////////////////////////////////
//// working with mini consolidated duckdb file
const conso_duckdb_file = '/Users/yo_macbook/Documents/app_data/TR_05_TEST_FINAL_DB_PARQ_ARROW/concatenated_files_duckdb.duckdb';
const query_duckdb = `SELECT distinct(tr_id) as tr_id, SUM(value) as amount, quarter from my_table group by quarter, tr_id limit 100`;
export async function load() {
  const db = await Database.create(conso_duckdb_file);
  console.time(query_duckdb);
  const entries = await db.all(query_duckdb);
  console.timeEnd(query_duckdb);
  await db.close();
  console.log(entries.slice(0, 3));
  return { entries }  
};

// load()

////////////////////////////////////////////////////////////////

//// //// working with mini consolidated parquet file
// const conso_parquet_file = '/Users/yo_macbook/Documents/app_data/TR_05_TEST_FINAL_DB_PARQ_ARROW/concatenated_files_duckdb_to_parq.parquet';
// const query_conso_parq = `SELECT distinct(tr_id) as tr_id, SUM(value) as amount, quarter from read_parquet("${conso_parquet_file}") group by quarter, tr_id limit 100`;
// export async function load() {
//   const db = await Database.create(":memory:");
//   console.time(query_conso_parq);
//   const entries = await db.all(query_conso_parq);
//   console.timeEnd(query_conso_parq);
//   await db.close();
//   console.log(entries.slice(0, 3));
//   return { entries }  
// };


////////////////////////////////////////////////////////////////
// async function simpleTest() {
//   const db = await Database.create(":memory:");
//   const rows = await db.all("select * from range(1,10)");
//   console.log(rows);
// }
// simpleTest();

