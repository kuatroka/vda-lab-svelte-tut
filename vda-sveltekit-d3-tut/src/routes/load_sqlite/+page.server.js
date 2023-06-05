import db from '$lib/db';
// one dataset
// export function load() {
//     const query = 'SELECT * FROM employee';
//     let employees = db.prepare(query).all();
//     // console.log(employees)
//     return { employees };
// }

// multiple datasets

export function load() {
        const query = 'SELECT * FROM employee LIMIT 2';
        const employees = db.prepare(query).all();
        // console.log(employees)

        const query2 = 'SELECT * FROM artist LIMIT 5';
        const artists = db.prepare(query2).all();
        // console.log(artists)

    return { employees, artists  }
}
