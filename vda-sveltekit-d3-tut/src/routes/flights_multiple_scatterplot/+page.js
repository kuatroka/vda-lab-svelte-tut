// fetch data from internet/ online JSON file
/** @type {import('../$types').PageLoad} */

export async function load({ fetch }) {
	const res = await fetch('http://vda-lab.gitlab.io/datavis-technologies/assets/flights_part.json')
    const flights = await res.json()
    
    console.log(flights.slice(0, 3))
	return { flights }
}

