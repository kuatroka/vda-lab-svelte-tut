import Papa from 'papaparse'


// fetch data from internet/ online JSON file
/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
	const res = await fetch('https://vda-lab.gitlab.io/datavis-technologies/assets/flights_part.csv', {
        headers: {
            'Content-Type': 'text/csv'
                }})
    let csv_data = await res.text()
    let csv_parsed = Papa.parse(csv_data, {header: true})
    let flights = csv_parsed.data.slice(0,5) // fetches only 5 records.
    

    // console.log(flights)
    console.log(flights)
	return { flights }
}
