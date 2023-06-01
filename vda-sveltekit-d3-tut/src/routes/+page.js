// export const load = () => {
//     return {
//         values: [1,2,3,"a string"]
//     }
//     }

// fetch data from internet/ online API
/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
	const res = await fetch('https://raw.githubusercontent.com/domoritz/maps/master/data/iris.json')
    const flowers = await res.json()
	return { flowers }
}

