import sqlite from 'better-sqlite3';
const db = new sqlite('./static/chinook.db');

//// add a dynamic database definded in vite
// https://github.com/Walker088/svelteBlog/blob/b151fda44dc9487b3c4569f8be80b09224b98cb2/src/lib/dao/sqlite.js 
// let dbConf = {}
// if (import.meta.env.VITE_DB_VERBOSE === "console") dbConf.verbose = console.log;
// const db = new sqlite(`./${import.meta.env.VITE_DB_NAME}`, dbConf);

export default db;

