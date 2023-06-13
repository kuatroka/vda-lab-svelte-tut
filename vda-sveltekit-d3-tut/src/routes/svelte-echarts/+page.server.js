import sqlite_db from '$lib/sqlite';


export async function load() {
        const query = `SELECT distinct(tr_id) as tr_id, SUM(value) as amount, quarter, rdate from my_table group by quarter, tr_id limit 100`;
        console.time(query);
        const transactions = sqlite_db.prepare(query).all();
        console.log(transactions.slice(0, 7));
        console.timeEnd(query);

        // const query2 = 'SELECT * FROM artist LIMIT 5';
        // const artists = sqlite_db.prepare(query2).all();
        // console.log(artists)

    return { transactions  };
}
// load()
