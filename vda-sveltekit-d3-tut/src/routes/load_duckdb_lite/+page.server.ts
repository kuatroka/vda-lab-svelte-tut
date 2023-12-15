import { initDB } from '$lib/duckdb'
/** @type {import('./$types').PageServerLoad} */

const concat_cik_parquet = '/Users/yo_macbook/Documents/app_data/TR_05_TEST_FINAL_DB_PARQ_ARROW/concatenated_files_polars_to_parquet.parquet';

const db = await initDB();
await db.registerFileURL('concatenated_files_polars_to_parquet.parquet', concat_cik_parquet, 4, false);
const conn = await db.connect();


console.time("total")
export async function load() {
    const entries = conn.query(`
      SELECT * 
        FROM parquet_scan('concatenated_files_polars_to_parquet.parquet') 
        LIMIT 10
    `)
    return  { 
        entries
    } ;
	};

console.timeEnd("total")

